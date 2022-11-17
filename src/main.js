// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'
import "./utils/changeRem"
import "./utils/filters"


// 配置i18n
import ch from './language/ch'
import en from './language/en'
import VueI18n from "vue-i18n"
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ch', // 定义默认语言为中文
  messages: {
    ch,
    en,
  }
});

import vant from './vantUI/component'
import "./assets/css/custom_ui.less"
Vue.use(vant)

import {Toast} from 'vant'
Vue.prototype.$toast = Toast

import CCommonTitle from '@/components/home/c-common-title'
Vue.component('CCommonTitle', CCommonTitle)
import CCommonTop from './components/c-common-top.vue'
Vue.component('CCommonTop', CCommonTop)

axios.defaults.withCredentials = true
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // console.log('请求拦截', config)
  // 发送请求
  return config;
}, function (error) {
  // 请求错误
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log('响应拦截', response)
  // 响应数据
  return response.data;
}, function (error) {
  // 响应错误
  return Promise.reject(error);
});
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
Vue.prototype.$axios = axios;


/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
