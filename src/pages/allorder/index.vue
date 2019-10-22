<!--
 * @Description: 全部订单页面
 * @Author: Wanlin Chen
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-22 10:52:12
 * @LastEditors: Wanlin Chen
 -->
<template>
  <div class="allorder">
      <mp-searchbar :isFocus="true" :inputValue="inputValue" :placeholder="placeholder" @input="input" @blur="blur" @focus="focus" @confirm="confirm"></mp-searchbar>
      <div v-for="(item,index) in allOrderList" :key="index">
        <orderCell :allOrderList="item"></orderCell>
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
       return{
           temp:2, //用户类型 1为员工 2为客户
           allOrderList:null
       }
    },
      onShow() {
     console.log("成功加载");        
    this.$https
      .request({   
        url: this.$interfaces.getOrderlistByid,
        data: {
          userid: 1, //输入值
          temp:2, //用户类型 1为员工，2为普通用户
          state:7
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        method: "POST"
      })
      .then(res => {
        console.log(res);
        // 成功，刷新页面
        this.allOrderList = res.iOrderList;
      })
      .catch(err => {
        console.log(err);
      });
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