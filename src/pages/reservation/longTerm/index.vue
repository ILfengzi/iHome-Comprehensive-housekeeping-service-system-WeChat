<!--
 * @Description: 预约：选时间、地点等
 * @Author: 
 * @Date: 2019-10-13 09:04:47
 * @LastEditTime: 2019-10-18 15:25:36
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
              src="/static/images/xinju.png"
              style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"
            />
          </div>
          <div class="weui-cell__bd">服务地址</div>
          <div class="weui-cell__ft weui-cell__ft_in-access">选择</div>
        </navigator>
        <navigator url class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <div class="weui-cell__bd">cell standard</div>
          <div class="weui-cell__ft weui-cell__ft_in-access">1222</div>
        </navigator>
      </div>
      <button type="primary" form-type="“submit”">立即支付</button>
    </form>
  </div>
  
</template>

<script>
export default {
  components: {},
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