/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-04 09:02:00
 * @LastEditTime: 2019-10-09 11:07:38
 * @LastEditors: Lin Changkun
 */
import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
=======
// import WeUI from '../static/weui/WeUI.css'
>>>>>>> 825285f09a7bb290c4f0055576f818f0006e5de7
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