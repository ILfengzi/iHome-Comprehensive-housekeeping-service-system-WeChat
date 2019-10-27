<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-09-30 17:36:59
 * @LastEditTime: 2019-10-27 15:59:22
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

    <!-- 获取手机号模态框 -->
    <div class="modal-mask" catchtouchmove="preventTouchMove" v-if="showModal"></div>
    <div class="modal-dialog" v-if="showModal">
      <div class="modal-title">请输入您的手机号码：</div>
      <div class="modal-content">
        <div class="modal-input">
          <input
            placeholder-class="input-holder"
            type="number"
            maxlength="11"
            class="input"
            v-model="phoneNumber"
            placeholder="请输入数量"
          />
        </div>
      </div>
      <div class="modal-footer">
        <div class="btn-cancel" @tap="onCancel" data-status="cancel">拒绝</div>
        <div class="btn-confirm" @click="onConfirm" data-status="confirm">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      js_code: '',
      showModal: false,
      phoneNumber: ''
    };
  },

  onShow() {
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
          // 成功，则将后端返回的position（1为员工，4为普通用户）和非openid的用户id存储到vuex中
          this.$store.dispatch("setPosition", res.map.existence);
          this.$store.dispatch("setFakeId", res.map.userid);
          console.log("存起来了，好开森～", this.$store.state.position);
          console.log(this.$store.state.fakeId);

          if (res.map.havephone === 'false') {
            // 弹手机号输入框
            this.showDialogBtn();
          }
          //根据角色不同，优先跳到到页面不同
          if (res.map.existence == 4) {
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
    },
    /**
     * 弹窗
     */
    showDialogBtn() {
      this.showModal = true;
    },
    /**
     * 弹出框蒙层截断touchmove事件
     */
    preventTouchMove() {},
    /**
     * 对话框取消按钮点击事件
     */
    onCancel() {
      this.hideModal();
    },
    /**
     * 对话框确认按钮点击事件
     */
    onConfirm() {
      //输入完成
      console.log("输入完成");
      //校验手机号码
      this.isPoneAvailable(this.phoneNumber);

      //向后端发送数据
      this.$https
        .request({
          url: this.$interfaces.sendPhoneNumber,
          data: {
            fakeId: this.$store.state.fakeId, // 用户id
            phoneNumber: this.phoneNumber // 手机号
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },

    isPoneAvailable(phone) {
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(phone)) {
        wx.showToast({
          title: "请输入正确的手机号码",
          icon: "none",
          duration: 2000
        });
      } else {
        this.showModal = false;
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
.authorization button {
  position: absolute;
  top: 60%;
  left: 19%;
  width: 62%;
  background-color: #009eef;
  color: white;
}
</style>
