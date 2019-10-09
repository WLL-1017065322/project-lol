const express = require("express");

const app = express();

// token
app.set("secret", "asf54a54sf5as");

app.use(require("cors")());
app.use(express.json());
// 托管静态文件
app.use("/admin", express.static(__dirname + "/admin"));
app.use("/", express.static(__dirname + "/web"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/boss", express.static(__dirname + "/boss"));
app.use("/web", express.static(__dirname + "/web"));

require("./plugins/db")(app);
require("./routes/admin")(app);
require("./routes/boss")(app);
require("./routes/web")(app);

app.listen(3000, () => {
  console.log("3000");
});
