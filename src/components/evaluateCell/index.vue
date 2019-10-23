<!--
 * @Description: "我的评价" 评价列表组件
 * @Author: Celine
 * @Date: 2019-10-15 09:33:29
 * @LastEditTime: 2019-10-22 09:29:30
 * @LastEditors: Wanlin Chen
 -->
<template>
  <div class="weui-form-preview">
    <div class="weui-form-preview__hd">
      <div class="weui-form-preview__item">
        <div class="weui-form-preview__label">服务</div>
        <div class="weui-form-preview__value_in-hd">{{evaluateList.detailtype.typename}}</div>
      </div>
    </div>
    <div class="weui-form-preview__bd">
      <div class="weui-form-preview__item">
        <div class="weui-form-preview__label">服务质量评分</div>
        <div class="weui-form-preview__value">
          <mp-rate :rateValue="evaluateList.qualityValuation"  @rateClick="rateClick"></mp-rate>
        </div>
      </div>
      <div class="weui-form-preview__item">
        <div class="weui-form-preview__label">服务态度评分</div>
        <div class="weui-form-preview__value">
          <mp-rate :rateValue="evaluateList.attitudeValuation"   @rateClick="rateClick"></mp-rate>
        </div>
      </div>
      <div class="weui-form-preview__item">
        <div class="weui-form-preview__label">文字评价</div>
        <div class="weui-form-preview__value">{{evaluateList.eDescribe}}</div>
      </div>
      <div class="weui-form-preview__item">
        <div class="weui-form-preview__label">评价时间</div>
        <div class="weui-form-preview__value">{{evaluateList.finallytime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import mpRate from "mpvue-weui/src/rate";
export default {
  props: {
    evaluateList:Object
  },
  components: {
    mpRate
  },
  methods: {
    /**评分点击返回分值***/
    rateClick(e) {
      if (this.evaluate.quality != null) {
        this.evaluate.quality = e + 1;
        this.rateValue = this.evaluate.quality;
        console.log(this.evaluate.quality);
      }
    }
  }
};
</script>

<style>
/*********评价列表**********/

.weui-form-preview{
    margin-bottom: 10px;
}
.weui-form-preview__value image {
  width: 20px;
  height: 20px;
  float: right;
}
.weui-form-preview__label.footer {
  border-top: 0.5px solid rgb(209, 208, 208);
}
</style>