<!--
 * @Description: 按平方计费（待测试）
 * @Author: Lin Changkun
 * @Date: 2019-10-20 10:27:33
 * @LastEditTime: 2019-10-31 11:46:37
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

      <!-- 输入数量 -->
      <div class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__hd">
          <img
            src="/static/images/shuzi.png"
            style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
          />
        </div>
        <div class="weui-cell__bd">填写面积</div>
        <div class="inputNumber">
          <input
            v-model="inputValue"
            type="number"
            placeholder="0"
            @confirm="confirmHandle"
            @blur="losefocus"
          />
          <span>平方</span>
        </div>
      </div>

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
      showPriceAndRemarks: false, //填写数量才会出现金额和备注
      orderForm: {
        duration: undefined, //平方
        time: undefined, //服务时间
        date: undefined, //给后台的时间
        price: 10, //价格
        remarks: "" //备注
      },
      // pickerValueArray: undefined,
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
    getChildTime(childTime) {
      this.orderForm.time = childTime.label;
      this.orderForm.date = childTime.value[1];
    },

    getChildRemarks(childRemarks) {
      // console.log('备注：', childRemarks);
      this.orderForm.remarks = childRemarks;
    },

    // 输入完成
    confirmHandle() {
      this.orderForm.price =
        Number(this.$store.state.serviceDetail.price) * Number(this.inputValue);
      this.orderForm.duration = this.inputValue + '平方';
      this.showPriceAndRemarks = true;
    },
    losefocus() {
      this.orderForm.price =
        Number(this.$store.state.serviceDetail.price) * Number(this.inputValue);
      this.orderForm.duration = this.inputValue + '平方';
      this.showPriceAndRemarks = true;
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
      } else if (this.orderForm.duration === undefined) {
        wx.showToast({
          title: "请填写面积",
          icon: "none",
          duration: 2000
        });
      } else {
        // 订单预览，路由跳转
        wx.navigateTo({
          url: "../../orderPreview/main",
          success: res => {
            //尝试清除缓存，并收起
            this.inputValue = " ";
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
.inputNumber {
  width: 200rpx;
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
  text-align: center;
}
.inputNumber span {
  display: table-cell;
  width: 1%;
  background-color:#ccc;
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
/* .inputNumber {
  border:1px,solid
} */
</style>