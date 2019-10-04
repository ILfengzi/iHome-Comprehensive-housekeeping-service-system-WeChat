/*
 * @Description: 
 * @Author: 
 * @Date: 2019-10-03 00:07:05
 * @LastEditTime: 2019-10-04 23:41:41
 * @LastEditors: Lin Changkun
 */
const domain = "https://api.weixin.qq.com/sns/jscode2session";
const login_domain = "http://10.86.2.11:8080/";    //局域网通信

const interfaces = {
  // 获取openID的接口
  getOpenid: domain,
  getRole: login_domain
};

module.exports = interfaces;
