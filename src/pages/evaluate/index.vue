<!--
/*
 * @Author: Wanlin Chen 
 * @Date: 2019-10-11 09:07:35 
 * @Last Modified by: Wanlin Chen
 * @Last Modified time: 2019-10-13 23:06:18
 */
-->
<template>
  <div class="evaluate"> 
    <div class="user_info" style="background:url('/../../static/images/评价背景.png')">
        <!-- 用户信息 -->
        <img src="../../../../static/images/logo.jpg" alt>
        <div class="user_detail">
            <h4>Celine</h4>
            <span>已贡献2条数据</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

/*抬头用户信息 */
.user_info {
  height: 30%;
  width: 100%;
  padding: 20px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.user_info img {
  width: 40px;
  height: 40px;
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
</style>