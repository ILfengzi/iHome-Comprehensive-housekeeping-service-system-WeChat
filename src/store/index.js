/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-02 17:20:18
<<<<<<< HEAD
 * @LastEditTime: 2019-10-23 09:15:49
 * @LastEditors: Lin Changkun
=======
 * @LastEditTime: 2019-10-22 11:21:57
 * @LastEditors: Wanlin Chen
>>>>>>> 60ba5c6fccefb64d1c1be2d1033d2d3157a8b73b
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
  fakeId:"",  //后端返回的非openid的用户唯一凭证
  position: "",
  inputVal: "",
  searchResults: null, //搜索结果
  serviceDetail: null,  //服务详情
<<<<<<< HEAD
  orderForm: null, //下单详情
  userAddress: null //用户默认地址、选取的下单地址
=======
  orderForm: null, //下单
  userAddress: null, //用户默认地址、选取的下单地址
  orderDetail:null //用户订单详情
>>>>>>> 60ba5c6fccefb64d1c1be2d1033d2d3157a8b73b
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
