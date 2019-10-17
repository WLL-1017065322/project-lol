module.exports = app => {
  const router = require("express").Router();
  const mongoose = require("mongoose");
  //   const Article = require("../../models/Article");
  const Category = mongoose.model("Category");
  const Article = mongoose.model("Article");
  const Hero = mongoose.model("Hero");
  const Item = mongoose.model("Item");
  const test = require("./moni");
  const test2 = require("./moni2");
  const test3 = require("./moni3");
  const itemMoni = require("./itemMoni");

  //初始化新闻的路由,仅用于测试
  router.get("/news/init", async (req, res) => {
    //   那些激活 lean 选项的查询，返回的文档是普通 javascript 对象
    const parent = await Category.findOne({
      name: "新闻"
    });//获取新闻下的分类下的数据
    const cats = await Category.find()
      .where({
        parent: parent
      })
      .lean();

    const newsTitles = [
      "Uzi再度对阵Rekkles FPX保持状态出击",
      "全球总决赛五大打野 野区争锋掌控全局",
      "Tian盲僧抢龙翻盘 iG小组赛吞下首败",
      "Tian盲僧临危受命抢下大龙 FPX逆天改命团灭SPY",
      "分析SKT击败RNG原因 RNG获胜只差毫厘#S9赛事复盘#",
      "乐言完美先手秒杀卡莎 TheShy飞雷神留人IG大获全胜",
      "英雄麦克疯：不喜欢打架的Shy哥",
      "全球总决赛五大AD 极限输出突破自我",
      "LNL报名仅剩最后一周!网吧海选赛战火升级",
      "Worlds第一线07：想知道选手看MV什么反应吗",
      "TOP5：Faker崔斯特当机立断灵性偷家",
      "iG冲击三连胜 FPX能否迎来首胜",
      "iG复仇TL喜获连胜 RNG憾负劲敌SKT",
      "高燃改编！S9全球总决赛LPL应援曲《出将》",
      "RNG再战宿敌SKT iG对阵TL志在复仇",
      "Faker小炮轰下开门红 RNG与iG获首胜"
    ];
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5);
        //slice(0) 赋值一个数组
      return {
        categories: randomCats.slice(0,2),
        title: title
      };
    });
    await Article.deleteMany({});
    await Article.insertMany(newsList);
    res.send(newsList);
  });
  //x新闻
  router.get("/news/list", async (req, res) => {
    console.log("111");
    // 此方法有一定问题
    // const parent = await Category.findOne({
    //   name: "新闻"
    // }).populate({
    //   path: "children",
    //   populate: {
    //     path: "newsList"
    //   }
    // }).lean();
    //第二种方法 聚合查寻
    const parent = await Category.findOne({
      name: "新闻"
    });
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: "articles",
          localField: "_id",
          foreignField: "categories",
          as: "newsList"
        }
      },
      // 添加字段,原有字段取出5个新闻
      {
        $addFields: {
          newsList: {
            $slice: ["$newsList", 5]
          }
        }
      }
    ]);
    const subCats = cats.map(v => v._id);
    cats.unshift({
      name: "热门",
      newsList: await Article.find()
        .where({
          categories: { $in: subCats }
        })
        .populate("categories")
        .limit(5)
        .lean()
    });
    cats.map(cat => {
      cat.newsList.map(news => {
        news.categoryName =
          cat.name === "热门" ? news.categories[0].name : cat.name;
        return news;
      });
      return cat;
    });

    res.send(cats);
  });
  //英雄init
  router.get("/heroes/init", async (req, res) => {
    await Hero.deleteMany({});
    const rawData = [
      test.zhanshi,
      test.fashi,
      test.cike,
      test.tanke,
      test.sheshou,
      test.fuzhu
    ];
    rawData.map(test => {
      test.heroes.map(hero => {
        for (let i = 0; i < test3.qunbu3.heroes.length; i++) {
          // console.log(test3.qunbu3.heroes[i].name);
          if (hero.name == test3.qunbu3.heroes[i].name) {
            for (var item in test3.qunbu3.heroes[i]) {
              hero[item] = test3.qunbu3.heroes[i][item];
            }
          }
        }
        return hero;
      });
      return test;
    });
    // console.log(rawData[1].heroes);

    for (let cat of rawData) {
      if (cat.name === "全部") {
        continue;
      }
      //找到当前分类在数据库中对应的数据
      const category = await Category.findOne({
        name: cat.name
      });
      console.log("cat", cat.name);
      console.log("category", category);
      // 给hero添加分类
      cat.heroes = cat.heroes.map(hero => {
        hero.categories = [category];
        return hero;
      });

      //录入英雄
      await Hero.insertMany(cat.heroes);
    }
    res.send(await Hero.find());
  });
  //英雄list
  router.get("/heroes/list", async (req, res) => {
    const parent = await Category.findOne({
      name: "英雄"
    });
    const cats = await Category.aggregate([
      // 查询 指定条件查询 parent字段等于_id
      { $match: { parent: parent._id } },
      // 关联查询
      {
        $lookup: {
          //关联heroes这个表
          from: "heroes",
          // 本地字段
          localField: "_id",

          foreignField: "categories",
          // 作为什么名字
          as: "heroList"
        }
      }
    ]);
    const subCats = cats.map(v => v._id);
    cats.unshift({
      name: "热门",
      heroList: await Hero.find()
        .where({
          categories: { $in: subCats }
        })
        .limit(10)
        .lean()
    });
    res.send(cats);
  });

  //文章详情
  router.get("/articles/:id", async (req, res) => {
    const data = await Article.findById(req.params.id).lean();
    // console.log(data);
    data.related = await Article.find()
      .where({
        categories: { $in: data.categories }
      })
      .limit(2);
    res.send(data);
  });

  router.get("/heroes/:id", async (req, res) => {
    const data = await Hero.findById(req.params.id)
      .populate("categories items1 items2 partners.hero")
      .lean();
    res.send(data);
  });

  router.get("/test", async (req, res) => {
    const rawData = [
      test.zhanshi,
      test.fashi,
      test.cike,
      test.tanke,
      test.sheshou,
      test.fuzhu
    ];
    rawData.map(test => {
      test.heroes.map(hero => {
        for (let i = 0; i < test2.qunbu2.heroes.length; i++) {
          // console.log(test2.qunbu2.heroes[i].name);
          if (hero.name == test2.qunbu2.heroes[i].name) {
            for (var item in test2.qunbu2.heroes[i]) {
              hero[item] = test2.qunbu2.heroes[i][item];
            }
          }
        }
        return hero;
      });
      return test;
    });
    console.log(rawData[1].heroes);
    res.send(rawData);
  });
  router.get("items/init",async (req,res)=>{
    

    await Item.deleteMany({});
    await Item.insertMany(itemList)
    res.send(itemMoni)

  })


  app.use("/web/api", router);
};
