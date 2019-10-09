module.exports = app => {
  const express = require("express");
  const jwt = require("jsonwebtoken");
  const UserBoss = require("../../models/UserBoss");
  const assert = require("http-assert");
  const router = express.Router({
    mergeParams: true
  });
  router.post("/", async (req, res) => {
    // const modelName = require("inflection").classify(req.params.resource);
    // const Model = require(`../../models/${modelName}`);
    console.log(req.body);
    const model = await req.Model.create(req.body);
    // console.log(req.Model);
    res.send(model);
  });
  // 资源详情 获取详情页接口
  router.get("/:id", async (req, res) => {
    console.log("req.params.id", req.params.id);
    const model = await req.Model.findById(req.params.id);
    console.log("model:", model);
    res.send(model);
  });
  // 查
  router.get("/", async (req, res) => {
    res.send("111");
    // const queryOptions = {};
    // if (req.Model.modelName === "category") {
    //   queryOptions.populate = "parent";
    // }
    // const items = await req.Model.find()
    //   .setOptions(queryOptions)
    //   .limit(10);
    // console.log(items);

    // res.send(items);
  });

  // 登录校验中间件 ==>组件化
  //   const authMiddleware = require("../../middleware/auth");

  //  自动获取模型的中间件
  const resourceMiddleware = require("../../middleware/resource");

  //路由挂载 中间件 处理
  // app.use("/boss/api/rest/:resource", authMiddleware, resourceMiddleware, router);
  app.use(
    "/boss/api/rest/:resource",
    // authMiddleware(),
    resourceMiddleware(),
    router
  );

  app.post("/boss/api/login", async (req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);

    //1根据用户名找用户
    const UserBoss = require("../../models/UserBoss");
    // bossuser model 加了select 默认取不到,所以要加select()
    const user = await UserBoss.findOne({ email }).select("+password");
    // 使用 http-assert
    assert(user, 422, "用户不存在");

    const isValid = require("bcryptjs").compareSync(password, user.password);
    assert(isValid, 422, "邮箱或密码错误");

    const token = jwt.sign(
      {
        id: user._id
        // _id: user._id,
        // username: user.username
      },
      app.get("secret")
    );
    console.log('token',token);
    res.send({ token });
  });

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    console.log(err);
    // 此处 没有500 会报错
    res.status(err.statusCode || 500).send({
      message: err.message
    });
  });
};
