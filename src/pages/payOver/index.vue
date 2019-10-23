<!--
 * @Description: 支付完成页
 * @Author: 
 * @Date: 2019-10-20 11:58:49
 * @LastEditTime: 2019-10-23 17:39:14
 * @LastEditors: Wanlin Chen
 -->
<template>
  <div class="payOver">
    <div class="icon">
      <icon type="success" size="40"/>
      <div class="tips">支付成功</div>      
    </div>
    <div class="price">￥0.01</div>
    <div class="info">
      <div class="little">收款方</div>
      <div><img src="/static/images/logo.jpg"></div>
      <div class="name">ihome</div>      
    </div>
    <button type="primary">完成</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.payOver{
  text-align:center;
  background-color: white;
  height:100%;
}
.icon{
  margin-bottom: 55px;
  padding-top: 45px;
}
.info{
  margin-bottom: 50px;
}
.info img{
  width: 64px;
  height: 114rpx;
  border-radius: 10%;
  margin-bottom: 5px;
}
.little{
  color: slategrey;
  size: 16px;
  margin-bottom: 5px;
}
.name{
  size:20px;
  font-weight: bold;
}
.tips{
  color: #09BB07;
  font-size: 20px;
}
.price{
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 45px;
}
button{
  border: 1px solid #09BB07;
  width: 40%;
}
</style>