<!--
 * @Description: "我的"----员工页面
 * @Author: Celine
 * @Date: 2019-10-09 11:02:29
 * @LastEditTime: 2019-10-24 17:22:41
 * @LastEditors: Wanlin Chen
 -->
<template>
  <div>
      <div class="user_info">
        <!-- 用户信息 -->
      <open-data class="userAvatarUrl" type="userAvatarUrl"></open-data>
      <div class="user_detail">
        <h4>
          <!-- <open-data type="userNickName"></open-data> -->
          {{nickName}}
        </h4>
        <span>{{country}} {{province}} {{city}}</span>
      </div>
    </div>        
    <div class="work_info">
        <div class="work_detail">
            <h4>总订单</h4>
            <span>12</span>
        </div>
        <div class="work_detail">
            <h4>总工时</h4>
            <span>12</span>
        </div>
        <div class="work_detail">
            <h4>本月工时</h4>
            <span>12</span>
        </div>
    </div>
    <div class="order_info">
        <mineCell @click="swithToallOrder"  icon="/static/images/icon/mine/我的订单.png" title="我的订单" ></mineCell>
        <mineCell @click="swithToEvaluate" icon="/static/images/icon/mine/评价.png" title="我的评价" ></mineCell>
        <mineCell @click="swithToTool" icon="/static/images/icon/mine/tool.png" title="我的工具" ></mineCell>
    </div>
    <div class="order_info">
        <mineCell icon="/static/images/icon/mine/用户协议.png" title="关于我们" ></mineCell>
    </div>
  </div>
</template>

<script>
import mineCell from "../../../components/mineCell/index";
export default {
    data(){
      return {
        nickName: "获取中...",
        country: "中国",
        province: "广东",
        city: "湛江"
      };
    },
      mounted() {
    /*********测试注释 */
    // this.nickName = this.$store.state.user.nickName;
    // this.country = this.$store.state.user.country;
    // this.province = this.$store.state.user.province;
    // this.city = this.$store.state.user.city;
  },
    methods:{
      swithToallOrder() {
        console.log(123);
        wx.navigateTo({
          url: "../../allorder/main"
        });
      },
      swithToEvaluate() {
      wx.navigateTo({
        url: "../../evaluate/main"
      });
    },
      swithToTool(){
      wx.navigateTo({
        url: "../../myTool/main"
      });      
    },    
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
.user_info .userAvatarUrl {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  display: flex;
  overflow: hidden;
  text-align: center;
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
</style>