<!--
 * @Description: 钟点工
 * @Author: 
 * @Date: 2019-10-13 09:04:47
 * @LastEditTime: 2019-10-18 15:21:03
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="reservation">
    <form report-submit="true" @submit="formSubmit" @reset="formReset">
      <!-- 带跳转带列表项 -->
      <div class="weui-cells weui-cells_after-title">
        <!-- 选择地点 -->
        <address-picker></address-picker>
        <!-- 选择时长 -->
        <duration-picker @click="getChildDuration"></duration-picker>
        <!-- 选择日期 -->
        <time-picker :pickerValueArray="pickerValueArray" :deepLength="deepLength" @click="getChildTime"></time-picker>
        <!-- 选择备注 -->
        <remarks-picker @click="getChildRemarks"></remarks-picker>
      </div>
      <button type="primary" form-type="submit">提交订单</button>
    </form>
  </div>
</template>

<script>
import mpPicker from "mpvue-weui/src/picker";
import addressPicker from "../../../components/addressPicker/index";
import durationPicker from "../../../components/durationPicker/index";
import timePicker from "../../../components/timePicker/index";
import remarksPicker from "../../../components/remarksPicker/index";

export default {
  components: {
    mpPicker,
    addressPicker,
    durationPicker,
    timePicker,
    remarksPicker
  },
  data() {
    return {
      // icon: "",
      duration: undefined,
      pickerValueArray: undefined,
      time: undefined,
      remarks: undefined,
      deepLength:2,
      pickerValueArray: [
        {
          label: "请先选择",
          value: "1231231231",
          children: [
            {
              label: "服务时间",
              value: "qweqeqeq"
            }
          ]
        }
      ]
    };
  },

  methods: {
    formSubmit(e) {
      console.log("form发生了submit事件，携带数据为：", e.mp.detail.value);
    },
    formReset() {
      console.log("form发生了reset事件");
    },

    getChildDuration(childDuration) {
      // 拿到子组件传回来的时长
      this.duration = childDuration;

      //向后端传值，拿到可用的服务时间
      this.$https
        .request({
          url: this.$interfaces.getTime,
          data: {
            hours: childDuration
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          // 成功，获取到可用的服务时间
          console.log("我进来了");
          console.log(res);
          this.pickerValueArray = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    getChildTime(childTime) {
      // console.log('时间:', childTime);
      this.time = childTime;
    },

    getChildRemarks(childRemarks){
      // console.log('备注：', childRemarks);
      this.remarks = childRemarks;
    }
  }
};
</script>

<style scoped>
.reservation button {
  position: absolute;
  top: 80%;
  left: 10%;
  width: 80%;
  color: white;
}
</style>