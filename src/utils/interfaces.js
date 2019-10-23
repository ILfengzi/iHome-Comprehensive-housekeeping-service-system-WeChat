/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-09 11:02:29
 * @LastEditTime: 2019-10-23 10:02:10
 * @LastEditors: Wanlin Chen
 */

const domain = "http://10.86.2.14:80/json/"; 
// const domain = "http://www.ilfengzi.club/json/";    //局域网通信


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
  getUserAddress: domain + 'user/selectUserAddress', //获取用户地址信息
  setUserAddress: domain + 'user/addUserAddress', //新建用户地址
  setEvaluate: domain + 'order/addEvaluate', //新建评价
  getEvaluate: domain + 'order/evlistByid', //获取评价
  getDefaultAddress: domain + 'user/selectUserDefaultAddress',  //获取用户默认地址接口
  getOrderlistByid: domain + 'order/orderlistByid',//获取订单列表
  getOrderlistBytypename: domain + 'order/orderBytypename',  //获取模糊查询订单
  updateOrderState: domain + 'order/updateOrderState' //更新订单状态
};

module.exports = interfaces;
