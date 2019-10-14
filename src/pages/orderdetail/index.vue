<!--
 * @Description: 订单详情页面
 * @Author:Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-14 10:56:05
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="orderdetail">
    <div class="state">
      <div v-if="state===0" class="order_state">
        <img src="../../../static/images/icon/orderdetail/tijiao.png" />已提交
      </div>
      <div v-else-if="state===1" class="order_state">
        <img src="../../../static/images/icon/orderdetail/del.png" />已取消
      </div>
      <div v-else-if="state===2" class="order_state">
        <img src="../../../static/images/icon/orderdetail/daifuwu01.png" />待服务
      </div>
      <div v-else-if="state===3" class="order_state">
        <img src="../../../static/images/icon/orderdetail/fuwuservice3.png" />服务中
      </div>
      <div v-else-if="state===4" class="order_state">
        <img src="../../../static/images/icon/orderdetail/yiwancheng.png" />已完成
      </div>
  </div>
    <div class="weui-form-preview">
      <div class="weui-form-preview__hd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">服务</div>
          <div class="weui-form-preview__value_in-hd">{{service}}</div>
        </div>
      </div>
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">付款金额</div>
          <div class="weui-form-preview__value">¥{{price}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">地址</div>
          <div class="weui-form-preview__value" >{{detail}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">预约时间</div>
          <div class="weui-form-preview__value">{{price}}</div>
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
          <div class="weui-form-preview__value">{{ordertime}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">交易单号</div>
          <div class="weui-form-preview__value">{{orderId}}</div>
        </div>
        <div class="weui-form-preview__item">
          <div class="weui-form-preview__label">完成时间</div>
          <div class="weui-form-preview__value">{{finalytime}}</div>
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
            state:2,
            service:String,
            price:String,
            detail:String,
            phone:String,
            orderId:String,
            starttime:String,
            ordertime:String,
            finalytime:String,
            comm:String,
            username:String
        }
    },
    methods:{
        swithToOrder:function(){
            wx.switchTab({
                url: '../order/main'
            })
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