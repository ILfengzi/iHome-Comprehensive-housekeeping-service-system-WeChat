<!--
 * @Description: 订单详情页面
 * @Author:Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-31 17:16:31
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="orderdetail" >
    <div class="state">
      <div v-if="state===0" class="order_state">
        <img src="/static/images/icon/orderdetail/tijiao.png" />已提交
      </div>
      <div v-else-if="state===1" class="order_state">
        <img src="/static/images/icon/orderdetail/del.png" />已取消
      </div>
      <div v-else-if="state===2" class="order_state">
        <img src="/static/images/icon/orderdetail/daifuwu01.png" />待服务
      </div>
      <div v-else-if="state===3" class="order_state">
        <img src="/static/images/icon/orderdetail/fuwuservice3.png" />服务中
      </div>
      <div v-else-if="state===4||state===6" class="order_state">
        <img src="/static/images/icon/orderdetail/yiwancheng.png" />已完成
      </div>
  </div>
    <div class="weui-form-preview">
      <div class="weui-form-preview__hd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">服务</div>
          <div class="weui-form-preview__value_in-hd">{{typename}}</div>
        </div>
      </div>
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">付款金额</div>
          <div class="weui-form-preview__value">¥{{price}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">地址</div>
          <div class="weui-form-preview__value" >{{province+city+detail}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">预约时间</div>
          <div class="weui-form-preview__value">{{startTime}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">用户</div>
          <div class="weui-form-preview__value">{{username}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">用户电话</div>
          <div class="weui-form-preview__value">{{phone}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">下单时间</div>
          <div class="weui-form-preview__value">{{orderTime}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">交易单号</div>
          <div class="weui-form-preview__value">{{id}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">完成时间</div>
          <div class="weui-form-preview__value">{{finalyTime}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">订单备注</div>
          <div class="weui-form-preview__value">{{comm}}</div>
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
            orderDetail : undefined,
            state: null,
            typename: null,
            price: null,
            province: null,
            city: null,
            detail: null,
            orderTime: null,
            id: null,
            startTime: null,
            username: null,
            finalyTime: null,
            phone: null,
            comm:null
        }
    },
    mounted(){
      this.orderDetail =  this.$store.state.orderDetail;
      this.state = this.orderDetail.state;
      this.typename = this.orderDetail.detailtype.typename;
      this.price = this.orderDetail.price;
      this.province = this.orderDetail.userDetail.province;
      this.city = this.orderDetail.userDetail.city;
      this.detail = this.orderDetail.userDetail.detail;
      this.orderTime = this.orderDetail.orderTime;
      this.id = this.orderDetail.id;
      this.startTime = this.orderDetail.startTime;
      this.username = this.orderDetail.userDetail.username;
      this.finalyTime = this.orderDetail.finalyTime;
      this.phone = this.orderDetail.userDetail.phone;
      this.comm = this.orderDetail.comm;
      console.log(this.orderDetail);
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