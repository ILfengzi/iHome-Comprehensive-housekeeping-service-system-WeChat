<!--
 * @Description: 备注
 * @Author: Lin Changkun
 * @Date: 2019-10-16 11:09:02
 * @LastEditTime: 2019-10-31 10:51:00
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="remarksPicker">
    <div class="searchItem">
      <img src="/static/images/beizhu.png" />
      <input
        placeholder="备注"
        v-model="inputValue"
        @input="inputHandle"
        @confirm="confirmHandle"
        @blur="losefocus"
      />
    </div>
  </div>
</template>

<script>
import mpPicker from "mpvue-weui/src/picker";

export default {
  components: {
    mpPicker
  },
  data() {
    return {
      inputValue: ""
    };
  },

  mounted() {
    // 初始化，尝试清除缓存
    this.inputValue = " ";
  },

  methods: {
    inputHandle(e) {
      // console.log(e.mp.detail);
    },

    // 输入完成触发
    confirmHandle(e) {
      console.log(this.inputValue);
      this.$emit("click", this.inputValue);
    },
    //输入框失去焦点时触发
    losefocus(e) {
      console.log(this.inputValue);
      this.$emit("click", this.inputValue);
    }
  }
};
</script>

<style>
.remarksPicker {
  margin-top: 20rpx;
  /* display: flex; */
  /* flex-direction: row; */
  /* height: 98px; */
  /* background: #efeff4; */
  /* align-items: center; */
}

.searchItem {
  display: flex;
  width: 93%;
  background: #fff;
  flex-direction: row;
  border-radius: 10rpx;
  margin-right: 20rpx;
  margin-left: 20rpx;
}

.searchItem image {
  height: 42rpx;
  width: 42rpx;
  align-self: center;
  margin-left: 10rpx;
  margin-right: 20rpx;
  margin-top: -12rpx;
}

.searchItem input {
  flex: 1;
  font-size: 34rpx;
  padding-bottom: 20rpx;
}
</style>