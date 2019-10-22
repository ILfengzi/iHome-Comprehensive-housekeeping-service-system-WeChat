<!--
 * @Description: 订单列表的组件
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-22 14:52:09
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="page" @click="switchToDetail">
    <div class="weui-form-preview">
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">服务</div>
          <div class="weui-form-preview__value">{{allOrderList.detailtype.typename}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">下单时间</div>
          <div class="weui-form-preview__value">{{allOrderList.orderTime}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    allOrderList:Object
  },
  methods:{
    switchToDetail(){
      this.$store.dispatch('setOrderDetail',this.allOrderList);
      console.log("sss"+this.$store.state.orderDetail);
      wx.navigateTo({
        url: '/pages/orderdetail/main',
        success: function(res){
          // success
          console.log(res);
        },
      })
    }
  }
};
</script>

<style>
.page {
  margin-top: 10px;
}
.weui-form-preview__value{
  color: black;
}
</style>