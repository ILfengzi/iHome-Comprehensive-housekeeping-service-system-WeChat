/*
 * @Description: 
 * @Author: Celine
 * @Date: 2019-10-05 00:25:38
 * @LastEditTime: 2019-10-24 15:04:01
 * @LastEditors: Wanlin Chen
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
