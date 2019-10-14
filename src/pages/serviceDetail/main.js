/*
 * @Author: Wanlin Chen 
 * @Date: 2019-10-10 08:12:54 
 * @Last Modified by: Wanlin Chen
 * @Last Modified time: 2019-10-13 14:54:27
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