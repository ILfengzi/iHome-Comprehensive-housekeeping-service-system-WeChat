/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-02 17:20:18
 * @LastEditTime: 2019-10-05 00:10:01
 * @LastEditors: Lin Changkun
 */
import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

const state = {
    // 判断用户是否授权，如果授权则改为 true，然后将用户信息赋给user
  isAuthenticated: false,
  user: null,
  openId: '',
  position:''
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});