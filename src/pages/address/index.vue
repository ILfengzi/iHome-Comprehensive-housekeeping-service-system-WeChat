<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-21 16:32:56
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="addresslist">
    <div v-for="(item,index) in userAddress" :key="index">
        <addressCell
        :province="item.province"
        :city="item.city"
        :phone="item.phone"
        :detail="item.detail"
        :username="item.username"
        ></addressCell>
    </div>
    <div class="btn">
      <button @click="switchToNewAddress" form-type="submit" type="primary">新建</button>
    </div>
  </div>
</template>

<script>
import addressCell from "../../components/addressCell/index";

export default {
  data() {
    return {
      userAddress:null
    };
  },
  components: {
    addressCell
  },
  onShow() {
     console.log("成功加载");        
    this.$https
      .request({   
        url: this.$interfaces.getUserAddress,
        data: {
          id: 1 //输入值
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