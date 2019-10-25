<!--
 * @Description: 支付弹窗组件
 * @Author: Celine
 * @Date: 2019-10-23 20:09:07
 * @LastEditTime: 2019-10-24 10:23:26
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div>
    <div class="flex_Center backgroundViewStyle">
      <div
        data-index="1"
        class="flex_Center demoButtonStyle"
        style="margin-top:30rpx;"
        :tap="onClickButton"
      >居中></div>
    </div>
    <!-- <iframe :is="diaView" :data="showDialog:showDialog" />
    <iframe :is="diaCenterView" data="{{showCenterDialog:showCenterDialog}}" /> -->
  </div>
</template>

<script>
export default{
   data() {
     return{
      showDialog: false,
      showCenterDialog: false       
     }
  },
  onLoad(options) {
    
  },
  onShow() {
  
  },
  onClickButton(e){
    let that = this;
    switch(e.currentTarget.dataset.index){
      case '0':
        that.setData({
          showDialog: !this.data.showDialog
        });
        break;
      case '1':
        that.setData({
          showCenterDialog: !this.data.showCenterDialog
        });
        break;
    }
  },
  onClickdiaView(){
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  onClickdiaCenterViewn(){
    this.setData({
      showCenterDialog: !this.data.showCenterDialog
    });
  }

}
</script>

<style scoped>
.backgroundViewStyle{
  margin-top:30rpx;background:white;height:500rpx;flex-direction:column;border-top:1rpx solid #e5e5e5;
}
.demoButtonStyle{
  background-color:#3CB371;width:60%;height:100rpx;color:#fff;
}

.dialog_mask {
  position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;background: rgba(0, 0, 0, 0.5);display: none;
}
.dialog_container {
  position: fixed;bottom: 0;width: 750rpx;background: white;transform: translateY(150%);transition: all 0.4s ease;z-index: 11;
}
.dialog_show .dialog_container {
  transform: translateY(0);
}
.dialog_show .dialog_mask {
  display: block;
}

.dialog__mask {
  position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 10;background: rgba(0, 0, 0, 0.5);display: none;
}
.dialog__container {
  position: fixed;bottom: 0;width: 750rpx;transform: translateY(150%);transition: all 0.4s ease;z-index: 11;height:100%;
}
.dialog--show .dialog__container {
  transform: translateY(0);
}
.dialog--show .dialog__mask {
  display: block;
}
</style>