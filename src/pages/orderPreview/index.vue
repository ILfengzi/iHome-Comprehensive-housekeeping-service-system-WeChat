<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-18 20:00:45
 * @LastEditTime: 2019-10-20 11:33:16
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="page">
    <div class="weui-form-preview">
      <div class="weui-form-preview__hd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">付款金额</div>
          <div class="weui-form-preview__value_in-hd">¥ {{orderForm.price}}</div>
        </div>
      </div>
      <div class="weui-form-preview__bd">
        <div v-for="item in serviceItem" :key="item.key">
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
      serviceItem: [
        {
          key: "1",
          title: "服务",
          content: "日常清洁"
        },
        {
          key: "2",
          title: "预约时长",
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
      orderForm: {
        username: "阿里吧唧",
        address: "广东省-广州市-荔湾区-春田花花幼稚园xxx街道123号", //地址
        phone: "123456789",
        duration: "2小时", //服务时长
        time: "2019年10月21日(周三)-8:00 - 10:00", //服务时间
        price: 10, //价格
        remarks:
          "昌坤帅帅，昌坤最帅，昌坤帅帅，昌坤最帅，昌坤帅帅，昌坤最帅，昌坤帅帅，昌坤最帅，昌坤帅帅，昌坤最帅" //备注
      },
      // 发回后端的数据
      to:{
        detailId: 0, //服务类型id
        addressId: 0,//地址id
        // pickerValueArray.children.value : "sss", //后端需要的time
        price: 90, //总价
        comm: 'dadad', //备注（remarks）
      }
    };
  },
  mounted() {
    // this.orderForm = this.$store.state.orderForm.price;

    // ⚠️一开始将存起来的orderForm一项一项赋给serviceItem[？].content
    this.serviceItem[2].content = this.orderForm.duration;
  },

  methods: {
    toPay() {
      // ⚠️向后端发送数据
      this.$https
        .request({
          url: this.$interfaces.sendOrder,
          data: {
            orderForm: this.$store.state.orderForm
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