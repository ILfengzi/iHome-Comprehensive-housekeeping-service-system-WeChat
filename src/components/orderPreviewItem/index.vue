<!--
 * @Description: 订单预览项
 * @Author: 
 * @Date: 2019-10-19 21:11:23
 * @LastEditTime: 2019-10-19 21:23:00
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="orderPreviewItem">
    <div class="weui-form-preview__item">
      <div class="weui-form-preview__label" :title="title">{{title}}</div>
      <div class="weui-form-preview__value" :content="content">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  }
};
</script>

<style>
</style>