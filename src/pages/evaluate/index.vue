<!--
 * @Description: 我的评价
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-14 15:13:37
 * @LastEditors: Wanlin Chen
 -->

<template>
<div class="evaluate">
    <div class="user_info" style="background:url('/static/images/评价背景.png')">
      <!-- 用户信息 -->
      <img src="/static/images/logo.jpg" alt />
      <div class="user_detail">
        <h4>Celine</h4>
        <span>已贡献2条数据</span>
      </div>
    </div>/
    <!-- 评价列表 -->
    <div class="eva_list">
      <div class="weui-form-preview">
        <div class="weui-form-preview__hd">
          <div class="weui-form-preview__item">
            <div class="weui-form-preview__label">服务</div>
            <div class="weui-form-preview__value_in-hd">{{evaluate.detailType}}</div>
          </div>
        </div>
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item">
            <div class="weui-form-preview__label">服务质量评分</div>
            <div class="weui-form-preview__value">{{evaluate.quality}}</div>
          </div>
          <div class="weui-form-preview__item">
            <div class="weui-form-preview__label">服务态度评分</div>
            <div class="weui-form-preview__value">{{evaluate.attitude}}</div>
          </div>
          <div class="weui-form-preview__item">
            <div class="weui-form-preview__label">文字评价</div>
            <div class="weui-form-preview__value">{{evaluate.attitude}}</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      evaluate:{
        detailType:"服务名",
        quality:"3",
        attitude:"4",
        describe:"很好"
      }
      
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