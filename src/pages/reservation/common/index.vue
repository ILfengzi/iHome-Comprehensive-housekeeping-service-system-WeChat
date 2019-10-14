<!--
 * @Description: 一般家政服务
 * @Author: 
 * @Date: 2019-10-13 09:04:47
 * @LastEditTime: 2019-10-14 08:46:23
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="reservation">
    <form report-submit="true" @submit="formSubmit" @reset="formReset">
      <!-- 带跳转带列表项 -->
      <div class="weui-cells weui-cells_after-title">
        <navigator url class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img
              src="/static/images/dingwei.png"
              style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
            />
          </div>
          <div class="weui-cell__bd">服务地址</div>
          <div class="weui-cell__ft weui-cell__ft_in-access">我的地址</div>
        </navigator>
        <navigator url class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img
              src="/static/images/shijian.png"
              style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
            />
          </div>
          <div class="weui-cell__bd">服务时长</div>
          <div class="weui-cell__ft weui-cell__ft_in-access">选择时长</div>
        </navigator>
        <navigator url class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__hd">
            <img
              src="/static/images/riqi.png"
              style="margin-right: 10px;vertical-align: middle;width:22px; height: 22px;"
            />
          </div>
          <div class="weui-cell__bd">预约日期</div>
          <div class="weui-cell__ft weui-cell__ft_in-access">选择日期</div>
        </navigator>
      </div>
      <button type="primary" form-type="“submit”">立即支付</button>
    </form>
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
      icon: ""
    };
  },

  methods: {
    formSubmit(e) {
      console.log("form发生了submit事件，携带数据为：", e.mp.detail.value);
    },
    formReset() {
      console.log("form发生了reset事件");
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