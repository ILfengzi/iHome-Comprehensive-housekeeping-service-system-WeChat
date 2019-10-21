<!--
 * @Description: 我的评价
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-21 15:50:45
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="evaluate">
    <div class="user_info" style="background:url('/static/images/评价背景.png')">
      <!-- 用户信息 -->
      <img src="/static/images/logo.jpg" alt />
      <div class="user_detail">
        <h4>Celine</h4>
        <span>已贡献{{num}}条数据</span>
      </div>
    </div>
    <!-- 评价列表 -->
    <div class="eva_list">
      <evaluateCell
        :detailType="evaluate.detailType"
        :quality="evaluate.quality"
        :attitude="evaluate.attitude"
        :describe="evaluate.describe"
        :time="evaluate.time"
      ></evaluateCell>
    </div>
  </div>
</template>

<script>
import evaluateCell from "../../components/evaluateCell/index";
export default {
  components: {
    evaluateCell
  },
  data() {
    return {
      num: 3, ////统计该用户评价表数据库中有多少条数据
      evaluate: {
        detailType: "服务名",
        quality: 3,
        attitude: 4,
        describe: "很好",
        time: "2019/10/14"
      }
    };
  },
  methods: {
    swithToOrder: function() {
      console.log(123);
      wx.navigateBack({
        delta: 1 // 回退前 delta(默认为1) 页面
      });
    }
  }
};
</script>

<style>
/*抬头用户信息 */
.user_info {
  height: 30%;
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user_info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
.user_detail h4 {
  margin: 20rpx 24rpx 0rpx;
}
.user_detail span {
  color: #aaa;
  font-size: 14px;
}
</style>