<!--
 * @Description: 支付预览
 * @Author: Lin Changkun
 * @Date: 2019-10-18 20:00:45
 * @LastEditTime: 2019-11-04 00:00:57
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
        <div :class="{'CustomPopup':showCustomPopup}">
          <div :class="{'block':isBlockm,'forPop':true}"></div>
          <div v-if="showRegister" class="registerPart">
            <img @click="maskClick" src="/static/images/icon/cancel.png" />
            <div class="title">请输入支付密码</div>
            <div class="detail">付款给ihome</div>
            <div class="price">¥ {{price}}</div>
            <div class="pwipt">
              <input
                type="number"
                @input="judgePassword"
                v-model="password"
                autofocus
                maxlength="6"
              />
              <div class="border-right">
                <span v-if="show1"></span>
              </div>
              <div class="border-right">
                <span v-if="show2"></span>
              </div>
              <div class="border-right">
                <span v-if="show3"></span>
              </div>
              <div class="border-right">
                <span v-if="show4"></span>
              </div>
              <div class="border-right">
                <span v-if="show5"></span>
              </div>
              <div>
                <span v-if="show6"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import base64 from '../../../static/images/base64';
import orderPreviewItem from "../../components/orderPreviewItem/index";
import payCell from "../../components/payCell/index";

