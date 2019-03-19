import Vue from 'vue'
import App from './App'
import router from './router'

// Import App Custom Styles
import AppStyles from './assets/css/app.css'
import dateRangeStyles from './assets/css/dateRange.css'

/* 引入axios */
import axios from 'axios'
/* 使用axios */
Vue.prototype.http = axios;

/* 引入jquery */
import 'jquery'
/* 引入日历控件dateRange.js */
require('./assets/js/dateRange.js')

/* 全局定义 */
import global_ from './components/GlobalDefined.vue'
/* 使用全局定义变量或方法 */
Vue.prototype.GlobalDefined = global_;

/* 自定义模板 */
/* header */
import userHeader from './components/user-header.vue'
Vue.component('user-header', userHeader);
/* left-menu */
import leftMenu from './components/left-menu.vue'
Vue.component('left-menu', leftMenu);

/* 自写分页器HY_pagination */
import HY_pagination from './components/HY_pagination.vue'
Vue.component('HY-pagination', HY_pagination);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
