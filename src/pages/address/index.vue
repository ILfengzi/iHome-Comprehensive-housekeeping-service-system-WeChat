<!--
 * @Description: 地址管理界面
 * @Author: Wanlin Chen
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-16 14:46:38
 * @LastEditors: Lin Changkun
 -->

<template>
  <div class="addresslist">
      <div class="address_info">
          <div class="user">
            <span>收货人：</span>
            <span class="user">celine  123456789</span>
          </div>
          <div class="address">
            <span>地址：</span>
            <span>xx市xx区xx路xx号</span>
          </div>
          <span class="icon">
              <img @click="showModal" class="cal" src="/static/images/icon/删除.png">
              <mp-toast value="true" type="success" v-model="showToast" content="删除成功" duration=20></mp-toast>
              <img class="mod" src="/static/images/icon/修改.png">
              <mp-modal ref="mpModal" title="提示" content="确定删除该地址？" :showCancel="true" @confirm="confirm" ></mp-modal>
          </span>  
      </div>
        <div class="btn">
          <button @click="switchToNewAddress" form-type="submit" type="primary" >新建</button>
        </div>         
  </div>
</template>

<script>
import mpToast from 'mpvue-weui/src/toast';
import mpButton from 'mpvue-weui/src/button';
import mpModal from 'mpvue-weui/src/modal';
export default {
    data(){

    },
    components: {
        mpToast,
        mpModal,
        mpButton
    },
    methods:{
        confirm(e){
            console.log(123);
            showToast();
        },
        showModal(){
            
            this.$refs.mpModal.show();
        },
        switchToNewAddress(){
            wx.navigateTo({
                url: '../newaddress/main'
            })
        },
        swithToOrder:function(){
            console.log(123)
            wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
            })
        }
    }
}
</script>

<style>
 .addresslist{
    position: relative;
    padding-bottom:50px;
}

.address_info{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20rpx 0 48rpx 24rpx;
    position: relative;
    margin-top:10px; 
    font-size: 16px;
    
}
.user{
    flex: 1;
}
.address{
    flex: 1;
}
.mod{
width: 66rpx;
height: 66rpx;
position: absolute;
top: 112rpx;
right: 78rpx;


} 
.cal{
width: 46rpx;
height: 46rpx;
position: absolute;
top: 120rpx;
right: 20rpx;

} 
.btn {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background-color:gray;
  z-index: 10;
}
</style>