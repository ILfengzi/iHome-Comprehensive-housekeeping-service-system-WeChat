<!--
 * @Description: 工具列表的组件
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-24 19:57:11
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="page">
    <div class="weui-form-preview" >
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">订单号</div>
          <div class="weui-form-preview__value">{{myTool.id}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">服务名</div>
          <div class="weui-form-preview__value">{{myTool.detailtype.typename}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">工具id</div>
          <div class="weui-form-preview__value">{{myTool.iTool.id}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">工具名</div>
          <div class="weui-form-preview__value">{{myTool.iTool.tname}}</div>
        </div>
      </div>
    </div>
    <div class="btns">
      <button :class="{'hide':myTool.state!==2,'btn':true}">领取工具</button>
      <button :class="{'hide':myTool.state!==3,'btn':true,'return':true}">归还</button>
      <button :class="{'hide':myTool.state!==3,'btn':true,'broke':true}">损坏</button>
      <div :class="{'hide':myTool.state!==4}">已归还</div>
      <div :class="{'hide':myTool.state!==4}">已损坏</div>
    </div>
  </div>
</template>

<script>
import mpModal from "mpvue-weui/src/modal";
export default {
  data() {
    return {
      
    };
  },
  components: {
    mpModal
  },
  props: {
    myTool: Object,
    index:Number
  },
  computed: {},
  methods: {
    
  },
};
</script>

<style>
.page {
  /* margin-bottom: 10px; */
  background-color: white;
  margin-bottom: 100rpx;
}
.weui-form-preview__value {
  color: black;
}
.btns{
  padding:0;
  position: relative;
} 

.btn {
  width: 25%;
  font-size: 15px;
  margin-bottom: 0;
  margin-top: 10rpx;
  z-index: 3000;
  float: right;
  margin-left: 10rpx;
}
.return{
  margin-left: 10rpx;
}
.broke{
  margin-left: 10rpx;
}
</style>