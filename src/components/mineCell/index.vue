<!--
 * @Description: “我的”页面 组件
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-21 09:24:47
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="mineCell"  @click="$emit('click')">
      <img :src="icon" alt>
      <span>{{title}}</span>
      <span class="r_icon" >
          <img src="/static/images/icon/mine/icon_r.jpg" alt>
      </span>
  </div>
</template>

<script>
export default {
    props:{
        icon:String,
        title:String,
        text:String
    }
}
</script>

<style>
.mineCell {
  padding: 10px 0 10px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  font-size: 15px;
}
.mineCell img {
  width: 26px;
  height: 26px;
  margin-right: 16px;
  float: left;
}
.r_icon {
  font-size: 16px;
  color: #aaa;
  float: right;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.r_icon img {
  width: 20px;
  height: 20px;
}
</style>