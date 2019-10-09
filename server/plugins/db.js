module.exports = app => {
  const mongoose = require("mongoose");
  const DB_URL = "localhost:27017";
  const DB_NAME = "node-vue-lol";
  mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  require("require-all")(__dirname + "/../models");
};
