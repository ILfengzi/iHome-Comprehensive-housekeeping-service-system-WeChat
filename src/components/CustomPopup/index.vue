<!-- 
/*
 * @Author: Wanlin Chen 
 * @Date: 2019-10-13 14:59:05 
 * @Last Modified by: Wanlin Chen
 * @Last Modified time: 2019-10-13 15:44:39
 */
-->
<template>
    <div>
        <!-- 弹出层 -->
        <div :class="{'CustomPopup':showCustomPopup}" @click="maskClick"></div>
        <div class="CustomPopupContent " :class="{'CustomPopupContentShow':showCustomPopup}">
            <slot-scope name="PoperContent">
                <div class="title">具体规则</div>
                <div class="content">
                    1.订单服务时间前12-2小时取消订单，退还75%订单金额<br>
                    2.订单服务时间前2小时以内取消订单，退还50%订单金额<br>
                    3.下单时间15分钟内可以免费修改服务时间及取消订单，进入订单服务时间前6小时以内，将无法更改服务时间<br>
                    4.若是您的原因导致服务人员无法入户服务,服务人员在等待一小时后将自行离开视同订单完成服务，退还40%订单金额<br>
                    <span style="color:red">注：如果是本公司原因造成订单取消或者无法服务请点击订单售后服务，违约金扣除上限为150元每单</span>
                </div>
            </slot-scope>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               showCustomPopup: false,
            };
        },
        methods: {
            showCustom() {
                this.showCustomPopup = true;
            },
            maskClick() {
                this.showCustomPopup = false;
            }
        }
    }
</script>

<style scoped>
.CustomPopup {
    height: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
}
.PoperContent{
    width: 100%;
    height: 100px;
    
}

.CustomPopupContent {
    position: fixed;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease;
    transform: translateY(100%);
    z-index: 3000;
    height: 235px;
    background-color: white;
    padding: 20px 20px 0 20px;
}
.CustomPopupContent .title{
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
}
.CustomPopupContent .content{
    font-size: 12px;
    line-height: 22px;
}
.content span{
    border: none;
}
.CustomPopupContentShow {
    transform: translateY(0);
}
</style>