<!--
 * @Description: “我的” -- 用户
 * @Author: Wanlin Chen
 * @Date: 2019-10-09 11:02:29
 * @LastEditTime: 2019-10-21 09:40:58
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="mine">
    <div class="user_info">
        <!-- 用户信息 -->
        <img src="/static/images/logo.jpg" alt>
        <div class="user_detail">
            <h4>Celine</h4>
            <span>13202019516</span>
        </div>
    </div>
    <div class="order_info">
        <mineCell @click="swithToallOrder" icon="/static/images/icon/mine/我的订单.png" title="我的订单" ></mineCell>
        <mineCell @click="swithToaddress" icon="/static/images/icon/mine/地址.png" title="我的地址"></mineCell>
        <mineCell @click="swithToEvaluate" icon="/static/images/icon/mine/评价.png" title="我的评价" ></mineCell>
    </div>
    <!-- <div class="order_info">
        <mineCell icon="/static/images/icon/mine/联系客服.png" title="联系客服" ></mineCell>
        
    </div> -->
 
    <div class="order_info">
        <mineCell icon="/static/images/icon/mine/用户协议.png" title="关于我们" ></mineCell>
    </div>
    <div class="contact"><button open-type="contact" bindcontact="handleContact">联系客服</button></div>
  </div>

</template>

<script>
import mineCell from "../../../components/mineCell/index";
export default {
    data(){

    },
    methods:{
      handleContact (e) {
        console.log(e.detail.path)
        console.log(e.detail.query)
      },
      swithToallOrder(){
        console.log(123)
        wx.navigateTo({
          url: '../../allorder/main'
        })
      },
      swithToEvaluate(){
        wx.navigateTo({
          url: '../../evaluate/main'
        })
      },
      swithToaddress(){
        wx.navigateTo({
          url: '../../address/main'
        })
      }
    },
    components:{
        mineCell
    }

}
</script>

<style>
.user_info {
  background-color: #fff;
  padding: 8px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
  display: flex;
  flex-direction: row;
}
.user_info img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}
.user_detail h4 {
  margin: 10px 0;
  font-weight: bold;
}
.user_detail span {
  color: #aaa;
  font-size: 14px;
}
.work_info {
  padding: 10px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
}
.work_info .work_detail {
  text-align: center;
  flex: 1;
}
.work_info span {
  color: #aaa;
  font-size: 14px;
}

.order_info {
  margin-top: 16px;
}
.contact{
  margin-top: 60px;
}
</style>