<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-18 08:44:31
 * @LastEditTime: 2019-10-18 15:21:05
 * @LastEditors: Wanlin Chen
 -->
<template>
  <div class="address_info">
      <div class="user">
        <span>收货人：</span>
        <span class="user">{{username}} {{phone}}</span>
      </div>
      <div class="address">
        <div class="title">地&nbsp;&nbsp;&nbsp;&nbsp;址：</div>
        <div class="addr">{{province}}{{city}}{{detail}}</div>
      </div>      
    <span class="icon">
      <img class="mod" src="/static/images/icon/修改.png" />
      <img @click="showModal" class="cal" src="/static/images/icon/删除.png" />
      <mp-toast value="true" type="success" v-model="showToast" content="删除成功" duration="20"></mp-toast>
      <mp-modal ref="mpModal" title="提示" content="确定删除该地址？" :showCancel="true" @confirm="confirm"></mp-modal>
    </span>
  </div>
</template>

<script>
import mpToast from 'mpvue-weui/src/toast';
import mpButton from 'mpvue-weui/src/button';
import mpModal from 'mpvue-weui/src/modal';
export default {
  props: {
    province: String,
    city: String,
    phone: String,
    detail: String,
    username: String
  },
  components: {
    mpToast,
    mpModal,
    mpButton
  },
  methods:{
    confirm(e) {
      console.log(123);
      showToast();
    },
    showModal() {
      this.$refs.mpModal.show();
    },
  }
};
</script>

<style>
.address_info {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20rpx 0 20rpx 24rpx;
  margin-bottom: 10px;
  font-size: 16px;
  position: relative;
}
.user {
  flex: 1;
}
.address{
  flex: 1;
  position: relative;
}
.address div{
 display:inline-block;
 justify-content: right;
}
.addr{
margin-left: 126rpx;
width: 62%;
  /* position:absolute;
  top: 36px; */
} 
.title{
  position: absolute;
}
.icon img{
width: 46rpx;
height: 46rpx;
float: right;
margin-right: 20rpx;
margin-top: 4rpx;

}

</style>