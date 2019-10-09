const mongoose = require("mongoose");
Schema = mongoose.Schema;
const adSchema = new Schema({
  name: {
    type: String
  },
  //  注意
  items: {
    image: {
      type: String
    },
    url: {
      type: String
    }
  }
});

module.exports = mongoose.model("Ad", adSchema);
