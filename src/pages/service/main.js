/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-11 10:43:22
 * @LastEditTime: 2019-10-11 10:43:22
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
