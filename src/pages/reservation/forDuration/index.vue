<!--
 * @Description: 按时长计费（已完成）
 * @Author: Lin Changkun
 * @Date: 2019-10-20 10:27:33
 * @LastEditTime: 2019-10-31 11:45:02
 * @LastEditors: Lin Changkun
 -->

<template>
  <div class="reservation">
    <!-- 带跳转带列表项 -->
    <div class="weui-cells weui-cells_after-title">
      <!-- 选择地点 -->
      <address-picker></address-picker>
      <!-- 选择时长 -->
      <duration-picker @click="getChildDuration"></duration-picker>
      <!-- 选择日期 -->
      <time-picker
        v-if="showTimePicker"
        :pickerValueArray="pickerValueArray"
        :deepLength="deepLength"
        @click="getChildTime"
      ></time-picker>

      <div class="showPriceAndRemarks" v-if="showPriceAndRemarks">
        <!-- 估价 -->
        <div class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img
              src="/static/images/shijian.png"
              style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
            />
          </div>
          <div class="weui-cell__bd">预计金额</div>
          <div class="weui-cell__ft">¥ {{orderForm.price}}</div>
        </div>
        <!-- 选择备注 -->
        <remarks-picker @click="getChildRemarks"></remarks-picker>
      </div>
    </div>
    <button type="primary" @click="submitMessage">提交订单</button>
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
      userAddress: {},
      orderForm: {
        duration: undefined, //服务时长
        time: undefined, //服务时间
        date: undefined, //给后台的时间
        price: 10, //价格
        remarks: "" //备注
      },
      // pickerValueArray: undefined,
      deepLength: 2,
      showTimePicker: false, //先选择时长才能选择日期
      showPriceAndRemarks: false, //先选择日期才会出现金额和备注
      pickerValueArray: [
        {
          children: []
        }
      ]
    };
  },
  // mounted() {
  //   this.orderForm.duration = "";
  //   this.orderForm.time = "";
  //   this.orderForm.date = "";
  //   this.orderForm.price = "";
  //   this.orderForm.remarks = "";
  // },
  methods: {
    getChildDuration(childDuration) {
      // 拿到子组件传回来的时长

      //向后端传值，拿到可用的服务时间
      this.$https
        .request({
          url: this.$interfaces.getTime,
          data: {
            hours: childDuration,
            type: 0, //0是钟点工，1为其他员工
            serviceId: this.$store.state.serviceDetail.servicetpyeId
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
          this.showTimePicker = true;
          this.orderForm.price =
            Number(this.$store.state.serviceDetail.price) *
            Number(childDuration);
          this.orderForm.duration = childDuration + "小时";
        })
        .catch(err => {
          console.log(err);
        });
    },

    getChildTime(childTime) {
      // console.log('时间:', childTime);
      this.showPriceAndRemarks = true;
      this.orderForm.time = childTime.label;
      this.orderForm.date = childTime.value[1];
      // this.orderForm.price = this.$store.state.searchResults.price;
    },

    getChildRemarks(childRemarks) {
      // console.log('备注：', childRemarks);
      // this.remarks = childRemarks;
      this.orderForm.remarks = childRemarks;
    },

    submitMessage() {
      // 将订单存到vuex
      this.$store.dispatch("setOrderForm", this.orderForm);
      console.log("订单：");
      console.log(this.$store.state.orderForm);

      // 校验
      if (this.orderForm.duration === undefined) {
        wx.showToast({
          title: "请选择服务时长",
          icon: "none",
          duration: 2000
        });
      } else if (this.orderForm.time === undefined) {
        wx.showToast({
          title: "请选择上门时间",
          icon: "none",
          duration: 2000
        });
      } else {
        // 订单预览，路由跳转
        wx.navigateTo({
          url: "../../orderPreview/main",
          success: res => {
            //完成后收起
            this.showTimePicker = false;
            this.showPriceAndRemarks = false;
          }
        });
      }
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
.weui-cell__ft {
  color: aqua;
}
.gaveTips {
  margin-top: 50px;
  padding: 15px;
  box-sizing: border-box;
}
</style>