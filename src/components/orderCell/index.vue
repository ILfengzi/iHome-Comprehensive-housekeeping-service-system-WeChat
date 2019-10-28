<!--
 * @Description: 订单列表的组件
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-28 15:18:50
 * @LastEditors: Lin Changkun
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
    </div>
    <div class="btns">
      <button @click="cal" :class="{'hide':allOrderList.state!==2,'btn':true}">取消订单</button>
      <mp-modal
        ref="mpModal1"
        title="提示"
        content="确定取消该订单？"
        :showCancel="true"
        @confirm="confirm"
        @cancel="cancel"
      ></mp-modal>
      <button @click="com" :class="{'hide':allOrderList.state!==3,'btn':true}">确认完成</button>
      <mp-modal
        ref="mpModal2"
        title="提示"
        content="确定完成订单？"
        :showCancel="true"
        @confirm="complete"
        @cancel="cancel"
      ></mp-modal>
      <button @click="makeEval" :class="{'hide':allOrderList.state!==4,'btn':true}">订单评价</button>
    </div>
  </div>
</template>

<script>
import mpModal from "mpvue-weui/src/modal";
export default {
  components: {
    mpModal
  },
  props: {
    allOrderList: Object,
    index: Number,
    orderId: Number
  },
  computed: {},
  methods: {
    makeEval() {
      this.$store.dispatch("setOrderId", this.orderId);
      console.log('成功存起了orderId：', this.$store.state.orderId);
      wx.navigateTo({
        url: "../../pages/makeEval/main"
      });
    },

    confirm(e) {
      console.log(this.allOrderList);
      this.$emit("isDelete", this.allOrderList.id, this.index);
    },
    complete(e) {
      console.log(this.allOrderList);
      this.$emit("isComplete", this.allOrderList.id, this.index);
    },
    com() {
      this.$refs.mpModal2.show();
    },
    cal() {
      this.$refs.mpModal1.show();
    },
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
.weui-form-preview__value {
  color: black;
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
</style>