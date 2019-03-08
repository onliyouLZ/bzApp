// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

/**
 * 简单的axios封装
 * @type {boolean}
 */
axios.defaults.timeout = 5000;
axios.defaults.baseURL ='';
axios.defaults.crossDomain=true; //支持跨域
axios.defaults.withCredentials=true;//让ajax携带cookie



Vue.prototype.$http = axios;



import mui from '../static/mui/js/mui.min.js'
import '../static/mui/css/mui.min.css'

Vue.config.productionTip = false;
Vue.prototype.$mui=mui;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
