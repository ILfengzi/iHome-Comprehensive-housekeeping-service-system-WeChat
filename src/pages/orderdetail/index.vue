<!--
 * @Description: 订单详情页面
 * @Author:Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-22 14:57:58
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="orderdetail" >
    <div class="state">
      <div v-if="orderDetail.state===0" class="order_state">
        <img src="/static/images/icon/orderdetail/tijiao.png" />已提交
      </div>
      <div v-else-if="orderDetail.state===1" class="order_state">
        <img src="/static/images/icon/orderdetail/del.png" />已取消
      </div>
      <div v-else-if="orderDetail.state===2" class="order_state">
        <img src="/static/images/icon/orderdetail/daifuwu01.png" />待服务
      </div>
      <div v-else-if="orderDetail.state===3" class="order_state">
        <img src="/static/images/icon/orderdetail/fuwuservice3.png" />服务中
      </div>
      <div v-else-if="orderDetail.state===4" class="order_state">
        <img src="/static/images/icon/orderdetail/yiwancheng.png" />已完成
      </div>
  </div>
    <div class="weui-form-preview">
      <div class="weui-form-preview__hd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">服务</div>
          <div class="weui-form-preview__value_in-hd">{{orderDetail.detailtype.typename}}</div>
        </div>
      </div>
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">付款金额</div>
          <div class="weui-form-preview__value">¥{{orderDetail.price}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">地址</div>
          <div class="weui-form-preview__value" >{{orderDetail.userDetail.province+orderDetail.userDetail.city+orderDetail.userDetail.detail}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">预约时间</div>
          <div class="weui-form-preview__value">{{orderDetail.startTime}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">用户</div>
          <div class="weui-form-preview__value">{{orderDetail.userDetail.username}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">用户电话</div>
          <div class="weui-form-preview__value">{{orderDetail.userDetail.phone}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">下单时间</div>
          <div class="weui-form-preview__value">{{orderDetail.orderTime}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">交易单号</div>
          <div class="weui-form-preview__value">{{orderDetail.id}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">完成时间</div>
          <div class="weui-form-preview__value">{{orderDetail.finalyTime}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">订单备注</div>
          <div class="weui-form-preview__value">{{orderDetail.comm}}</div>
        </div>
      </div>
      <div class="weui-form-preview__ft">
        <button
          class="weui-form-preview__btn weui-form-preview__btn_primary"
          hover-class="weui-form-preview__btn_active"
          @click="swithToOrder"
        >返回</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            orderDetail : this.$store.state.orderDetail
        }
    },
    onshow(){
      console.log("123"+this.orderDetail);
    },
    methods:{
    swithToOrder:function(){
      wx.navigateBack({
        delta: 1
      });
        }
    }
}
</script>

<style>
.state {
  line-height: 30px;
  background-color: #747474;
  padding: 5px 0 5px 13px;
}
.state .order_state img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.weui-form-preview {
  margin-top: 10px;
}
</style>