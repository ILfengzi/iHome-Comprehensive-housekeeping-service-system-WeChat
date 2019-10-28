<!--
 * @Description: 地址选择器（已完成）
 * @Author: Lin Changkun
 * @Date: 2019-10-17 10:16:43
 * @LastEditTime: 2019-10-28 10:16:04
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="addressPicker" @click="goMyAddress">
    <div class="weui-cell weui-cell_access" hover-class="weui-cell_active">
      <div class="weui-cell__hd">
        <img
          src="/static/images/dingwei.png"
          style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
        />
      </div>
      <div
        class="weui-cell__bd"
      >{{userAddress.username}}&nbsp;&nbsp;&nbsp;&nbsp;{{userAddress.province}}-{{userAddress.city}}-{{userAddress.detail}}</div>
      <div class="weui-cell__ft weui-cell__ft_in-access">{{tips}}</div>
    </div>
  </div>
</template>

<script>
import mpPicker from "mpvue-weui/src/picker";

export default {
  components: {
    mpPicker
  },
  // props: {
  //   userAddress: Object
  // },
  data() {
    return {
      tips: "我的地址",
      // userAddress: {},
      aa: "-"
    };
  },

  // 采用计算属性来让组件进行刷新
  computed: {
    userAddress: function() {
      // `this` 指向 vm 实例
      return this.$store.state.userAddress;
    }
  },

  // watch:{
  //   $store.state.userAddress: function(newVal,oldVal){
  //   }
  // },

  // mounted() {
  //   //将页面显示的地址为默认地址，或者是点击本组件选取的地址
  //   this.userAddress = this.$store.state.userAddress;
  // },

  methods: {
    goMyAddress() {
      wx.navigateTo({
        url: "../../address/main"
      });
    }
  }
};
</script>

<style>
.addressPicker .weui-cell__bd{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>