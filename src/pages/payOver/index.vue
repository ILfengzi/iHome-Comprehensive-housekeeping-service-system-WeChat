<!--
 * @Description: 支付完成页
 * @Author: Wanlin Chen
 * @Date: 2019-10-20 11:58:49
 * @LastEditTime: 2019-10-31 09:12:39
 * @LastEditors: Wanlin Chen
 -->
<template>
  <div class="payOver">
    <div class="icon">
      <icon type="success" size="40" />
      <div class="tips">支付成功</div>
    </div>
    <div class="price">￥{{price}}</div>
    <div class="info">
      <div class="little">收款方</div>
      <div>
        <img src="/static/images/logo.jpg" />
      </div>
      <div class="name">ihome</div>
    </div>
    <button type="primary" @click="payOver">完成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0.01
    };
  },
  mounted() {
    this.price = this.$store.state.orderForm.price;
  },
  methods: {
    payOver() {
      // if (this.position === 1) {
        wx.switchTab({
          url: "../home/main",
          success() {},
          fail() {}
        });
      // } else {
      //   wx.switchTab({
      //     url: "../order/main",
      //     success() {},
      //     fail() {}
      //   });
      // }
    }
  }
};
</script>

<style>
.payOver {
  text-align: center;
  background-color: white;
  height: 100%;
}
.icon {
  margin-bottom: 55px;
  padding-top: 45px;
}
.info {
  margin-bottom: 50px;
}
.info img {
  width: 64px;
  height: 114rpx;
  border-radius: 10%;
  margin-bottom: 5px;
}
.little {
  color: slategrey;
  size: 16px;
  margin-bottom: 5px;
}
.name {
  size: 20px;
  font-weight: bold;
}
.tips {
  color: #09bb07;
  font-size: 20px;
}
.price {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 45px;
}
button {
  border: 1px solid #09bb07;
  width: 40%;
}
</style>