<!--
 * @Description: 填写评价页面
 * @Author: Celine
 * @Date: 2019-10-15 17:59:13
 * @LastEditTime: 2019-11-01 08:53:22
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="makeEval">
    <div class="quality">
      <div class="head">您对服务质量满意吗？</div>
      <mp-rate @rateClick="qualClick" :isSupportClick="true"></mp-rate>
    </div>
    <div class="attitude">
      <div class="head">您对服务人员满意吗？</div>
      <div class="att_Eval">
        <mp-rate @rateClick="attitudeClick" :isSupportClick="true"></mp-rate>
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
          v-model="describe"
        ></textarea>
      </div>
    </div>
    <div class="save">
      <button @click="submited" type="primary" size="large">提交</button>
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
      orderId: 3, //从前一个跳转页面获取
      quality: 0,
      attitude: 0,
      describe: "",
      // makeEval: {
      //   rateValue1: 0,
      //   rateValue2: 0
      // }
    };
  },
  // // 采用计算属性来让组件进行刷新
  // computed: {
  //   makeEval: function() {
  //     // `this` 指向 vm 实例
  //     return this.makeEval;
  //   }
  // },

  methods: {
    //评分点击事件
    attitudeClick(index) {
      console.log("shenqi:", index);
      this.attitude = index;
      // this.rateValue2 = index;
    },
    qualClick(index) {
      this.quality = index;
      // this.rateValue1 = index;
    },
    submited() {
      this.$https
        .request({
          url: this.$interfaces.setEvaluate,
          data: {
            attitude_valuation: this.attitude,
            // attitude_valuation: this.rateValue2,
            describe: this.describe,
            id: this.$store.state.orderId,
            quality_valuation: this.quality
            // quality_valuation: this.rateValue1
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log(res);
          // 成功，返回上一层
          wx.navigateBack({
            delta: 1,
            success: res => {
              console.log("初始化:");
              this.describe = "";
            }
          });
          // 告诉上一层要干掉这一个订单的评价按钮
          // const eventChannel = this.$mp.page.getOpenerEventChannel();
          // eventChannel.emit("makeEvalOver", { data: "true" });
        })
        .catch(err => {
          console.log(err);
        });
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
.weui-rate {
  margin-left: 85px;
}
.head {
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}
.inp {
  border-top: 1px solid #f4f4f4;
  height: 60px;
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