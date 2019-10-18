<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-09-30 17:36:59
 * @LastEditTime: 2019-10-17 17:26:14
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
  data() {
    return {
      js_code: ""
    };
  },
  mounted() {
    // const _this = this;
    wx.checkSession({
      success: res => {
        //session_key 未过期，并且在本生命周期一直有效
        console.log("session_key 未过期");
      },
      fail: err => {
        //使用箭头函数可解决this的作用域问题，箭头函数的this就是外部的this
        // session_key 已经失效，需要重新执行登录流程
        console.log("session_key 已经过期");
        wx.login({
          success: res => {
            this.js_code = res.code;
            // console.log(res);
            // this.getRole(res.code); //正式请用，先把上面那个干掉
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
        // this.userInfo = e.mp.detail.userInfo;
        this.getRole(); //获取角色
      }
    },

    //正式请使用，先把getOpenid（）干掉
    getRole() {
      console.log("#######################");
      console.log(this.js_code);
      console.log(this.$store.state.user);
      this.$https
        .request({
          url: this.$interfaces.getOpenid,
          data: {
            userInfo: this.$store.state.user, //用户信息
            getcode: this.js_code //wx.login登录获取的code值
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log("ddasdasdasdasdadasdasdas");
          console.log(res);
          // 成功，则将后端返回的position（1为员工，4为普通员工）和非openid的用户id存储到vuex中
          this.$store.dispatch("setPosition", res.map.existence);
          this.$store.dispatch("setFakeId", res.map.userid);
          console.log('存起来了，好开森～',this.$store.state.position);
          console.log(this.$store.state.fakeId);
          // 根据角色不同，进行页面的跳转
          if (res == 4) {
            this.goToHome();
          } else {
            this.goToOrder();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    goToHome() {
      wx.switchTab({
        url: "../home/main",
        success() {},
        fail() {}
      });
    },

    goToOrder() {
      wx.switchTab({
        url: "../order/main",
        success() {},
        fail() {}
      });
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
