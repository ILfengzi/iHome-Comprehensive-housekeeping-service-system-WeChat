/*
 * @Description: 封装专门用于请求的文件
 * @Author: Lin Changkun
 * @Date: 2019-10-04 16:49:00
 * @LastEditTime: 2019-10-25 19:02:43
 * @LastEditors: Lin Changkun
 */
const https = {
  request(options = {}) {
    const { url, data, header, method } = options;

    //加载动画
    wx.showLoading({
      title: "加载中..."
    });

    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        header,
        method,
        success(res) {
          // wx.hideLoading();
          //判断网络
          if (res.statusCode == 404) {
            reject();
            return false;
          } else if (res.statusCode != 200) {
            wx.showToast({
              title: "网络出错，稍后再试！",
              icon: "none"
            });
            return false;
          }

          //成功则返回数据
          resolve(res.data);
          // console.log(res.data);
        },
        fail(err) {
          // wx.hideLoading();
          console.log(err);
        },
        complete() {//成功与否都会执行
          wx.hideLoading();
        }
      });
    });
  }
};

export default https;
