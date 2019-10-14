<!-- 
/*
 * @Author: Wanlin Chen 
 * @Date: 2019-10-08 17:01:41 
 * @Last Modified by: Wanlin Chen
 * @Last Modified time: 2019-10-11 10:33:11
 */
-->
<template>
  <div class="page" @click="$emit('click')">
    <div class="weui-form-preview">
      <!-- <div class="weui-form-preview__hd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">付款金额</div>
          <div class="weui-form-preview__value_in-hd">¥2400.00</div>
        </div>
      </div> -->
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">服务</div>
          <div class="weui-form-preview__value">{{title}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">下单时间</div>
          <div class="weui-form-preview__value">{{time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    time: String
  }
};
</script>

<style>
.page {
  margin-top: 10px;
}
</style>