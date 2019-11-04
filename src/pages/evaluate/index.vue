<!--
 * @Description: 我的评价
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-11-04 09:45:10
 * @LastEditors: Lin Changkun
 -->

<template>
  <div class="evaluate">
    <div class="user_info" style="background:url('/static/images/pingjiabeijing.png')">
      <!-- 用户信息 -->
      <img src="/static/images/logo.jpg" alt />
      <div class="user_detail">
        <h4>iHome</h4>
        <span>已贡献{{length}}条数据</span>
      </div>
    </div>
    <!-- 评价列表 -->
    <div class="eva_list">
      <div v-for="(item,index) in evaluateList" :key="index">
        <evaluateCell
          :evaluateList="item"
        ></evaluateCell>        
      </div>

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
      length: Number, ////统计该用户评价表数据库中有多少条数据
      evaluateList:null
    };
  }, 
  onShow() {
     console.log("成功加载");        
    this.$https
      .request({   
        url: this.$interfaces.getEvaluate,
        data: {
          temp: this.$store.state.position,//注意!!正式用
          userid: this.$store.state.fakeId, //注意!!正式用
          // userid: 3, //输入值       
          // temp:4 //用户类型 1为员工，4为普通用户
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        method: "POST"
      })
      .then(res => {
        console.log(res);
        // 成功，刷新页面
         this.evaluateList = res.iEvaluateList;
         this.length = this.evaluateList.length;
         console.log(this.evaluateList);
      })
      .catch(err => {
        console.log(err);
      });
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