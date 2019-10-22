<!--
 * @Description: 填写评价页面
 * @Author: Celine
 * @Date: 2019-10-15 17:59:13
 * @LastEditTime: 2019-10-21 20:56:23
 * @LastEditors: Wanlin Chen
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
          v-model="describe"
        ></textarea>
      </div>
    </div>
    <div class="save">
      <button @click="submited"  type="primary" size="large">保存</button>
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
        detailType: "日常清洁",
        quality: "",
        attitude: "",
        describe: ""  
    };
  },
  methods: {
    //评分点击事件
    rateClick(index) {
      this.attitude = index;
    },
    qualClick(index) {
      this.quality = index;
    },
  submited:function(){
    this.$https
      .request({   
        url: this.$interfaces.setEvaluate,
        data: {
          attitude_valuation:this.attitude,
          e_describe:this.describe,
          id:3, //目前写死，需要动态获取order_id
          quality_valuation:this.quality,
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        method: "POST"
      })
      .then(res => {
        console.log(res);
        // 成功，刷新页面
        // this.userAddress = res.addressList;
        // console.log(this.userAddress);
      })
      .catch(err => {
        console.log(err);
      });
    },
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
  margin-left: 100px;
}
.head {
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}
.inp {
  border-top: 1px solid #f4f4f4;
  height:60px;
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