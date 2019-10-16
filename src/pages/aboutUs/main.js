/*
 * @Description: "关于我们"的界面
 * @Author: Celine
 * @Date: 2019-10-15 17:27:07
 * @LastEditTime: 2019-10-15 17:27:34
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