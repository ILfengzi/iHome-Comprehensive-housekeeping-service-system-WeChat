<!-- 
/*
 * @Author: Wanlin Chen 
 * @Date: 2019-10-11 16:22:10 
 * @Last Modified by: Wanlin Chen
 * @Last Modified time: 2019-10-13 18:05:24
 */
-->
<template>
  <div class="newaddress">
         <div class="form_group">
          <span>用户名：</span>
            <input name="name" placeholder="请输入您的名字" type="text" v-model="formaddr.name"  @focus="inputFocus" />
        </div>
        <div class="form_group">
            <span class="title">手机号码：</span>
            <input name="phone" type="number" placeholder="请输入您的手机号" v-model="formaddr.phone"  @focus="inputFocus" />
        </div>
        <div class="form_group">
          <span class="title">所在地区：</span>
          <!-- <input v-model="formaddr.area" class="area"> -->
          <div v-model="formaddr.area" class="area">{{inputValue}}</div>
          <img class="btn" src="../../../static/images/icon/选择展开.png"  @click="showMulLinkageTwoPicker" >
          <mp-citypicker
              ref="mpCityPicker"
              :deepLength="deepLength"
              :pickerValueDefault="pickerValueDefault"
              @onChange="onChange"
              @onCancel="onCancel"
              @onConfirm="onConfirm"
            ></mp-citypicker>
        </div> 
        <div class="form_group">
          <span class="title">详细地址：</span>
          <!-- <input class="addr" placeholder="如道路、门牌号、小区、楼层等信息"> -->
          <textarea 
              placeholder="如道路、门牌号、小区、楼层等信息"
              maxlength="50"
              autofocus="true"
              v-bind="changContext"
              v-model="formaddr.detail"
          ></textarea>
        </div>
        <div class="form_group defaultaddr">
          <span class="title">设为默认地址</span>
          <mp-switch :checkd="formaddr.default" @change="switchChange"></mp-switch>
        </div>
        <div class="save">
          <button form-type="submit" type="primary" size="large" >保存</button>
        </div>
        
    </form>
  </div>
</template>

<script>
import mpButton from 'mpvue-weui/src/button';
import mpSwitch from 'mpvue-weui/src/switch';
import mpCitypicker from "mpvue-weui/src/city-picker";
export default {
  components: {
    mpCitypicker,
    mpSwitch,
    mpButton
  },
  data() {
    return {
      mode: "multiLinkageSelector",
      deepLength: 3,
      pickerValueDefault: [1, 0],
      inputValue: "",
      formaddr:{
        "username":"",
        "phone":"",
        "area":"",
        "detail":"",
        "default":false
      }
    };
  },
  methods: {
          swithToaddress:function(){
            console.log(123)
            wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
            })
        },
    changContextL:function(e){

    },
    showMulLinkageTwoPicker() {
      this.$refs.mpCityPicker.show();
    },
    onConfirm(e) {
      console.log(e);
      this.inputValue = e.label;
      this.formaddr.area = this.inputValue;
    },
    switchChange(e){
      console.log(e);
      this.formaddr.default = e;
    }
    // },
    // onChange(e) {
    //   console.log(e);
    // },
    // onCancel(e) {
    //   console.log(e);
    // }
  }
};
</script>

<style>
 .newaddress {
    height: 100%;
}

.form_group{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin:5px 0 0 10px;
  line-height: 95rpx;
  border-bottom: 1px solid #f4f4f4;
  background-color: #fff;
}

.form_group input,textarea{
    width:440rpx;
    /* border:1px solid #ddd; */
    /* border-radius:8rpx; */
    height:60rpx;
    line-height: 60rpx;
    padding:10rpx 20rpx;
    margin-right: 36px;    
    word-wrap:break-word;
    word-break:break-all;
}
textarea{
    height:120rpx;
}
.area{
    width:440rpx;
    /* border:1px solid #ddd;
    border-radius:8rpx; */
    height:60rpx;
    line-height: 60rpx;
    padding:10rpx 20rpx;
    float:right;
}
img{
  width:20px;
  height: 20px;
  float: right;
}
.defaultaddr{
  margin-top: 30px;
}
.save{
  position:fixed; 
  bottom:0; 
  width: 100%;
  border-radius: none;
}
</style>