export default {
  components: {
    orderPreviewItem,
    payCell
  },
  props: {
    id: String, // 当一个页面有多个密码输入框时，用id来区分
    default: "1"
  },
  data() {
    return {
      // icon60: base64.icon60
      // orderForm: undefined,
      /**支付框 */
      password: "",
      autofocus: true,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      /********** */
      price: 0.01,
      block: false,
      showRegister: false,
      showCustomPopup: false,
      serviceItem: [
        {
          key: "0",
          title: "服务",
          content: "日常清洁"
        },
        {
          key: "1",
          title: "计费规则",
          content: ""
        },
        {
          key: "2",
          title: "用户名",
          content: ""
        },
        {
          key: "3",
          title: "上门时间",
          content: ""
        },
        {
          key: "4",
          title: "地址",
          content: ""
        },
        {
          key: "5",
          title: "联系电话",
          content: ""
        },
        {
          key: "6",
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
      }
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
  onShow() {  
    //将台
    // this.order.price = this.$store.state.orderForm.price;
    // this.order.date = this.$store.state.orderForm.date;
    // this.order.comm = this.$store.state.orderForm.remarks;
    // this.order.detailTypeId = this.$store.state.orderForm.date;
    // this.order.userAddressId = this.$store.state.orderForm.date;
    // this.order.userId = this.$store.state.fakeId
    // ⚠️一开始将存起来的orderForm一项一项赋给serviceItem[？].content
    // this.password = "";
    // this.show1 = false;
    // this.show2 = false;
    // this.show3 = false;
    // this.show4 = false;
    // this.show5 = false;
    // this.show6 = false;
    // this.showCustomPopup = false;
    // this.showRegister = false;
    this.price = this.$store.state.orderForm.price; //价格
    this.serviceItem[0].content = this.$store.state.serviceDetail.typename; //服务
    this.serviceItem[1].content = this.$store.state.orderForm.duration; //计费规则
    this.serviceItem[2].content = this.$store.state.userAddress.username; //用户名
    this.serviceItem[3].content = this.$store.state.orderForm.time; //上门时间
    this.serviceItem[4].content =
      this.$store.state.userAddress.province +
      "-" +
      this.$store.state.userAddress.city +
      "-" +
      this.$store.state.userAddress.detail; //地址
    this.serviceItem[5].content = this.$store.state.userAddress.phone; //联系电话
    this.serviceItem[6].content = this.$store.state.orderForm.remarks; //备注
  },

  methods: {
    maskClick() {
      this.block = false;
      this.showCustomPopup = false;
      this.showRegister = false;
    },
    toPay() {
      this.showCustomPopup = true;
      this.block = true;
      this.showRegister = true;
    },
    /*******支付密码框********/
    //关闭密码输入清空输入
    closePop: function() {
      this.password = "";
      this.showCustomPopup = false;
      // this.judgePassword();
    },

    //校验密码
    surePassword: function() {
      // 调用密码校验接口

      // 校验完成，向后端发送订单数据
      this.$https
        .request({
          url: this.$interfaces.submitOrder,
          data: {
            comm:
              this.$store.state.orderForm.duration +
              "**" +
              this.$store.state.orderForm.remarks,
            date: this.$store.state.orderForm.date,
            // detailTypeId: this.$store.state.serviceDetail.iServiceItemList.id,
            // date: this.$store.state.orderForm.time,
            detailTypeId: this.$store.state.serviceDetail.iServiceItemList[0]
              .detailtypeId,
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
          console.log("提交订单成功！凯丰直播迎风驰翔");
          console.log(
            "comm:",
            this.$store.state.orderForm.duration +
              "**" +
              this.$store.state.orderForm.remarks
          );
          console.log("date", this.$store.state.orderForm.date);
          console.log(
            this.$store.state.serviceDetail.iServiceItemList[0].detailtypeId
          );
          console.log("price", this.$store.state.orderForm.price);
          console.log("userAddressId", this.$store.state.userAddress.id);
          console.log("userId", this.$store.state.fakeId);
          console.log("userAddress:", this.$store.state.userAddress);
          
          //跳转到支付完成页面
          wx.navigateTo({
            url: "../payOver/main",
            success: res => {
              this.password = "";
              this.show1 = false;
              this.show2 = false;
              this.show3 = false;
              this.show4 = false;
              this.show5 = false;
              this.show6 = false;
              this.showRegister = false;
              this.showCustomPopup = false;
              console.log("密码缓存已清除");
            }
          });
   
          //  清除缓存
          // this.$store.dispatch("setOrderForm", null);
          // this.$store.dispatch("setUserAddress", null);
        })
        .catch(err => {
          console.log("提交订单失败（不关我事～），失败信息：");
          console.log(err);
        });
    },

    // 密码输入样式
    judgePassword: function() {
      console.log("密码");
      console.log(this.password);
      if (this.password.length == 0) {
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
        this.show4 = false;
        this.show5 = false;
        this.show6 = false;
      }
      if (this.password.length == 1) {
        this.show1 = true;
        this.show2 = false;
        this.show3 = false;
        this.show4 = false;
        this.show5 = false;
        this.show6 = false;
      }
      if (this.password.length == 2) {
        this.show1 = true;
        this.show2 = true;
        this.show3 = false;
        this.show4 = false;
        this.show5 = false;
        this.show6 = false;
      }
      if (this.password.length == 3) {
        this.show1 = true;
        this.show2 = true;
        this.show3 = true;
        this.show4 = false;
        this.show5 = false;
        this.show6 = false;
      }
      if (this.password.length == 4) {
        this.show1 = true;
        this.show2 = true;
        this.show3 = true;
        this.show4 = true;
        this.show5 = false;
        this.show6 = false;
      }
      if (this.password.length == 5) {
        this.show1 = true;
        this.show2 = true;
        this.show3 = true;
        this.show4 = true;
        this.show5 = true;
        this.show6 = false;
      }
      if (this.password.length == 6) {
        this.show1 = true;
        this.show2 = true;
        this.show3 = true;
        this.show4 = true;
        this.show5 = true;
        this.show6 = true;
        // 接口校验密码
        this.surePassword();
      }
    }
  }
};
</script>

<style>
.page {
  margin-top: 50px;
}

/********弹出支付框******/
.CustomPopup {
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.registerPart {
  background-color: white;
  width: 300px;
  height: 250px;
  border: #888888 2px solid;
  position: fixed;
  left: 77%;
  top: 63%;
  margin-top: -200px;
  margin-left: -250px;
  text-align: center;
  border-radius: 6%;
}
.registerPart img {
  width: 20px;
  height: 20px;
  float: left;
  margin-top: 22rpx;
  margin-left: 22rpx;
}
.forPop {
  width: 60%;
  height: 50%;
  top: 0px;
  left: 0px;
  position: absolute;
  /*因为IE不支持opacity 所以用filter 为了兼容两个都写*/
  filter: Alpha(opacity=60);
  opacity: 0.6;
  background: #000000;
  display: none;
}
.block {
  display: block;
}
.title {
  margin-bottom: 10px;
}
.detail {
  margin-bottom: 12rpx;
  margin-left: 24px;
  margin-top: -8px;
}
.price {
  font-size: 36px;
  font-weight: bold;
  border-bottom: 2rpx solid #ccc;
  margin: 0 20rpx 32rpx 20rpx;
  padding-bottom: 18rpx;
}
.pwipt {
  font-size: 0;
  height: 45px;
  line-height: 45px;
  width: 240px;
  border: 1px solid #ccc;
  margin-left: 62rpx;
}
.pwipt div {
  display: inline-block;
  width: 16.2%;
  height: 45px;
  position: relative;
}
.pwipt .border-right {
  border-right: 1px solid #ccc;
}
.pwipt div > span {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #000;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  margin-top: -5px;
  margin-left: -5px;
}
.pwipt input {
  outline: none;
  border: 0;
  background: none;
  width: 900px;
  height: 0;
  padding: 22px 0;
  text-align: center;
  position: absolute;
  left: -500px;
  right: 0;
  z-index: 1000;
  color: transparent;
  text-indent: -999em;
}
</style>