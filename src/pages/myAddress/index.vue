<!--
 * @Description: "订单跳转"的我的地址页面
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-27 22:21:12
 * @LastEditors: Lin Changkun
 -->

<template>
  <div class="addresslist">
    <div v-for="(item,index) in userAddress" :key="index">
        <orderAddressCell
        :province="item.province"
        :city="item.city"
        :phone="item.phone"
        :detail="item.detail"
        :username="item.username"
        @click="swithToOrder"
        ></orderAddressCell>
    </div>
    <div class="btn">
      <button @click="switchToNewAddress" form-type="submit" type="primary">新建</button>
    </div>
  </div>
</template>

<script>
import orderAddressCell from "../../components/orderAddressCell/index";

export default {
  data() {
    return {
      userAddress: null
    };
  },
  components: {
    orderAddressCell
  },

  onShow() {
     console.log("成功加载");        
    this.$https
      .request({   
        url: this.$interfaces.getUserAddress,
        data: {
          id: this.$store.state.fakeId, //注意!!！！！！正式用
          // id: 1 //输入值
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        method: "POST"
      })
      .then(res => {
        console.log(res);
        // 成功，刷新页面
        this.userAddress = res.addressList;
        console.log(this.userAddress);
        
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    switchToNewAddress() {
      wx.navigateTo({
        url: "../newaddress/main"
      });
    },
    swithToOrder: function() {
      console.log(123);
      wx.navigateBack({
        delta: 1 // 回退前 delta(默认为1) 页面
      });
    }
  }
};
</script>

<style>
.addresslist {
  position: relative;
  padding-bottom: 50px;
}

.btn {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background-color: gray;
  z-index: 10;
}
</style>