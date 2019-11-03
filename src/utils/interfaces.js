/*
 * @Description: 请求接口
 * @Author: Lin Changkun
 * @Date: 2019-10-03 00:07:05
 * @LastEditTime: 2019-11-03 21:56:43
 * @LastEditors: Lin Changkun
 */
// const domain = "http://10.86.2.14:80/json/"; //局域网通信
const domain = "https://ilfengzi.club/";    //服务器通信

const interfaces = {
  getOpenid: domain + 'json/getCode', // 获取openID的接口
  getRole: domain + 'json/role', //获取角色接口
  getHome: domain + 'json/home',  //获取首页接口
  getOrder: domain + 'json/order', //获取订单接口
  getMine: domain + 'json/mine',  //获取我的接口
  getSearchResults: domain + 'json/order/selectBytypename',  //获取搜索结果接口
  getServiceDetails: domain + 'json/order/typelist',  //获取服务详情接口
  getServiceClass: domain + 'json/order/selectByserviceid',  //获取分类服务接口
  getTime: domain + 'json/timer/getMessage',  //获取服务时间
  getUserAddress: domain + 'json/user/selectUserAddress', //获取用户地址信息
  setUserAddress: domain + 'json/user/addUserAddress', //新建用户地址
  setEvaluate: domain + 'json/order/addEvaluate', //新建评价
  getEvaluate: domain + 'json/order/evlistByid', //获取评价
  getDefaultAddress: domain + 'json/user/selectUserDefaultAddress',  //获取用户默认地址接口
  submitOrder: domain + 'json/order/addOrder',  //提交订单
  getOrderlistByid: domain + 'json/order/orderlistByid',//获取订单列表
  updateOrderState: domain + 'json/order/updateOrderState', //更新订单状态
  cancelOrder: domain + 'json/order/cancelOrder',//删除订单
  getOrderlistBytypename: domain + 'json/order/orderBytypename', //获取模糊查询订单
  deleteUserAddress: domain + 'json/user/deleteUserAddress',  //删除用户地址接口
  updateUserAddress: domain + 'json/user/updateUserAddress',  //编辑用户地址接口
  getTool: domain + 'json/tool/gettool',//员工领取工具
  returnTool: domain + 'json/tool/returntool',//员工归还工具
  damTool: domain + 'json/tool/damtool',//损坏工具
  seeTool: domain + 'json/tool/seetool',//员工查看工具
  sendPhoneNumber: domain + 'json/updateOrderState',  //向后端发送手机号
  getOrderCountAndMoney: domain + 'json/order/staffnews', //获取员工订单数和提成
  sendCode: domain + 'json/Code', //向后端发送code
};

module.exports = interfaces;
