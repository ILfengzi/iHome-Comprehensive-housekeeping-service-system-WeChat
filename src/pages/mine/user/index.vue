<!--
 * @Description: “我的” -- 用户
 * @Author: Wanlin Chen
 * @Date: 2019-10-09 11:02:29
 * @LastEditTime: 2019-10-21 11:55:50
 * @LastEditors: Lin Changkun
 -->

<template>
  <div class="mine">
    <div class="user_info">
      <!-- 用户信息 -->
      <open-data class="userAvatarUrl" type="userAvatarUrl"></open-data>
      <div class="user_detail">
        <h4>
          <!-- <open-data type="userNickName"></open-data> -->
          {{nickName}}
        </h4>
        <span>{{country}} {{province}} {{city}}</span>
      </div>
    </div>
    <div class="order_info">
      <mineCell
        @click="swithToallOrder"
        icon="/static/images/icon/mine/我的订单.png"
        title="我的订单"
        :text="3"
      ></mineCell>
      <mineCell @click="swithToaddress" icon="/static/images/icon/mine/地址.png" title="我的地址"></mineCell>
      <mineCell @click="swithToEvaluate" icon="/static/images/icon/mine/评价.png" title="我的评价"></mineCell>
    </div>
    <!-- <div class="order_info">
        <mineCell icon="/static/images/icon/mine/联系客服.png" title="联系客服" ></mineCell>
        
    </div>-->

    <div class="order_info">
      <mineCell icon="/static/images/icon/mine/用户协议.png" title="关于我们"></mineCell>
    </div>
    <div class="contact">
      <img src="/static/images/dianhua.png" />
      <span @click="handleContact">联系客服</span>
    </div>
  </div>
</template>

<script>
import mineCell from "../../../components/mineCell/index";
export default {
  data() {
    return {
      nickName: "获取中...",
      country: "中国",
      province: "广东",
      city: "肇庆"
    };
  },
  mounted() {
    this.nickName = this.$store.state.user.nickName;
    this.country = this.$store.state.user.country;
    this.province = this.$store.state.user.province;
    this.city = this.$store.state.user.city;
  },
  methods: {
    handleContact() {
      wx.makePhoneCall({
        phoneNumber: "13202610508" //仅为示例，并非真实的电话号码
      });
    },
    swithToallOrder() {
      console.log(123);
      wx.navigateTo({
        url: "../../allorder/main"
      });
    },
    swithToEvaluate() {
      wx.navigateTo({
        url: "../../evaluate/main"
      });
    },
    swithToaddress() {
      wx.navigateTo({
        url: "../../address/main"
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
  top: 70%;
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
</style>