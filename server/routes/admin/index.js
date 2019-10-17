module.exports = app => {
  const express = require("express");
  const jwt = require("jsonwebtoken");
  const AdminUser = require("../../models/AdminUser");
  const assert = require("http-assert");
  const router = express.Router({
    mergeParams: true
  });

  // const categoryModel = require("../../models/categoryModel");
  // 增==创建资源

  router.post("/", async (req, res) => {
    // const modelName = require("inflection").classify(req.params.resource);
    // const Model = require(`../../models/${modelName}`);
    const model = await req.Model.create(req.body);
    res.send(model);
  });

  // 资源详情 获取详情页接口
  router.get("/:id", async (req, res) => {
    //限制10条
    // const modelName = require("inflection").classify(req.params.resource);
    // const Model = require(`../../models/${modelName}`);
    console.log("req.params.id", req.params.id);
    const model = await req.Model.findById(req.params.id);
    console.log("model:", model);
    res.send(model);
  });
  // 更新资源 修改数据接口
  router.put("/:id", async (req, res) => {
    // const modelName = require("inflection").classify(req.params.resource);
    // const Model = require(`../../models/${modelName}`);
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });
  //删除接口
  router.delete("/:id", async (req, res) => {
    // const modelName = require("inflection").classify(req.params.resource);
    // const Model = require(`../../models/${modelName}`);
    await req.Model.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true
    });
  });

  // 查
  router.get("/", async (req, res) => {
    //限制10条 populate 关联对象
    // 把小写的单数,转成负数
    // const modelName = require("inflection").classify(req.params.resource);
    // const Model = require(`../../models/${modelName}`);
    // const items = await req.Model.find()
    //   .populate("parent")
    //   .limit(10);
    // console.log('req.Model.modelName',req.Model.modelName);
    const queryOptions = {};
    if (req.Model.modelName === "Category") {
      queryOptions.populate = "parent";
    }
    const items = await req.Model.find()
      .setOptions(queryOptions)
      .limit(100);
    // console.log(items);

    res.send(items);
  });

  // 登录校验中间件 ==>组件化
  const authMiddleware = require("../../middleware/auth");
  //  自动获取模型的中间件
  const resourceMiddleware = require("../../middleware/resource");
  //路由挂载 中间件 处理
  // app.use("/admin/api/rest/:resource", authMiddleware, resourceMiddleware, router);
  app.use(
    "/admin/api/rest/:resource",
    authMiddleware(),
    resourceMiddleware(),
    router
  );
  // 上传中间件
  const multer = require("multer");
  const upload = multer({ dest: __dirname + "/../../uploads" });
  // 上传接口
  app.post(
    "/admin/api/upload",
    authMiddleware(),
    upload.single("file"),
    async (req, res) => {
      const file = req.file; //一定要加multer才有req.file
      // file.url = `http://localhost:3000/uploads/${file.filename}`;
      file.url = `http://lol.wanglvlong.top/uploads/${file.filename}`;
      res.send(file);
    }
  );

  app.post("/admin/api/login", async (req, res) => {
    const { username, password } = req.body;

    //1根据用户名找用户
    // const AdminUser = require("../../models/AdminUser");
    // adminuser model 加了select 默认取不到,所以要加select()
    const user = await AdminUser.findOne({ username }).select("+password");
    // 使用 http-assert
    assert(user, 422, "用户不存在");
    //2校验密码 (明文,密文))
    // const isValid = require("bcrypt").compareSync(password, user.password);
    const isValid = require("bcryptjs").compareSync(password, user.password);
    assert(isValid, 422, "密码错误");

    //3返回token
    // const jwt = require("jsonwebtoken");
    const token = jwt.sign(
      {
        id: user._id
        // _id: user._id,
        // username: user.username
        // exp: Math.floor(Date.now() / 1000) + (60 * 1),
      },
      app.get("secret"),
      { expiresIn: 60 * 60 }
    );
    res.send({ token });
  });

  app.get("/admin/api/test", async (req, res) => {
    res.send()
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    console.log(err);
    // 此处 没有500 会报错
    res.status(err.statusCode || 500).send({
      message: err.message
    });
  });
};
