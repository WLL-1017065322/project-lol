module.exports = options => {
  const jwt = require("jsonwebtoken");
  const AdminUser = require("../models/AdminUser");
  const assert = require("http-assert");
  return async (req, res, next) => {
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();
    // const tokenData = jwt.verify(token, app.get("secret"));
    // assert(token,401,"请提供jwt token")
    assert(token, 401, "请先登录"); //token
    // 这里token必须存在
    // 此处会报错,将app换成req.app
    const { id } = jwt.verify(token, req.app.get("secret"));
    assert(id, 401, "请先登录"); //
    req.user = await AdminUser.findById(id);
    // const user = await AdminUser.findById(id)
    // console.log(req.user);
    assert(req.user, 401, "请先登录");
    await next();
  };
};
