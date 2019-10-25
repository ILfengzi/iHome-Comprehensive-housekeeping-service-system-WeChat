<!--
 * @Description: 工具列表的组件
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-25 20:37:34
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div :class="{'page':true,'bpage':myTool.state===0||myTool.state===1}">
    <div class="weui-form-preview" >
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">订单号</div>
          <div class="weui-form-preview__value">{{myTool.iOrder.id}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">服务名</div>
          <div class="weui-form-preview__value">{{myTool.iDetailtype.typename}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">工具id</div>
          <div class="weui-form-preview__value">{{myTool.toolId}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">工具名</div>
          <div class="weui-form-preview__value">{{myTool.iTool.tname}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">工具状态</div>
          <div class="weui-form-preview__value">{{result}}</div>
        </div>
      </div>
    </div>
    <div class="btns">
      <button @click="take" :class="{'hide':myTool.state!==0,'btn':true}">领取工具</button>
      <button @click="isReturn" :class="{'hide':myTool.state!==1,'btn':true,'return':true}">归还</button>
      <button @click="broke" :class="{'hide':myTool.state!==1,'btn':true,'broke':true}">损坏</button>
    </div>
  </div>
</template>

<script>
import mpModal from "mpvue-weui/src/modal";
export default {
  data() {
    return {
      result: ''
    };
  },
  components: {
    mpModal
  },
  props: {
    myTool: Object,
    index:Number
  },
  mounted(){
    if(this.myTool.state === 2){
      this.result = '已归还';
    }else if(this.myTool.state ===3){
      this.result = '已损坏';
    }
  },
  computed: {},
  methods: {
    take(e){
      console.log(this.myTool);
      this.$emit("isTake",this.myTool.staffId,this.myTool.iOrder.id,this.index);
    },
    isReturn(e){
      console.log("归还");
      console.log(this.myTool);
      this.$emit("isReturn",this.myTool.staffId,this.myTool.iOrder.id,this.index);
    },
    broke(e){
      console.log("损坏");
      console.log(this.myTool);
      this.$emit("isDam",this.myTool.staffId,this.myTool.iOrder.id,this.index);
    }
  },
};
</script>

<style>
.page {
  /* margin-bottom: 10px; */
  background-color: white;
  margin-bottom: 24rpx;
}
.bpage{
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