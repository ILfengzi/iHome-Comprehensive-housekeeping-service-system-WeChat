/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-04 09:02:00
 * @LastEditTime: 2019-10-14 10:34:08
 * @LastEditors: Wanlin Chen
 */
import Vue from 'vue'
import App from './App'

// import WeUI from '../static/weui/WeUI.css'

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