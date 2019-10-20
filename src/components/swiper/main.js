/*
 * @Description: 首页轮播
 * @Author: 
 * @Date: 2019-10-19 21:07:59
 * @LastEditTime: 2019-10-19 21:08:28
 * @LastEditors: Lin Changkun
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
