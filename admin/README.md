# admin

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 安装 elementui vue add element

## 安装 router vue add router => history no

## 安装 axios 创建 http.js 并在 main.js 引入

## 创建 main.vue

### element 的 container 组件 复制粘贴到 view 的 main.vue 并配置到 router

### 更改 左侧

### 路由跳转 使用 elementui router index

### 路由跳转 只要 el-main 内容 改变 在里面加上 router-view ,在路由配置 mian 的子路由

## 创建 CategoryEdit.vue

### 1,input 双向数据绑定,2 监听原生事件/阻止跳转,native/prevent,绑定一个函数 在路由配置 main 的子路由

### post 创建数据,弹出提示 =>改进:判断 id,创建/编辑数据

### get 获取数据,给双向绑定的变量,判断 id 改变标题

### 添加 上级分类的下拉菜单,获取数据并渲染,下拉菜单点击后的值双向绑定 model.parent

## 创建 Categorylist.vue

### created => get 请求获取 categories,数据通过 <el-table :data="items"> 传递给表格,通过 <template slot-scope="scope"> 选中获取点击的对象

### 点击编辑 跳转到 /categories/edit/\${scope.row.\_id}

### 点击删除 remove{ element 的 box 弹窗,delete 请求,更新数据}

### 添加上级分类, :data=返回的数据, prop 为 prop="parent.name",

## 创建 ItemEdit.vue ItemList.vue 文件,并进行初步的修改,

### 添加上传功能 post 请求(ele 自备),处理返回的接口 afterUpload ;问题 1 数据不更新,\$set 或者 data 里定义 name...,问题 2:图片不显示,404,暴露的 upload 地址问题

### 创建 Itemlist.vue 图片的列表显示,ele 自定义列表显示,template,

## 创建 HeroEdit.vue

### 添加 类型选项: 下拉菜单多选 :multiple, 下拉菜单数据 get rest/categories

### 添加 难度,ele 评分组件 rate: 问题 1, data 定义的 model 被覆盖,导致 score 消失,问题 2:默认空值改成 0

### 信息分类:基本信息,技能. el-tabs 点击添加 input ,添加技能

## 创建 HeroList.vue

## 创建 ArticleEdit

### 文章详情 富文本 npm i vue2-editor 引入

## 创建 ArticleList

## 创建 AdEdit

### this.model = Object.assign({}, this.model, res.data);

## 创建 AdList

## 创建 AdminUsersEdit

### 密码处理 ==>后端

## 创建 AdminUsersList

# 登录

## 创建 login.vue 样式 ,登陆请求

# 响应拦截

## http.js http.interceptors.response.use()

## 根据返回状态码 401,跳转到登录页面

# 请求拦截

## http.js http.interceptors.request.use

# 客户端的路由限制

## 路由添加元信息

## 导航守卫


##  <el-select filterable v-model="item.hero"> 选项加删选