<!--
 * @Description: 备注
 * @Author: 
 * @Date: 2019-10-16 11:09:02
 * @LastEditTime: 2019-10-17 20:47:19
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="remarksPicker">
    <div class='searchItem'>
    <img src="/static/images/beizhu.png" />
    <input placeholder="备注" v-model="inputValue" @input="inputHandle" @confirm="confirmHandle" />
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
      inputValue: "",
    };
  },
  methods: {
    inputHandle(e) {
      // console.log(e.mp.detail);
    },

    // 输入完成触发
    confirmHandle(e) {
      // console.log(this.inputValue);
      this.$emit('click', this.inputValue);
    }
  }
};
</script>

<style>
.remarksPickerview {
    display: flex;
    flex-direction: row;
    height: 98px;
    background: #efeff4;
    align-items: center;
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
}

.searchItem input {
    flex: 1;
    font-size: 32rpx;
}
</style>