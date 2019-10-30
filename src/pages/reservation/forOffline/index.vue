<!--
 * @Description: 线下定价（待测试）
 * @Author: Lin Changkun
 * @Date: 2019-10-20 10:27:33
 * @LastEditTime: 2019-10-29 09:31:50
 * @LastEditors: Lin Changkun
 -->

<template>
  <div class="reservation">
    <!-- 带跳转带列表项 -->
    <div class="weui-cells weui-cells_after-title">
      <!-- 选择地点 -->
      <address-picker></address-picker>
      <!-- 选择日期 -->
      <time-picker
        :pickerValueArray="pickerValueArray"
        :deepLength="deepLength"
        @click="getChildTime"
      ></time-picker>

      <!-- 选择备注 -->
      <remarks-picker @click="getChildRemarks"></remarks-picker>
    </div>
    <div class="btn">
      <div class="left">
        <img src="/static/images/dianhua.png" />
        <span class="leftBtn" @click="callPhone">电话咨询</span>
      </div>
      <span class="right" @click="submitMessage">提交订单</span>
    </div>
    <!-- </form> -->
  </div>
</template>

<script>
import mpPicker from "mpvue-weui/src/picker";
import addressPicker from "../../../components/addressPicker/index";
import timePicker from "../../../components/timePicker/index";
import remarksPicker from "../../../components/remarksPicker/index";

export default {
  components: {
    mpPicker,
    addressPicker,
    timePicker,
    remarksPicker
  },
  data() {
    return {
      // icon: "",
      inputValue: "",
      orderForm: {
        duration: undefined, //数量
        time: undefined, //服务时间
        date: undefined, //给后台的时间
        price: 0.01, //价格
        remarks: "" //备注
      },
      pickerValueArray: undefined,
      deepLength: 2,
      pickerValueArray: [
        {
          children: []
        }
      ]
    };
  },

  mounted() {
    //向后端传值，拿到可用的服务时间
    this.$https
      .request({
        url: this.$interfaces.getTime,
        data: {
          hours: 0,
          type: 1, //0是钟点工，1为其他员工
          serviceId: this.$store.state.serviceDetail.servicetpyeId
          // serviceId: 1
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

  methods: {
    confirmHandle() {
      console.log("输入值：", this.inputValue);
    },
    losefocus() {
      console.log("输入值是：", this.inputValue);
    },

    getChildTime(childTime) {
      this.orderForm.time = childTime.label;
      this.orderForm.date = childTime.value[1];
      this.orderForm.price = '0.01';
      this.orderForm.duration = '线下定价';
    },

    getChildRemarks(childRemarks) {
      // console.log('备注：', childRemarks);
      // this.remarks = childRemarks;
      this.orderForm.remarks = childRemarks;
    },

    // 拨打电话
    callPhone() {
      wx.makePhoneCall({
        phoneNumber: "13202019516" //仅为示例，并非真实的电话号码
      });
    },
    submitMessage() {
      // 将订单存到vuex
      this.$store.dispatch("setOrderForm", this.orderForm);
      console.log("订单：");
      console.log(this.$store.state.orderForm);

      // 校验
      if (this.orderForm.time === undefined) {
        wx.showToast({
          title: "请选择上门时间",
          icon: "none",
          duration: 2000
        });
      } else {
        // 订单预览，路由跳转
        wx.navigateTo({
          url: "../../orderPreview/main"
        });
      }
    }
  }
};
</script>

<style scoped>
.reservation .left {
  background-color: gray;
  position: absolute;
  bottom: 0px;
  height: 90rpx;
  width: 50%;
  font-size: 35rpx;
}
.reservation .left img {
  margin-left: 70rpx;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.reservation .leftBtn {
  /* text-align: center; */
  margin-left: 30rpx;
  line-height: 90rpx;
}
.reservation .right {
  position: absolute;
  bottom: 0px;
  left: 50%;
  width: 50%;
  height: 90rpx;
  background-color:#2cbe07;
  text-align: center;
  line-height: 90rpx;
  font-size: 35rpx;
  color: aliceblue;
}
/* .reservation .right {
  position: absolute;
  bottom: 0px;
  left: 50%;
  width: 50%;
  color: white;
} */
.inputNumber {
  width: 210rpx;
  display: table;
  border: 1px solid;
  /* background-color:red; */
  /* color:blue; */
}
.inputNumber input {
  display: table-cell;
  width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
  height: 33px;
}
.inputNumber span {
  display: table-cell;
  width: 1%;
  background-color: gray;
  white-space: nowrap;
  padding: 5px 10px;
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