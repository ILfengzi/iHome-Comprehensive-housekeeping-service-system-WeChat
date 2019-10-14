<<<<<<< HEAD
<<<<<<< Updated upstream
=======
<!--
 * @Author: Wanlin Chen 
 * @Date: 2019-10-08 08:19:28 
 * @Last Modified by:   Wanlin Chen 
 * @Last Modified time: 2019-10-08 08:19:28 
 */
-->
<template>
  <div class="mine">
    <div class="user_info">
        <!-- 用户信息 -->
        <img src="../../../../static/images/logo.jpg" alt>
        <div class="user_detail">
            <h4>Celine</h4>
            <span>13202019516</span>
        </div>
    </div>
    <div class="work_info">
        <!-- 工时信息 -->
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
        <mineCell icon="/static/images/icon/mine/我的订单.png" title="我的订单" :text="88"></mineCell>
        <mineCell icon="/static/images/icon/mine/评价.png" title="我的评价" :text="19"></mineCell>
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

    },
    methods:{

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




</style>
>>>>>>> Stashed changes
=======
<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-05 00:38:41
 * @LastEditTime: 2019-10-05 00:38:41
 * @LastEditors: Lin Changkun
 -->
<template>
    <div class="aa">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
>>>>>>> 825285f09a7bb290c4f0055576f818f0006e5de7
