<!--
 * @Description: 测试页面（可仍各种组件）
 * @Author: 
 * @Date: 2019-10-26 19:57:54
 * @LastEditTime: 2019-10-27 17:11:14
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="test">
      <button @click="aa">点我</button>
    <div class="modal-mask" catchtouchmove="preventTouchMove" v-if="showModal"></div>
    <div class="modal-dialog" v-if="showModal">
      <div class="modal-title">请输入您的手机号码：</div>
      <div class="modal-content">
        <div class="modal-input">
          <input
            placeholder-class="input-holder"
            type="number"
            maxlength="11"
            class="input"
            v-model="phoneNumber"
            placeholder="请输入数量"
          />
        </div>
      </div>
      <div class="modal-footer">
        <div class="btn-cancel" @tap="onCancel" data-status="cancel">拒绝</div>
        <div class="btn-confirm" @click="onConfirm" data-status="confirm">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      phoneNumber: ""
    };
  },
  methods: {
    /**
     * 弹窗
     */
    aa(){
        this.showDialogBtn();
    },
    showDialogBtn() {
      this.showModal = true;
    },
    /**
     * 弹出框蒙层截断touchmove事件
     */
    preventTouchMove() {},
    /**
     * 对话框取消按钮点击事件
     */
    onCancel() {
      this.hideModal();
    },
    /**
     * 对话框确认按钮点击事件
     */
    onConfirm() {
      //输入完成
      console.log("输入完成");
      //校验手机号码
      this.isPoneAvailable(this.phoneNumber);
    },

    isPoneAvailable(phone) {
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(phone)) {
        wx.showToast({
          title: "请输入正确的手机号码",
          icon: "none",
          duration: 2000
        });
      } else {
        this.showModal = false;
      }
    }
  }
};
</script>

<style>
.show-btn {
  margin-top: 100rpx;
  color: #22cc22;
}

.modal-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  overflow: hidden;
  z-index: 9000;
  color: #fff;
}

.modal-dialog {
  width: 540rpx;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 9999;
  background: #f9f9f9;
  margin: -180rpx 105rpx;
  border-radius: 36rpx;
}

.modal-title {
  padding-top: 50rpx;
  font-size: 36rpx;
  color: #030303;
  text-align: center;
}

.modal-content {
  padding: 50rpx 32rpx;
}

.modal-input {
  display: flex;
  background: #fff;
  border: 2rpx solid #ddd;
  border-radius: 4rpx;
  font-size: 28rpx;
}


.input {
  width: 100%;
  height: 82rpx;
  font-size: 28rpx;
  line-height: 28rpx;
  padding: 0 20rpx;
  box-sizing: border-box;
  color: #333;
}

input-holder {
  color: #666;
  font-size: 28rpx;
}

.modal-footer {
  display: flex;
  flex-direction: row;
  height: 86rpx;
  border-top: 1px solid #dedede;
  font-size: 34rpx;
  line-height: 86rpx;
}

.btn-cancel {
  width: 50%;
  color: #666;
  text-align: center;
  border-right: 1px solid #dedede;
}

.btn-confirm {
  width: 50%;
  color: #ec5300;
  text-align: center;
}
</style>