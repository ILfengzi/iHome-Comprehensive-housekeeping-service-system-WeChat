<!--
 * @Description: 服务时长选择器（已完成）
 * @Author: Lin Changkun
 * @Date: 2019-10-16 11:09:02
 * @LastEditTime: 2019-10-29 00:02:09
 * @LastEditors: Lin Changkun
 -->
<template>
  <picker
    class="weui-btn"
    @change="durationPickerChange"
    @cancel="cancelPincker"
    :value="indexPicker"
    :range="array"
    name="duration"
  >
    <div class="weui-cell weui-cell_access" hover-class="weui-cell_active">
      <div class="weui-cell__hd">
        <img
          src="/static/images/shijian.png"
          style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
        />
      </div>
      <div class="weui-cell__bd">{{title}}</div>
      <div class="weui-cell__ft weui-cell__ft_in-access">{{tips}}</div>
    </div>
  </picker>
</template>

<script>
import mpPicker from "mpvue-weui/src/picker";

export default {
  components: {
    mpPicker
  },
  // props: {
  //     title: String,
  //     tips: String,
  //     indexPicker: String,
  //     array: Array
  // },
  data() {
    return {
      title: "服务时长",
      tips: "时长越长越优惠哦～",
      indexPicker: "0",
      array: ["2小时", "3小时", "4小时", "5小时", "6小时", "7小时", "8小时"],
      time: [],
      duration: 0
    };
  },

  mounted() {
    //⚠️尝试清除缓存
    this.title = "服务时长";
    this.tips = "时长越长越优惠哦～";
  },

  methods: {
    durationPickerChange(e) {
      console.log(e);
      this.title = "预约" + this.array[e.mp.detail.value];
      this.tips = "";
      this.duration = Number(e.mp.detail.value) + Number(2);

      // 向父组件传值
      this.$emit("click", this.duration);
    },
    cancelPincker(e) {
      console.log("取消");
    }
  }
};
</script>

<style>
</style>