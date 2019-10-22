<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-17 10:16:43
 * @LastEditTime: 2019-10-22 00:16:05
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="addressPicker">
    <div class="weui-cell weui-cell_access" hover-class="weui-cell_active" @click="goMyAddress">
      <div class="weui-cell__hd">
        <img
          src="/static/images/dingwei.png"
          style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
        />
      </div>
      <div
        class="weui-cell__bd"
      >{{userAddress.username}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{userAddress.province}}-{{userAddress.city}}-{{userAddress.detail}}</div>
      <div class="weui-cell__ft weui-cell__ft_in-access">{{tips}}</div>
    </div>
  </div>
</template>

<script>
import mpPicker from "mpvue-weui/src/picker";

export default {
  components: {
    mpPicker
  },
  data() {
    return {
      // title: "服务地址",
      tips: "我的地址",
      userAddress: {},
    };
  },
  mounted() {
    // 向后端拿默认地址
    this.$https
      .request({
        url: this.$interfaces.getDefaultAddress,
        data: {
          // userId: this.$store.state.fakeId //⚠️正式用：用户id
          userId: 1
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        method: "POST"
      })
      .then(res => {
        console.log(res);
        // 将默认地址存到vuex
        this.$store.dispatch("setUserAddress", res.iUserDetail);
        console.log(this.$store.state.userAddress);
        //将页面显示的地址为默认地址，或者是点击本组件选取的地址
        this.userAddress = this.$store.state.userAddress;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    goMyAddress() {
      wx.navigateTo({
        url: "../../address/main"
      });
    }
  }
};
</script>

<style>
</style>