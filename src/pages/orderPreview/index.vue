<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-18 20:00:45
 * @LastEditTime: 2019-10-24 23:38:09
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="page">
    <div class="weui-form-preview">
      <div class="weui-form-preview__hd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">付款金额</div>
          <div class="weui-form-preview__value_in-hd">¥ {{price}}</div>
        </div>
      </div>
      <div class="weui-form-preview__bd">
        <div v-for="(item, index) in serviceItem" :key="index">
          <orderPreviewItem :title="item.title" :content="item.content"></orderPreviewItem>
        </div>
      </div>
      <div class="weui-form-preview__ft">
        <div
          class="weui-form-preview__btn weui-form-preview__btn_primary"
          hover-class="weui-form-preview__btn_active"
          @click="toPay"
        >确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
// import base64 from '../../../static/images/base64';
import orderPreviewItem from "../../components/orderPreviewItem/index";

export default {
  components: {
    orderPreviewItem
  },
  data() {
    return {
      // icon60: base64.icon60
      // orderForm: undefined,
      price: 0,
      serviceItem: [
        {
          key: "1",
          title: "服务",
          content: "日常清洁"
        },
        {
          key: "2",
          title: "计费规则",
          content: ""
        },
        {
          key: "3",
          title: "用户名",
          content: ""
        },
        {
          key: "4",
          title: "上门时间",
          content: ""
        },
        {
          key: "5",
          title: "地址",
          content: ""
        },
        {
          key: "6",
          title: "联系电话",
          content: ""
        },
        {
          key: "7",
          title: "备注",
          content: ""
        }
      ],
      order: {
        username: "阿里吧唧",
        address: "广东省-广州市-荔湾区-春田花花幼稚园xxx街道123号", //地址
        phone: "123456789",
        duration: "2小时", //服务时长
        time: "2019年10月21日(周三)-8:00 - 10:00", //服务时间
        price: 10, //价格
        remarks:
          "昌坤帅帅，昌坤最帅，昌坤帅帅，昌坤最帅，昌坤帅帅，昌坤最帅，昌坤帅帅，昌坤最帅，昌坤帅帅，昌坤最帅" //备注
      },
     //此order是根据接口需要最终发给后端的订单信息，与前一个页面的orderForm不同
      // order: {
      //   comm: "注释",
      //   date: "2019年10月24日 8:00|2019年10月24日 10:00",
      //   detailTypeId: 1,
      //   price: 0,
      //   userAddressId: 1,
      //   userId: 1
      // }
    };
  },
  mounted() {
    //将台
    // this.order.price = this.$store.state.orderForm.price;
    // this.order.date = this.$store.state.orderForm.date;
    // this.order.comm = this.$store.state.orderForm.remarks;
    // this.order.detailTypeId = this.$store.state.orderForm.date;
    // this.order.userAddressId = this.$store.state.orderForm.date;
    // this.order.userId = this.$store.state.fakeId
    // ⚠️一开始将存起来的orderForm一项一项赋给serviceItem[？].content
    this.price = this.$store.state.orderForm.price; //价格
    this.serviceItem[0].content = this.$store.state.serviceDetail.typename; //服务
    this.serviceItem[1].content = this.$store.state.orderForm.duration; //计费规则
    this.serviceItem[2].content = this.$store.state.userAddress.username; //用户名
    this.serviceItem[3].content = this.$store.state.orderForm.time; //上门时间
    this.serviceItem[4].content = this.$store.state.userAddress.province+'-'+this.$store.state.userAddress.city+'-'+this.$store.state.userAddress.detail; //地址
    this.serviceItem[5].content = this.$store.state.userAddress.phone; //联系电话
    this.serviceItem[6].content = this.$store.state.orderForm.remarks; //备注
  },

  methods: {
    toPay() {
      // 向后端发送数据
      this.$https
        .request({
          url: this.$interfaces.submitOrder,
          data: {
            comm: this.$store.state.orderForm.duration + '**' + this.$store.state.orderForm.remarks,
            date: this.$store.state.orderForm.date,
            detailTypeId: this.$store.state.serviceDetail.iServiceItemList.id,
            price: this.$store.state.orderForm.price,
            userAddressId: this.$store.state.userAddress.id,
            userId: this.$store.state.fakeId
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log("支付成功！");

          // let p = this.$store.state.position;
          let p = 4;
          // 4为普通用户：跳转到首页，员工跳转到订单页面
          if (p === 4) {
            wx.reLaunch({
              url: "../home/main"
            });
          } else {
            wx.reLaunch({
              url: "../order/main"
            });
          }
          // 弹消息框
          wx.showToast({
            title: "跳转至支付页面",
            icon: "success",
            duration: 2000
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
page {
  margin-top: 50px;
}
</style>