/*
 * @Description: 请求接口
 * @Author: Lin Changkun
 * @Date: 2019-10-03 00:07:05
 * @LastEditTime: 2019-10-31 09:09:23
 * @LastEditors: Lin Changkun
 */
// const domain = "http://10.86.2.14:80/json/"; //局域网通信
const domain = "http://www.ilfengzi.club/json/";    //服务器通信


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
  submitOrder: domain + 'order/addOrder',  //提交订单
  getOrderlistByid: domain + 'order/orderlistByid',//获取订单列表
  updateOrderState: domain + 'order/updateOrderState', //更新订单状态
  cancelOrder: domain + 'order/cancelOrder',//删除订单
  getOrderlistBytypename: domain + 'order/orderBytypename', //获取模糊查询订单
  deleteUserAddress: domain + 'user/deleteUserAddress',  //删除用户地址接口
  updateUserAddress: domain + 'user/updateUserAddress',  //编辑用户地址接口
  getTool: domain + 'tool/gettool',//员工领取工具
  returnTool: domain + 'tool/returntool',//员工归还工具
  damTool: domain + 'tool/damtool',//损坏工具
  seeTool: domain + 'tool/seetool',//员工查看工具
  sendPhoneNumber: domain + 'updateOrderState',  //向后端发送手机号
  getOrderCountAndMoney: domain + 'order/staffnews', //获取员工订单数和提成
  sendCode: domain + 'Code', //向后端发送code
};

module.exports = interfaces;
