<!--
 * @Description: 我的地址页面
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-24 20:13:46
 * @LastEditors: Lin Changkun
 -->

<template>
  <div class="addresslist">
    <!-- <div v-for="(item,index) in userAddress" :key="index"> -->
    <addressCell
      v-for="(item,index) in userAddress"
      :key="index"
      :index="index"
      :userAddress="item"
      @isDelete="isDelete"
      @isEdit="isEdit"
    ></addressCell>
    <!-- </div> -->
    <div class="btn">
      <button @click="goNewaddress" form-type="submit" type="primary">新建</button>
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
          userId: 1
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
    //跳转到新建页面
    goNewaddress() {
      // 更新vuex中的值
      this.$store.dispatch("setIsNewAddress", true);
      wx.navigateTo({
        url: "../newaddress/main"
      });
    },

    isDelete(e, index) {
      console.log("删除咯？");
      this.$https
        .request({
          url: this.$interfaces.deleteUserAddress,
          data: {
            id: e
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          // 成功，从第x位开始，删除一个元素
          this.userAddress.splice(index, 1);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 编辑地址
    isEdit(e) {
      console.log("编辑咯？");
      this.$store.dispatch("setIsNewAddress", false);
      wx.navigateTo({
        url: "../newaddress/main"
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