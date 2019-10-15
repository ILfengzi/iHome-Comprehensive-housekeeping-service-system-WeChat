/*
 * @Description: “我的”页面组件
 * @Author: Celine
 * @Date: 2019-10-15 09:32:24
 * @LastEditTime: 2019-10-15 09:32:49
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
