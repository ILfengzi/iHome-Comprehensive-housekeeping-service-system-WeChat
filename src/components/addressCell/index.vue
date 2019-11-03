<!--
 * @Description: 地址组件
 * @Author: Celine
 * @Date: 2019-10-18 08:44:31
 * @LastEditTime: 2019-11-03 22:54:47
 * @LastEditors: Lin Changkun
 -->
 
<template>
  <div class="address_info">
    <div class="detail">
      <div class="user">
        <span>顾客名：</span>
        <span class="user">{{userAddress.username}} {{userAddress.phone}}</span>
      </div>
      <div class="address" @click="selectAndBack">
        <div class="title">地&nbsp;&nbsp;&nbsp;&nbsp;址：</div>
        <div class="addr">{{userAddress.province}}{{userAddress.city}}{{userAddress.detail}}</div>
      </div>
    </div>
    <div class="icon">
      <img class="mod" src="/static/images/icon/xiugai.png" @click="isEdit" />
      <img @click="showModal" class="cal" src="/static/images/icon/shanchu.png" />
      <mp-modal ref="mpModal" title="提示" content="确定删除该地址？" :showCancel="true" @confirm="confirm"></mp-modal>
    </div>
  </div>
</template>

<script>
import mpToast from "mpvue-weui/src/toast";
import mpButton from "mpvue-weui/src/button";
import mpModal from "mpvue-weui/src/modal";
export default {
  props: {
    userAddress: Object,
    index: Number
  },
  components: {
    mpToast,
    mpModal,
    mpButton
  },
  // mounted(){
  //   console.log(this.userAddress);
  // },
  methods: {

    // 确认删除地址
    confirm(e) {
      console.log(this.userAddress);
      // showToast();
      this.$emit("isDelete", this.userAddress.id, this.index);
    },

    showModal() {
      this.$refs.mpModal.show();
    },

    // 编辑地址
    isEdit() {
      //将当前地址当作旧地址存到vuex
      this.$store.dispatch("setOldUserAddress", this.userAddress);
      this.$emit("isEdit", this.userAddress);
    },

    // 选取地址，并返回
    selectAndBack() {
      // 将vuex中的默认地址更新为选取的地址
      this.$store.dispatch("setUserAddress", this.userAddress);
      console.log("默认地址更新为选取的地址: ");
      console.log(this.$store.state.userAddress);
      // 返回上一级：delta(默认为1) 页面
      wx.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style>
.address_info {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 20rpx 20rpx 20rpx 24rpx;
  margin-bottom: 10px;
  font-size: 16px;
}
.icon {
  flex: 1;
  position: relative;
}
.detail {
  flex: 4;
  display: inline-block;
}
.address {
  flex: 1;
}
.addr {
  margin-left: 126rpx;
  margin-top: -24px;
  width: 74%;
}
.icon img {
  width: 46rpx;
  height: 46rpx;
}
.mod {
  position: absolute;
  bottom: 5px;
  right: 33px;
}
.cal {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
</style>