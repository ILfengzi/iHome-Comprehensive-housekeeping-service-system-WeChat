<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-17 10:16:43
 * @LastEditTime: 2019-10-17 16:15:14
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
      //向后端传值，拿到可用的服务时间
      // this.$https
      //   .request({
      //     url: this.$interfaces.getTime,
      //     data: {
      //       hours: childDuration
      //     },
      //     header: {
      //       "content-type": "application/json" // 默认值
      //     },
      //     method: "POST"
      //   })
      //   .then(res => {
      //     // 成功，获取到可用的服务时间
      //     console.log("我进来了");
      //     console.log(res);
      //     this.pickerValueArray = res.data;

          wx.navigateTo({
            url: "../../address/main"
          });
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style>
</style>