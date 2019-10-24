<!--
 * @Description: 订单列表的组件
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-24 20:55:24
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
      <!-- <mp-modal ref="mpModal" :title="title" :content="content" :showCancel="true" @confirm="confirm" @cancel="cancel"></!-->
      <button @click="confirm" :class="{'hide':allOrderList.state!==3,'btn':true}">确认完成</button>
    </div>
  </div>
</template>

<script>
import mpModal from "mpvue-weui/src/modal";
export default {
  data() {
    return {
      content: "请确认取消订单",
      title: "提示",
      typename: ""
    };
  },
  components: {
    mpModal
  },
  props: {
    allOrderList: Object,
    index: Number
  },
  computed: {},
  methods: {
    confirm() {
      this.$https
        .request({
          url: this.$interfaces.updateOrderState,
          data: {
            orderid: this.allOrderList.id
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          // 成功，刷新页面
          console.log(this.index);
          this.$https
            .request({
              url: this.$interfaces.getOrderlistByid,
              data: {
                userid: 1, //输入值
                temp: 2, //用户类型 1为员工，2为普通用户
                state: this.allOrderList.state
              },
              header: {
                "content-type": "application/json" // 默认值
              },
              method: "POST"
            })
            .then(res => {
              console.log(res);
              // 成功，刷新页面
              this.allOrderList = res.iOrderList;
              if (this.allOrderList.length == 0) {
                this.isHide = false;
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    },

    cal() {
      this.$https
        .request({
          url: this.$interfaces.updateOrderState,
          data: {
            orderid: this.allOrderList.id
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          // 成功，刷新页面
          this.allOrderList = res.iOrderList;
          console.log(this.allOrderList);
          if (this.allOrderList.length == 0) {
            this.isHide = false;
            console.log(this.isHide);
          }
        })
        .catch(err => {
          console.log(err);
        });
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