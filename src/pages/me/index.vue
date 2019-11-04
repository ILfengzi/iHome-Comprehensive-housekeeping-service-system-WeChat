<!--
 * @Description: "我的"页面
 * @Author: Celine
 * @Date: 2019-10-09 11:02:29
 * @LastEditTime: 2019-11-04 08:43:21
 * @LastEditors: Lin Changkun
 -->
<template>
  <div>
    <div class="user_info">
      <!-- 用户信息 -->
      <img v-if="haveLogin" class="userAvatarUrl" src="/static/images/xiaolian.png" alt />
      <open-data v-if="!haveLogin" class="userAvatarUrl" type="userAvatarUrl"></open-data>
      <div class="user_detail">
        <h4 v-if="!haveLogin">
          <open-data type="userNickName"></open-data>
          <!-- {{nickName}} -->
        </h4>
        <button
          v-if="haveLogin"
          open-type="getUserInfo"
          lang="zh_CN"
          @getuserinfo="onGotUserInfo"
        >点击微信登录</button>
        <span v-if="!haveLogin">{{country}} {{province}} {{city}}</span>
      </div>
    </div>

    <!-- 员工工作信息 -->
    <div class="work_info" v-if="position === 1">
      <div class="work_detail">
        <h4>总订单</h4>
        <span>{{count}}</span>
      </div>
      <div class="work_detail">
        <h4>本月订单</h4>
        <span>{{monthcount}}</span>
      </div>
      <div class="work_detail">
        <h4>本月提成</h4>
        <span>{{sum}}</span>
      </div>
    </div>

    <div class="order_info">
      <mineCell @click="swithToallOrder" icon="/static/images/icon/mine/myOrder.png" title="我的订单"></mineCell>
      <!-- 普通用户 -->
      <mineCell
        v-if="position === 4"
        @click="swithToaddress"
        icon="/static/images/icon/mine/address.png"
        title="我的地址"
      ></mineCell>
      <mineCell @click="swithToEvaluate" icon="/static/images/icon/mine/Eval.png" title="我的评价"></mineCell>
      <!-- 员工 -->
      <mineCell
        v-if="position === 1"
        @click="swithToTool"
        icon="/static/images/icon/mine/tool.png"
        title="我的工具"
      ></mineCell>
    </div>
    <div class="order_info">
      <mineCell @click="swithToAboutUs" icon="/static/images/icon/mine/user.png" title="关于我们"></mineCell>
    </div>
    <!-- 普通用户 -->
    <div v-if="position === 4" class="contact">
      <img src="/static/images/dianhua.png" />
      <span @click="handleContact">联系客服</span>
    </div>

    <!-- 获取手机号模态框 -->
    <div class="modal-mask" catchtouchmove="preventTouchMove" v-if="showModel"></div>
    <div class="modal-dialog" v-if="showModel">
      <div class="modal-title">申请获取您的手机号码：</div>
      <div class="modal-content">
        <div class="modal-input">
          <input
            placeholder-class="input-holder"
            type="number"
            maxlength="11"
            class="input"
            v-model="phoneNumber"
            placeholder="请输入您的手机号码"
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
import mineCell from "../../components/mineCell/index";
export default {
  data() {
    return {
      nickName: "获取中...",
      country: " ",
      province: " ",
      city: " ",
      position: 4, //1为员工，4为普通用户
      count: 0,
      sum: 0,
      monthcount: 0,
      haveLogin: true,
      showModel: undefined, //是否展示模态框
      phoneNumber: "" //输入的手机号码
    };
  },
  onShow() {
    /*********测试注释 */
    // this.country = this.$store.state.user.country;
    // this.province = this.$store.state.user.province;
    // this.city = this.$store.state.user.city;
    this.position = this.$store.state.position;
    console.log("测试 fakeId：", this.$store.state.fakeId);
    //如果是员工，则请求数据
    if (this.position === 1) {
      this.$https
        .request({
          url: this.$interfaces.getOrderCountAndMoney,
          data: {
            staffid: this.$store.state.fakeId //正式用
            // staffid: 1, //测试用
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log(res);
          if (res.map.count !== null) {
            this.count = res.map.count;
          }
          if (res.map.sum !== null) {
            this.sum = res.map.sum;
          }
          if (res.map.monthcount !== null) {
            this.monthcount = res.map.monthcount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    onGotUserInfo(e) {
      //判断授权是否成功
      // console.log(e);
      if (e.mp.detail.userInfo) {
        console.log(e.mp.detail.userInfo);
        //将用户信息存储到vuex
        // this.$store.dispatch("setIsAuthenticated", true);
        // this.$store.dispatch("setUser", e.mp.detail.userInfo);

        this.country = e.mp.detail.userInfo.country;
        this.province = e.mp.detail.userInfo.province;
        this.city = e.mp.detail.userInfo.city;
        // this.position = e.mp.detail.userInfo.position;
        this.haveLogin = false;

        let havePhone = this.$store.state.havePhone;
        if (havePhone == "false") {
          this.showDialogBtn();
        }
      }
    },

    /**
     * 以下是模态框处理事件
     */
    //弹窗
    showDialogBtn() {
      this.showModel = true;
      console.log("我进来了哦！！！！");
      console.log(this.showModel);
    },
    //弹出框蒙层截断touchmove事件
    preventTouchMove() {},

    // 对话框取消按钮点击事件
    onCancel() {
      this.showModel = false;
    },

    // 对话框确认按钮点击事件
    onConfirm() {
      //输入完成
      console.log("输入完成");
      //校验手机号码
      this.isPoneAvailable(this.phoneNumber);
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
        //向后端发送数据
        this.$https
          .request({
            url: this.$interfaces.sendPhoneNumber,
            data: {
              userid: this.$store.state.fakeId, // 用户id
              phone: this.phoneNumber // 手机号
            },
            header: {
              "content-type": "application/json" // 默认值
            },
            method: "POST"
          })
          .then(res => {
            console.log(res);
            this.onCancel();
          })
          .catch(err => {
            console.log(err);
          });
      }
    },

    handleContact() {
      wx.makePhoneCall({
        phoneNumber: "13202019516" //仅为示例，并非真实的电话号码
      });
    },
    swithToAboutUs() {
      wx.navigateTo({
        url: "../aboutUs/main"
      });
    },
    swithToallOrder() {
      console.log(123);
      wx.navigateTo({
        url: "../allorder/main"
      });
    },
    swithToEvaluate() {
      wx.navigateTo({
        url: "../evaluate/main"
      });
    },
    swithToTool() {
      wx.navigateTo({
        url: "../myTool/main"
      });
    },
    swithToaddress() {
      wx.navigateTo({
        url: "../myAddress/main"
      });
    }
  },
  components: {
    mineCell
  }
};
</script>

<style>
.user_info {
  background-color: #fff;
  padding: 8px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
  display: flex;
  flex-direction: row;
}
.user_info .userAvatarUrl {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  display: flex;
  overflow: hidden;
  text-align: center;
}
.user_detail h4 {
  margin: 10px 0;
  font-weight: bold;
}
.user_detail span {
  color: #aaa;
  font-size: 14px;
}
.work_info {
  padding: 10px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
}
.work_info .work_detail {
  text-align: center;
  flex: 1;
}
.work_info span {
  color: #aaa;
  font-size: 14px;
}
.order_info {
  margin-top: 16px;
}

.contact {
  background-color: rgb(233, 227, 227);
  position: absolute;
  top: 72%;
  left: 5%;
  height: 90rpx;
  width: 90%;
  font-size: 35rpx;
  /* margin: 10px; */
  text-decoration: none;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 7px;
}
.contact img {
  margin-left: 190rpx;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.contact span {
  text-align: center;
  margin-left: 60rpx;
  line-height: 90rpx;
}
.user_detail button {
  color: rgb(210, 188, 235);
  background-color: #fff;
  margin-top: 16px;
  width: 237rpx;
  height: 65rpx;
  font-size: 27rpx;
}

/* 模态框格式 */
.modal-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}
.modal-dialog {
  width: 540rpx;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 9999;
  background: #f9f9f9;
  margin: -180rpx 105rpx;
  border-radius: 36rpx;
}
.modal-title {
  padding-top: 50rpx;
  font-size: 36rpx;
  color: #030303;
  text-align: center;
}
.modal-content {
  padding: 50rpx 32rpx;
}
.modal-input {
  display: flex;
  background: #fff;
  border: 2rpx solid #ddd;
  border-radius: 4rpx;
  font-size: 28rpx;
}
.input {
  width: 100%;
  height: 82rpx;
  font-size: 28rpx;
  line-height: 28rpx;
  padding: 0 20rpx;
  box-sizing: border-box;
  color: #333;
}
input-holder {
  color: #666;
  font-size: 28rpx;
}
.modal-footer {
  display: flex;
  flex-direction: row;
  height: 86rpx;
  border-top: 1px solid #dedede;
  font-size: 34rpx;
  line-height: 86rpx;
}
.btn-cancel {
  width: 50%;
  color: #666;
  text-align: center;
  border-right: 1px solid #dedede;
}
.btn-confirm {
  width: 50%;
  color: #0ebb1d;
  text-align: center;
}
</style>