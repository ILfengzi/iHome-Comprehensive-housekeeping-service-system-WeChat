/*
 * @Description: 
 * @Author: Lin Changkun
 * @Date: 2019-10-02 17:20:18
 * @LastEditTime: 2019-11-01 17:46:10
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
  user: null, //用户公开信息
  fakeId:"",  //后端返回的非openid的用户唯一凭证
  position: "",
  inputVal: "",
  searchResults: null, //搜索结果
  serviceDetail: null,  //服务详情
  orderForm: null, //下单详情
  userAddress: null, //用户默认地址、选取的下单地址
  orderDetail:null, //用户订单详情
  oldUserAddress: null, //用户旧地址，准备编辑的地址
  isNewAddress: false, //是否为新建地址，否为编辑地址
  havePhone: "",  //是否已存手机号
  showModel: "",  //是否弹出输入手机号的模态框
  orderId: "",  //订单id
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
