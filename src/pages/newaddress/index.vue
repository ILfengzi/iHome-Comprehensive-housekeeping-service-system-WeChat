<!--
 * @Description: 编辑地址页面
 * @Author: Wanlin Chen
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-21 15:30:12
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="newaddress" enctype="multipart/form-data">
    <form action="">
      <div class="form_group">
        <span>用户名：</span>
        <input
          name="username"
          placeholder="请输入您的名字"
          type="text"
          v-model="inputName"
          @focus="inputFocus"
        />
      </div>
      <div class="form_group">
        <span class="title">手机号码：</span>
        <input
          name="phone"
          type="number"
          placeholder="请输入您的手机号"
          v-model="inputPhone"
          @focus="inputFocus"
        />
      </div>
      <div class="form_group">
        <span class="title">所在地区：</span>
        <!-- <input v-model="formaddr.area" class="area"> -->
        <div :inputArea="inputArea" class="area">{{inputArea}}</div>
        <img
          class="btn"
          src="/static/images/icon/选择展开.png"
          @click="showMulLinkageTwoPicker"
        />
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
          v-model="inputDetail"
        ></textarea>
      </div>
      <div class="form_group defaultaddr">
        <span class="title">设为默认地址</span>
        <mp-switch :checkd="inputDefault" @change="switchChange"></mp-switch>
      </div>
      <div class="save">
        <button @click="submited" form-type="submit" type="primary" size="large">保存</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import mpButton from "mpvue-weui/src/button";
import mpSwitch from "mpvue-weui/src/switch";
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
      inputName:"",
      inputPhone:"",
      inputArea:"",
      inputDetail:"",
      inputProvince:"",
      inputCity:"",
      inputStatus:0
      // userAddress: {
      //   username: "",
      //   phone: "",
      //   area: "",
      //   detail: "",
      //   default: false
      // }
    };
  },
  methods: {
    submited:function(){
    this.$https
      .request({   
        url: this.$interfaces.setUserAddress,
        data: {
          userName:this.inputName,
          phone:this.inputPhone,
          userId:3, //目前写死，需要动态获取user_id
          province:this.inputProvince,
          city:this.inputCity,
          detail:this.inputDetail,
          status:this.inputStatus
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        method: "POST"
      })
      .then(res => {
        console.log(res);
        // 成功，刷新页面
        // this.userAddress = res.addressList;
        // console.log(this.userAddress);
      })
      .catch(err => {
        console.log(err);
      });
    },
    swithToaddress: function() {
      console.log(123);
      wx.navigateBack({
        delta: 1 // 回退前 delta(默认为1) 页面
      });
    },
    changContextL: function(e) {},
    showMulLinkageTwoPicker() {
      this.$refs.mpCityPicker.show();
    },
    onConfirm(e) {
      console.log(e);
      this.inputArea=e.label;
      var str=this.inputArea.split("-");
      console.log(str);
      this.inputProvince = str[0];
      this.inputCity = str[1];
    },
    switchChange(e) {
      console.log(e);
      console.log(typeof(e));
      if(e==true){
        console.log("!23");
        this.inputStatus = 2;
      }
    }
  }
};
</script>

<style>
.newaddress {
  height: 100%;
}

.form_group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0 0 10px;
  line-height: 95rpx;
  border-bottom: 1px solid #f4f4f4;
  background-color: #fff;
}

.form_group input,
textarea {
  width: 440rpx;
  /* border:1px solid #ddd; */
  /* border-radius:8rpx; */
  height: 60rpx;
  line-height: 60rpx;
  padding: 10rpx 20rpx;
  margin-right: 36px;
  word-wrap: break-word;
  word-break: break-all;
}
textarea {
  height: 120rpx;
}
.area {
  width: 440rpx;
  /* border:1px solid #ddd;
    border-radius:8rpx; */
  height: 112rpx;
  line-height: 60rpx;
  padding: 10rpx 20rpx;
  float: right;
}
img {
  width: 20px;
  height: 20px;
  float: right;
}
.defaultaddr {
  margin-top: 30px;
}
.save {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: none;
}
</style>