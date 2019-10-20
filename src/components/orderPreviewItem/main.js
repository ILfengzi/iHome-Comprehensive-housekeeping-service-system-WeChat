/*
 * @Description: 订单预览项
 * @Author: 
 * @Date: 2019-10-19 21:11:36
 * @LastEditTime: 2019-10-19 21:12:16
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
