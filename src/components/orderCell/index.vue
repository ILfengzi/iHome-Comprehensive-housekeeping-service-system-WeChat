<!-- 
/*
 * @Author: Wanlin Chen 
 * @Date: 2019-10-08 17:01:41 
 * @Last Modified by: Wanlin Chen
 * @Last Modified time: 2019-10-08 21:03:27
 */
-->
<template>
    <div class="order_list">
        <img src="../../../static/images/logo.jpg">
        <span>{{title}}</span>
        <span class="time">
            下单时间：{{time}}
        </span>
    </div>
</template>

<script>

export default {
    props:{
        title:String,
        time:String
    }
}
</script>

<style>
 .order_list{
    padding: 5px 0 8px 16px;
    box-sizing: border-box;
    border-bottom: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    font-size: 16px;
    position: relative;
    font-family:Georgia, 'Times New Roman', Times, serif
} 
.order_list img{
    width: 40px;
    height: 40px;
    margin-right: 16px;
    float: left;
}
.order_list span{
    position: absolute;
    top: 20%;
}
.order_list .time{
    float: right;
    margin-right: 10px;
    font-size: 12px;
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>