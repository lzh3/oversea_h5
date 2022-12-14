// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import "./assets/css/reset.css";
import "./assets/iconfont/iconfont.css";
import "./utils/changeRem";
import "./utils/filters";
import "./utils/directive";

import localStore from "@/utils/localStorage";

console.log("================mainjs执行=================");

// 配置i18n
import ch from "./language/ch";
import en from "./language/en";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "ch", // 定义默认语言为中文
  messages: {
    ch,
    en
  }
});

import vant from "./vantUI/component";
import "./assets/css/custom_ui.less";
Vue.use(vant);
// 转盘
import lottery from "vue-lottery";
Vue.use(lottery);
// touch事件
import touch from "vue-directive-touch";
Vue.use(touch);
import { Toast } from "vant";
Vue.prototype.$toast = Toast;

import CCommonTitle from "@/components/home/c-common-title";
Vue.component("CCommonTitle", CCommonTitle);
import CCommonTop from "./components/c-common-top.vue";
Vue.component("CCommonTop", CCommonTop);

// axios.defaults.withCredentials = true
// console.log("token", token);
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    let token = localStore.get("token");
    config.headers.token = token;

    // console.log("请求拦截", config);

    let baseUrl = localStore.get("BASEURL");
    console.log('local-baseurl', baseUrl)
    if (baseUrl) {
      config.baseURL = baseUrl;
      axios.defaults.baseURL = baseUrl;
    }
    
    console.log("请求拦截", config, baseUrl);
    // 发送请求
    return config;
  },
  function(error) {
    // 请求错误
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // console.log('响应拦截', response.data.errCode)
    let code = response.data.errCode;
    if (code == 401) {
      router.push({
        path: '/login'
      })
    }
    // 响应数据
    return response.data;
  },
  function(error) {
    // 响应错误
    return Promise.reject(error);
  }
);

axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router,
  i18n,
  components: { App },
  template: "<App/>"
});
