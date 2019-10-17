import axios from "axios";
import Vue from "vue";
import router from "./router";

const http = axios.create({
  // baseURL: process.env.VUE_APP_API_URL || "/admin/api"
  // baseURL: "http://localhost:3000/admin/api"
  baseURL: "http://lol.wanglvlong.top/admin/api"
});
http.interceptors.request.use(
  function(config) {
    // Do something before request is sent 注意空格
    if (localStorage.token) {
      config.headers.Authorization = "Bearer " + localStorage.token;
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 拦截器 响应的拦截
http.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    // ele ui
    // 用户是否存在
    if(err.response.data.message == "jwt expired"){
      Vue.prototype.$message({
        type: "error",
        message: 'token过期',
      });
      localStorage.clear();
      router.push("/login");
    }
    else if (err.response.data.message) {
      Vue.prototype.$message({
        type: "error",
        message: err.response.data.message
      });
      if (err.response.status === 401) {
        router.push("/login");
      }
    }
    return Promise.reject(err);
  }
);
export default http;
