module.exports = app => {
  const express = require("express");
  const router = express.Router();
  const categoryModel = require("../../models/categoryModel");

  router.post("/categories", async (request, response) => {
    const model = await categoryModel.create(request.body);
    response.send(model);
  });
  router.get("/categories", async (request, response) => {
    //限制10条 populate 关联对象
    const items = await categoryModel.find().populate("parent").limit(10);
    console.log(items);
    
    response.send(items);
  });
  // 获取详情页接口
  router.get("/categories/:id", async (request, response) => {
    //限制10条
    const model = await categoryModel.findById(request.params.id);
    response.send(model);
  });
  // 修改数据接口
  router.put("/categories/:id", async (request, response) => {
    const model = await categoryModel.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    response.send(model);
  });
  //删除接口
  router.delete("/categories/:id", async (request, response) => {
    await categoryModel.findByIdAndDelete(
      request.params.id,
      request.body
    );
    response.send({
      success: true
    });
  });
  app.use("/admin/api", router);
};
