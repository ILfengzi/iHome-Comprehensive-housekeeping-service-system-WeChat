/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-04 09:02:00
 * @LastEditTime: 2019-10-08 21:44:55
 * @LastEditors: Lin Changkun
 */
import Vue from 'vue'
import App from './App'
import 'mpvue-weui/src/style/weui.css';

import store from './store/index'
import interfaces from './utils/interfaces'
import https from './utils/https'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$interfaces = interfaces
Vue.prototype.$https = https

App.mpType = 'app'

const app = new Vue(App)
app.$mount()