// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Config from '@/utils/api.js'

/**
 * 简单的axios封装
 * @type {boolean}
 */
axios.defaults.timeout = 5000;
axios.defaults.baseURL ='http://192.168.0.253:8099';
axios.defaults.crossDomain=true; //支持跨域
axios.defaults.withCredentials=true;//让ajax携带cookie
axios.interceptors.request.use(
  config =>{
    config.headers={
      'Content-type':"application/x-www-form-urlencoded"
    };
    return config
  },
  error => {
    return Promise.reject(error);
  }
);



Vue.prototype.$http = axios;
Vue.prototype.$url = Config;



// import mui from '../static/mui/js/mui.min.js'
import '../static/mui/css/app.css'
import '../static/mui/css/mui.css'
import '../static/mui/css/mui.picker.css'
import '../static/mui/css/mui.poppicker.css'

Vue.config.productionTip = false;
// Vue.prototype.$mui=mui;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
