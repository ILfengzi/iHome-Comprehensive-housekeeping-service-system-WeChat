/*
 * @Author: Wanlin Chen 
 * @Date: 2019-10-10 08:12:54 
 * @Last Modified by: Wanlin Chen
 * @Last Modified time: 2019-10-11 09:07:11
 */
import Vue from 'vue'
import App from './index'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()