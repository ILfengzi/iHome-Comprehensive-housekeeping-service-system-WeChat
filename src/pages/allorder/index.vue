<!--
 * @Description: 
 * @Author: chen wanlin
 * @Date: 2019-10-14 10:14:28
 * @LastEditTime: 2019-10-14 10:19:37
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="allorder">
      <mp-searchbar :isFocus=true :inputValue="inputValue" :placeholder="placeholder" @input="input" @blur="blur" @focus="focus" @confirm="confirm"></mp-searchbar>
      <div class="list">
        <orderCell title="清洁" time="2019/10/09"></orderCell>
        <orderCell title="清洁" time="2019/10/09"></orderCell>
      </div>
  </div>
</template>

<script>
import orderCell from "../../components/orderCell/index";
import mpSearchbar from 'mpvue-weui/src/searchbar';
export default {
    components: {
        mpSearchbar,
        orderCell
    },
    data(){
       
    },
    methods:{
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

</style>