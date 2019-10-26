<!--
 * @Description: "我的"订单列表的组件
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-26 09:31:31
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="page">
    <div class="weui-form-preview" @click="switchToDetail">
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
      <span :class="{'hide':allOrderList.state!==0,'tip':true}">已提交</span>
      <span :class="{'hide':allOrderList.state!==1,'tip':true}">已取消</span>
      <span :class="{'hide':allOrderList.state!==2,'tip':true}">待服务</span>
      <span :class="{'hide':allOrderList.state!==3,'tip':true}">服务中</span>
      <span :class="{'hide':allOrderList.state!==4,'tip':true}">已完成</span>
      <span :class="{'hide':allOrderList.state!==5,'tip':true}">无效</span>
    </div>
  </div>
</template>

<script>
import mpModal from "mpvue-weui/src/modal";
export default {
  data() {
    return {
    };
  },
  components: {
    mpModal
  },
  props: {
    allOrderList: Object
  },
  computed: {},
  methods: {
    switchToDetail() {
      this.$store.dispatch("setOrderDetail", this.allOrderList);
      // console.log("sss");
      // console.log(this.$store.state.orderDetail);
      wx.navigateTo({
        url: "/pages/orderdetail/main",
        success: function(res) {
          // success
          console.log(res);
        }
      });
    }
  }
};
</script>

<style>
.page {
  /* margin-bottom: 10px; */
  background-color: white;
  margin-bottom: 10rpx;
}
.weui-form-preview{
  padding-bottom: 16rpx;
}
.weui-form-preview__value {
  color: black;
  font-size: 17px;
}
/* .btns{
  padding:0;
} */
.btn {
  width: 25%;
  font-size: 15px;
  margin-bottom: 0;
  margin-top: 10rpx;
}
.hide {
  display: none;
}
.tip{
  color: slategrey;
  margin-left: 310px;
  font-size: 17px;
  border:1px solid  slategrey;
}
</style>