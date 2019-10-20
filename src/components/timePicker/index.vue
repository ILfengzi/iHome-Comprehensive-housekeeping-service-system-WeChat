<!--
 * @Description: 选择日期时间弹出联动框
 * @Author: 
 * @Date: 2019-10-16 11:09:02
 * @LastEditTime: 2019-10-20 16:55:48
 * @LastEditors: Lin Changkun
 -->
<template>
<div>
    <div
      class="weui-cell weui-cell_access"
      hover-class="weui-cell_active"
      @click="showMulLinkageTwoPicker"
      name="time"
    >
      <div class="weui-cell__hd">
        <img
          src="/static/images/riqi.png"
          style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
        />
      </div>
      <div class="weui-cell__bd">{{title}}</div>
      <div class="weui-cell__ft weui-cell__ft_in-access">{{tips}}</div>
    </div>
    <mp-picker
      ref="mpPicker"
      mode="multiLinkageSelector"
      :deepLength="deepLength"
      :pickerValueDefault="pickerValueDefault"
      @onChange="onChange"
      @onConfirm="onConfirm"
      @onCancel="onCancel"
      :pickerValueArray="pickerValueArray"
    ></mp-picker>
 </div>
</template>

<script>
import mpPicker from "mpvue-weui/src/picker";

export default {
  components: {
    mpPicker
  },
  props:{
    pickerValueArray: Object,
    deepLength: String
  },
  mounted(){
    console.log()
  },
  data() {
    return {
      title: "上门时间",
      tips: "选择时间",
      pickerValueDefault: [1, 0],
    };
  },
  methods: {
    showMulLinkageTwoPicker() {
      this.$refs.mpPicker.show();
    },
    onConfirm(e) {
      console.log(e);
      this.title = e.label;
      this.tips = "";
      // 向父组件传数据
      this.$emit('click', e.label);
    }
  }
};
</script>

<style>
</style>