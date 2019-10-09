const mongoose = require("mongoose");
Schema = mongoose.Schema;
const categorySchema = new Schema({
  name: {
    type: String
  },
  //  注意
  parent: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category"
  }
});
// virtual  是你能 get 和 set 但不能保存到 MongoDB 的 document 属性。
//getter用于格式化或符合的field，而setter用于de-composing一个单值到多值存储。
categorySchema.virtual("children", {
  localField: "_id",
  foreignField: "parent",
  justOne: false,
  ref: "Category"
});
// 第一种方法关联children的news
categorySchema.virtual("newsList", {
  localField: "_id",
  foreignField: "categories",
  justOne: false,
  ref: "Article"
});

module.exports = mongoose.model("Category", categorySchema);
