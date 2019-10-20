<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-17 10:16:43
 * @LastEditTime: 2019-10-19 21:18:55
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="addressPicker">
    <div class="weui-cell weui-cell_access" hover-class="weui-cell_active" @click="goMyAddress">
      <div class="weui-cell__hd">
        <img
          src="/static/images/dingwei.png"
          style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
        />
      </div>
      <div class="weui-cell__bd">{{title}}</div>
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
  data() {
    return {
      title: "服务地址",
      tips: "我的地址"
    };
  },
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
</style>