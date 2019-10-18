<!--
 * @Description: 地址管理界面
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
<<<<<<< HEAD
 * @LastEditTime: 2019-10-18 15:26:38
=======
<<<<<<< HEAD
 * @LastEditTime: 2019-10-16 14:46:38
 * @LastEditors: Lin Changkun
=======
 * @LastEditTime: 2019-10-18 11:31:31
>>>>>>> 65b59220dde5d35939179fcd0f5996048ab71abc
 * @LastEditors: Wanlin Chen
>>>>>>> 29e0dba5e27e24aa0e12bc91c9927e73a0ea77db
 -->

<template>
  <div class="addresslist">
    <div v-for="(item,index) in searchResults" :key="index">
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
      searchResults,
      userdetail: {
        province: "广东省",
        city: "广州市荔湾区",
        phone: "123456789",
        detail:
          "春田花花幼稚园xxx街道123号我是一个假数据我是一个假数据我是一个假数据我是一个假数据",
        username: "celine"
      }
    };
  },
  components: {
    addressCell
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
    },
    complete(e) {
      //输入完成，传递输入值给后端、刷新页面
      console.log("输入完成！");
      this.$https
        .request({
          url: this.$interfaces.getUser,
          data: {
            id: this.inputVal //输入值
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "GET"
        })
        .then(res => {
          console.log(res);
          // 成功，刷新页面
          this.searchResults = res.listd;
        })
        .catch(err => {
          console.log(err);
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