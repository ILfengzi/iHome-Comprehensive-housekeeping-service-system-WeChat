/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-03 00:07:05
 * @LastEditTime: 2019-10-20 10:12:23
 * @LastEditors: Lin Changkun
 */
// const domain = "http://10.86.2.14:8080/json/";    //局域网通信
const domain = "http://ilfengzi.club/json/";    //服务器通信

const interfaces = {
  getOpenid: domain + 'getCode', // 获取openID的接口
  getRole: domain + 'role', //获取角色接口
  getHome: domain + 'home',  //获取首页接口
  getOrder: domain + 'order', //获取订单接口
  getMine: domain + 'mine',  //获取我的接口
  getSearchResults: domain + 'order/selectBytypename',  //获取搜索结果接口
  getServiceDetails: domain + 'order/typelist',  //获取服务详情接口
  getServiceClass: domain + 'order/selectByserviceid',  //获取分类服务接口
  getTime: domain + 'timer/getMessage',  //获取服务时间
  getUser: domain + 'user/selectUsers', //获取用户信息
  sendOrder: domain + ''  //发送订单接口
};

module.exports = interfaces;
