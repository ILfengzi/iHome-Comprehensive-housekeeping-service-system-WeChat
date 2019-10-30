<!--
 * @Description: 登录页面
 * @Author: Lin Changkun
 * @Date: 2019-09-30 17:36:59
 * @LastEditTime: 2019-10-30 20:55:51
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
    wx.login({
      success: res => {
        this.js_code = res.code;
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
        // this.getRole(); //获取角色

        this.$https
          .request({
            url: this.$interfaces.getOpenid,
            data: {
              // userInfo: this.$store.state.user, //用户信息
              // getcode: this.js_code //wx.login登录获取的code值
              getcode: this.js_code,
              userInfo: e.mp.detail.userInfo
            },
            header: {
              "content-type": "application/json" // 默认值
            },
            method: "POST"
          })
          .then(res => {
            console.log("成功向后端发送用户公开信息");
            console.log(res);
            // 路由跳转
            wx.switchTab({
              url: "../home/main"
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }

    //正式请使用，先把getOpenid（）干掉
    /*getRole() {
      console.log("#######################");
      console.log(this.js_code);
      console.log(this.$store.state.user);
      this.$https
        .request({
          url: this.$interfaces.getOpenid,
          data: {
            // userInfo: this.$store.state.user, //用户信息
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
          // 成功，则将后端返回的position（1为员工，4为普通用户）和非openid的用户id存储到vuex中
          this.$store.dispatch("setPosition", res.map.existence);
          this.$store.dispatch("setFakeId", res.map.userid);
          this.$store.dispatch("setShowModel", res.map.havephone);
          console.log("存起来了，好开森～", this.$store.state.position);
          console.log(this.$store.state.fakeId);
          // console.log("showModal",this.$store.state.showModel);

          // if (res.map.havephone === 'false') {
          //   // 弹手机号输入框
          //   this.showDialogBtn();
          // }

          //根据角色不同，优先跳到到页面不同
          if (this.$store.state.position === 4) {
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
        success() {
          console.log("成功跳转到home");
        },
        fail() {}
      });
    },

    goToOrder() {
      wx.switchTab({
        url: "../order/main",
        success() {},
        fail() {}
      });
    }*/
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
.authorization button {
  position: absolute;
  top: 60%;
  left: 19%;
  width: 62%;
  background-color: #009eef;
  color: white;
}
</style>
