<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-21 23:55:16
 * @LastEditors: Lin Changkun
 -->

<template>
    <div class="addresslist">
      <div v-for="(item,index) in userAddress" :key="index">
        <addressCell
          :userAddress="item"
          @isDelete="isDelete"
          @isEdit="isEdit"
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
      userAddress: null
    };
  },
  components: {
    addressCell
  },
  onShow() {
    console.log("成功加载");
    //输入完成，传递输入值给后端、刷新页面
    this.$https
      .request({
        url: this.$interfaces.getUserAddress,
        data: {
          // id: this.$store.state.fakeId //⚠️正式用：用户id
          id: 1
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

    isDelete(e){
      if (e === 1) {
        console.log('删好友！哼～');
      }
    },

    isEdit(e){
      if (e === 1) {
        console.log('编辑哦，小哥哥～');
      }
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