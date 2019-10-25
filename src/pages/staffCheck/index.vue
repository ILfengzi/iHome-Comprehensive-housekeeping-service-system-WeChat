<!--
 * @Description: 员工认证
 * @Author: Celine
 * @Date: 2019-10-24 20:41:06
 * @LastEditTime: 2019-10-25 10:01:01
 * @LastEditors: Wanlin Chen
 -->
<template>
  <div class="check">
      <mp-input 
        placeholder="请输入员工口令" 
        v-model="inputValue" 
        @focus="inputFocus"
      ></mp-input>
  </div>
</template>

<script>
import mpInput from 'mpvue-weui/src/input';
export default {
  components: {
    mpInput,
  },
  data(){
    return{
      inputValue:String
    }
  }
}
</script>

<style>

</style>