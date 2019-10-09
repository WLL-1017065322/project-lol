const mongoose = require("mongoose");
Schema = mongoose.Schema;
const articleSchema = new Schema(
  {
    title: {
      type: String
    },
    //  多个关联
    categories: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
      }
    ],
    body: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Article", articleSchema);
