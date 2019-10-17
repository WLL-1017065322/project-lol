### npm init -y

### npm i nodemon -g

### package.json ==> script 添加: "serve": "nodemon index.js",并全局安装

# 预备工作

## 安装 express: npm i express@next

## 安装 mongoose: npm i mongoose

## 安装 cors: npm i cors

# 创建服务器

## 引入路由

## 引入服务器

## 全局设置,secret (token))

# 创建路由

## post category 创建数据 返回 model

## get category 查找数据 返回 model

## get /categories/:id 查找指定 id 数据 返回 model

## put /categories/:id 查找指定 id 更新数据

## delete /categories/:id 删除指定 id 返回 success

## get category 查找数据(find().populate("parent").limit(10);) 返回 model

## post /admin/api/upload 上传图片,需要 mutler 中间件处理 ==>index.js 静态文件托管 app.use, 返回 图片 url 地址

## post /admin/api/login 1 根据用户名找用户 findOne().select //2 校验密码 (明文,密文)) require('bcrypt) //3 返回 token npm i jsonwebtoken

### 全局加密钥

## 路由之间加个中间件,async (req, res, next) => {const token = String(req.headers.authorization || "").split(" ").pop(); const { id } = jwt.verify(token, app.get("secret")); req.user = await adminUser.findById(id); await next();

### 添加包处理 错误 npm i http-assert 用于简化错误的处理

# 连接数据库

# 创建模型

## category

### name:

### parent: type: mongoose.SchemaTypes.ObjectId,

## Item

## Hero: 添加关联 category: {type: mongoose.SchemaTypes.ObjectId,reg: "category"},添加多个数据

## Article

## AdminUser:

### 密码处理 npm i bcrypt 再次点击会使密码再次散列.后端 model 加 select:false

# 通用 CRUD npm i inflection

### 动态路由:

#### express.Router({ mergeParams: true

#### 转类名(解决引的路径问题) categories Category ===>增加中间件

### 动态模型


# 问题
## 上传文件 401: 定义全局的mixin()

## OverwriteModelError: Cannot overwrite `AdminUser` model once compiled: 检查 所有使用AdminUser的地方包括模块,看名称是否错了

# 工具 require-all  npm install require-all

## article.js 加时间戳

## web/index.js路由:router.get("/news/init")


##  聚合查询

## web/index.js路由:router.get("/heros/init") 
### $$(".hero-nav>li").map(li=>li.innerText)
### 
$$(".hero-nav>li").map((li,i)=>{
    return {
        name:li.innerText,
        heros:$$("li", $$(".hero-list")[i]).map(el=>{
            return {
                name:$$("h3",el)[0].innerHTML,
                avatar:$$("img",el)[0].src
            }
        })
    }
})
### 
JSON.stringfy($$(".hero-nav>li").map((li,i)=>{
    return {
        name:li.innerText,
        heros:$$("li", $$(".hero-list")[i]).map(el=>{
            return {
                name:$$("h3",el)[0].innerHTML,
                avatar:$$("img",el)[0].src
            }
        })
    }
}))

## hero.model =>module.exports = mongoose.model('Hero', schema, 'heroes')加上es,不然默认heros

## mongodb数据打包==mongodump -d node-vue-lol 放到服务器root 运行命令mongorestore

