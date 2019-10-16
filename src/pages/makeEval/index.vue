<!--
 * @Description: 填写评价页面
 * @Author: Celine
 * @Date: 2019-10-15 17:59:13
 * @LastEditTime: 2019-10-16 16:58:38
 * @LastEditors: Wanlin Chen
 -->
<template>
  <div class="makeEval">
    <div class="serviceInfo">
      <img src="/static/images/logo.jpg" alt />
      <div class="user_detail">
        <h4>{{evaluate.detailType}}</h4>
      </div>
    </div>
    <div class="quality">
      <div class="head">您对服务质量满意吗？</div>

      <mp-rate @rateClick="qualClick" :isSupportClick="true"></mp-rate>
    </div>
    <div class="attitude">
      <div class="head">您对服务人员满意吗？</div>
      <div class="att_Eval">
        <mp-rate @rateClick="attClick" :isSupportClick="true"></mp-rate>
      </div>
    </div>

    <div class="describe">
      <div class="head">您对服务/我司有什么建议吗？</div>
      <div class="inp">
        <textarea
          placeholder="请输入您对我们服务的详细评价"
          maxlength="150"
          autofocus="true"
          v-bind="changContext"
          v-model="evaluate.describe"
        ></textarea>
      </div>
    </div>
    <div class="save">
      <button form-type="submit" type="primary" size="large">保存</button>
    </div>
  </div>
</template>

<script>
import mpRate from "mpvue-weui/src/rate";
export default {
  components: {
    mpRate
  },
  data() {
    return {
      evaluate: {
        detailType: "日常清洁",
        quality: Number,
        attitude: Number,
        describe: String,
        time: String
      }
    };
  },

  methods: {
    //评分点击事件
    rateClick(index) {
      this.evaluate.attitude = index;
    },
    qualClick(index) {
      this.evaluate.quality = index;
    }
  }
};
</script>

<style>
.pic {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.attitude,
.quality,
.describe {
  margin: 0 10px 10px 10px;
  background-color: white;
  padding: 10px;
}
.staffInfo,
.serviceInfo {
  border-radius: 10%;
  background-color: #ebeef5;
  padding: 5px 15px;
  margin: 2px 55px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
  display: flex;
  flex-direction: row;
}
.staffInfo img,
.serviceInfo img {
  width: 35px;
  height: 35px;
  margin-right: 20px;
  border-radius: 50%;
  /* margin-right: 20px;
  margin-left: 105px; */
}
.weui-rate {
  margin-left: 100px;
}
.head {
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}
.inp {
  border-top: 1px solid #f4f4f4;
}
textarea {
  height: 120rpx;
  margin: 10px;
}
.save {
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: none;
}
</style>