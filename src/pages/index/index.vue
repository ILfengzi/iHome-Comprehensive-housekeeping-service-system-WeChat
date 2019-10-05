<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-09-30 17:36:59
 * @LastEditTime: 2019-10-05 23:04:04
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="container">
    <div class="login">
      <img src="/static/images/logo.jpg" alt />
      <span class="name">i家-家政</span>
      <div class="authorization">
        <!-- 注意：因为mpvue是vue的语法，但又要用小程序给定但的事件，所以绑定一个事件结合的是vue的 @ 和小程序的 bind -->
        <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">微信登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // const _this = this;
    wx.checkSession({
      success() {
        //session_key 未过期，并且在本生命周期一直有效
        console.log("session_key 未过期");
      },
      fail: err => {
        //使用箭头函数可解决this的作用域问题，箭头函数的this就是外部的this
        // session_key 已经失效，需要重新执行登录流程
        console.log("session_key 已经过期");
        wx.login({
          success: res => {
            console.log(res);
            this.getOpenid(res.code); //⚠️前端测试
            // this.getRole(res.code); //⚠️正式请用，先把上面那个干掉
          }
        });
      }
    });
  },
  methods: {
    onGotUserInfo(e) {
      //判断授权是否成功
      // console.log(e);
      if (e.mp.detail.userInfo) {
        console.log(e.mp.detail.userInfo);
        //将用户信息存储到vuex
        this.$store.dispatch("setIsAuthenticated", true);
        this.$store.dispatch("setUser", e.mp.detail.userInfo);

        //获取code
        // this.getCode();
      }
    },
    // getCode() {
    //   //在mpvue中，提供了一个全局的小程序对象 wx
    //   wx.login({
    //     success: res => {
    //       console.log(res);
    //       this.getOpenid(res.code);
    //     }
    //   });
    // },

    //⚠️前端测试，secret 应该存在后端服务器中，应由后端发起 auth.getAccessToken 获取openid和session_key
    getOpenid(code) {
      //需要三个参数：AppID(小程序ID)、AppSecret(小程序密钥)、code
      const appid = "wx28d20808cea0c171";
      const secret = "834ac5963ea499f9ac8dd4ff2ae59e87"; //⚠️前端测试，secret 应该存在后端服务器中

      this.$https
        .request({
          url: this.$interfaces.getOpenid,
          // url: this.$https.getRole,

          // this.$interfaces.getOpenid +
          // "appid=" +
          // appid +
          // "&secret=" +
          // secret +
          // "&js_code=" +
          // code +
          // "&grant_type=authorization_code",
          data: {
            appid: appid, //开发者appid
            secret: secret, //开发者AppSecret(小程序密钥)
            grant_type: "authorization_code", //默认authorization_code
            js_code: code //wx.login登录获取的code值
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "GET"
        })
        .then(res => {
          console.log(res);
          // 成功，则将openid存储到vuex中
          this.$store.dispatch("setOpenId", res.openid);
        })
        .catch(err => {
          console.log(err);
        });
    },

    //⚠️正式请使用，先把getOpenid（）干掉
    getRole(js_code) {
      //需要三个参数：AppID(小程序ID)、AppSecret(小程序密钥)、code
      const appid = "wx28d20808cea0c171";

      this.$https
        .request({
          url: this.$https.getRole,

          // this.$interfaces.getOpenid +
          // "appid=" +
          // appid +
          // "&secret=" +
          // secret +
          // "&js_code=" +
          // code +
          // "&grant_type=authorization_code",
          data: {
            appid: appid, //开发者appid
            grant_type: "authorization_code", //默认authorization_code
            js_code: js_code //wx.login登录获取的code值
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log(res);
          // 成功，则将后端返回的openid和position存储到vuex中
          this.$store.dispatch("setOpenId", res.openid);
          this.$store.dispatch("setPosition", res.position);

          //根据职位（position）进行页面跳转
          this.isStaff(res.position);
        })
        .catch(err => {
          console.log(err);
        });
    },

    isStaff(position) {
      if (position === 1) {
        //如果是员工
        wx.redirectTo({
          url: "../mine/staff/main",
          success() {},
          fail() {}
        });
      } else {
        //普通用户
        wx.redirectTo({
          url: "../mine/user/main",
          success() {},
          fail() {}
        });
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login {
  width: 100%;
  height: 100%;
  position: relative;
}
.login img {
  display: inline-block;
  position: absolute;
  top: 30%;
  left: 37%;
  width: 25%;
  height: 15%;
}
.login span {
  display: inline-block;
  position: absolute;
  top: 46%;
  left: 34%;
  font-size: 60rpx;
  /* font-family: Lucida Console, Courier, monospace; */
}
/* .login .authorization {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
} */
.authorization button {
  position: absolute;
  top: 60%;
  left: 19%;
  width: 62%;
  background-color: #009eef;
  color: white;
}
</style>
