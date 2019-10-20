<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-20 10:27:33
 * @LastEditTime: 2019-10-20 18:09:26
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
            src="/static/images/shijian.png"
            style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
          />
        </div>
        <div class="weui-cell__bd">选择数量</div>
        <div class="inputNumber">
          <input v-model="inputValue" type="number" placeholder="0" @confirm="confirmHandle" @blur="losefocus"/>
          <span>台</span>
        </div>
      </div>

      <div class="showPriceAndRemarks">
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
    <!-- <button type="primary" form-type="submit">提交订单</button> -->
    <button type="primary" @click="submitMessage">提交订单</button>
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
      inputValue:'',
      orderForm: {
        address: "undefined", //⚠️地址
        duration: undefined, //服务时长
        time: undefined, //服务时间
        price: 10, //价格
        remarks: "" //备注
      }, //订单
      pickerValueArray: undefined,
      deepLength: 2,
      showPriceAndRemarks: false, //先选择日期才会出现金额和备注
      pickerValueArray: [
        {
          children: []
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

    confirmHandle(){
      console.log('输入值：', this.inputValue);
    },
    losefocus(){
      console.log('输入值是：', this.inputValue);
    },

    getChildDuration(childDuration) {
      // 拿到子组件传回来的时长
      // this.duration = childDuration;
      this.orderForm.duration = childDuration;

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
      this.showPriceAndRemarks = true;
      // this.time = childTime;
      this.orderForm.time = childTime;
      this.orderForm.price = this.$store.state.searchResults.price;
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
      if (this.orderForm.address === undefined) {
        wx.showToast({
          title: "请选择地址",
          icon: "none",
          duration: 2000
        });
        console.log("订单：");
      } else if (this.orderForm.duration === undefined) {
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
          url: "../../orderPreview/main"
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
/* .inputNumber {
  border:1px,solid
} */
</style>