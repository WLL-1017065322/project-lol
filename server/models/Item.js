const mongoose = require("mongoose");
Schema = mongoose.Schema;
const itemSchema = new Schema({
  name: {
    type: String
  },
  //  注意
  icon: {
    type: String
  }
});

module.exports = mongoose.model("Item", itemSchema);
