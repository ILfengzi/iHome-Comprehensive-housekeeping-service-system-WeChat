/*
 * @Description: 
 * @Author: Celine
 * @Date: 2019-10-24 20:40:16
 * @LastEditTime: 2019-10-24 20:40:24
 * @LastEditors: Wanlin Chen
 */
import Vue from 'vue'
import App from './index'
import animate from 'animate.css'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}
Vue.use(animate)
const app = new Vue(App)
app.$mount()