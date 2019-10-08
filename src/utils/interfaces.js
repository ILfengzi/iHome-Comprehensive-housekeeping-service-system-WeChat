/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-03 00:07:05
 * @LastEditTime: 2019-10-07 23:38:36
 * @LastEditors: Lin Changkun
 */
const domain1 = "https://api.weixin.qq.com/sns/jscode2session";
const domain = "http://10.86.2.11:8080/";    //局域网通信

const interfaces = {
  getOpenid: domain1, // 获取openID的接口
  getRole: domain + 'role', //获取角色接口
  getHome: domain + 'home',  //获取首页接口
  getOrder: domain + 'order', //获取订单接口
  getMine: domain + 'mine'  //获取我的接口
};

module.exports = interfaces;
