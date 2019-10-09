const mongoose = require("mongoose");
Schema = mongoose.Schema;
const adminUserSchema = new Schema({
  username: {
    type: String
  },
  //  注意
  password: {
    type: String,
    select: false, //散列一次 密码为空
    set(val){
      // return require('bcrypt').hashSync(val,10)
      return require('bcryptjs').hashSync(val,10)
    }
  }
});

module.exports = mongoose.model("AdminUser", adminUserSchema);
