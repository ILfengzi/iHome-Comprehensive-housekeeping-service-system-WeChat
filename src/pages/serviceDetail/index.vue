<!--
 * @Description: 服务详情页面
 * @Author: Celine
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-14 11:00:21
 * @LastEditors: Wanlin Chen
 -->

 <template>
  <div class="serviceDetail">
    <img src="../../../static/images/日常保洁.jpg" mode="center" />
    <div class="head">
      <div class="nameAndPrice">
        <div class="title">
          <span>类型</span>
          <span>服务价格</span>
        </div>
        <div class="content">
          <span>{{name}}</span>
          <span style="color:red;">{{price}}</span>
        </div>
      </div>
      <div class="warmtag">
        <div class="text">温馨提示：</div>
        <div class="text">
          1.以上为参考市场，请您根据自家的洁净程度以及具体户型来合理安排时间
          <br />2.服务仅限室内进行，不提供室外作业服务，外窗不在服务范围内
        </div>
      </div>
    </div>
    <div class="body">
      <div class="calOrder">
        <div class="explainHead">
          取消订单说明
          <span class="caldetail" @click="showCustomPopupClick">详细规则>></span>
        </div>
        <div class="explain">
          为保障您与家政服务人员的时间效益，如您支付下单超过15分钟且在订单服务开始前12小时以内
          取消订单，将扣取一定比例的预付款作为违约金，恳请您的谅解。
        </div>
      </div>
      <CustomPopup ref="CustomPopupRef">
        <div  class="PoperContentView"></div>
      </CustomPopup>
    </div>
    <div class="foot">
      <div class="contentAndStandard">
        <div class="foot_content">
          <div class="foot_content_title">服务项目</div>
          <div class="foot_content_body">{{content}}</div>
        </div>
        <div class="foot_standard">
          <div class="foot_standard_title">服务标准</div>
          <div class="foot_standard_body">{{standard}}</div>
        </div>
      </div>
      <div class="comm">
        注明：
        <br />
        {{comm}}
      </div>
    </div>
    <div class="btn">
      <button type="primary">预约</button>
    </div>
  </div>
</template>
 
 <script>
import CustomPopup from "../../components/CustomPopup/index";

export default {
  components: {
    CustomPopup
  },
  data() {
    return {
      name: "日常保洁",
      price: 12,
      content: "厨房、阳台、卫生间、客厅、卧室、等等等等",
      standard: "把啦啦啦啦、把啦啦啦啦、把啦啦啦啦",
      comm:
        "我是一个备注我是一个备注我是一个备注我是一个备注我是一个备注我是一个备注我是一个备注我是一个备注"
    };
  },
  methods: {
    showCustomPopupClick() {
      this.$refs.CustomPopupRef.showCustom();
    },
    closerButton() {
      this.$refs.CustomPopupRef.maskClick();
    }
  }
};
</script>
 
 <style>
.head {
  background-color: #fff;
}
.serviceDetail{
    padding-bottom:50px;
}
.serviceDetail img {
  width: 100%;
  height: 155px;
}
/*******************************/
.nameAndPrice {
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 10px;
  text-align: center;
}
.nameAndPrice .title {
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: rgb(209, 208, 208);
}
.nameAndPrice .content {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.title span {
  flex: 1;
  border: 1px solid rgb(209, 208, 208);
  padding: 8px 0 8px 0;
}
.content span {
  flex: 1;
  border: 1px solid rgb(209, 208, 208);
  padding: 8px 0 8px 0;
  text-align: center;
  border-left: none;
}
.warmtag {
  margin: 10px;
}
.warmtag .text {
  font-size: 13px;
  color: gray;
  line-height: 20px;
}
/*******************************/
.body {
  background-color: #fff;
}
.calOrder {
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: 14px;
  margin-right: 0rpx;
}
.calOrder .explainHead {
  flex: 1;
  background-color: rgb(209, 208, 208);
  margin: 10px 10px 0 0;
  padding: 10px;
}
.caldetail {
  float: right;
  color: red;
}
.calOrder .explain {
  flex: 2;
  margin: 0px 10px 10px 0;
  font-size: 12px;
  color: gray;
  padding: 10px;
  border: 1px solid rgb(209, 208, 208);
}
/*底部弹窗 */
.PoperContentView {
  height: 1000rem;
  background: #ffffff;
  border-top-left-radius: 16rem;
  border-top-right-radius: 16rem;
}
.ServiceNoteTitle {
  height: 100rem;
  border-bottom: 1px solid #eeeeee;
  text-align: center;
  line-height: 100rem;
}

.closerButton {
  position: absolute;
  right: 10rem;
}
/*********************/
.foot {
  width: 100%;
  background-color: #fff;
}
.contentAndStandard {
  display: flex;
  flex-direction: row;
  margin: 10px 10px 10px 10px;
}
.foot_content {
  flex: 1;
  border: 1px solid rgb(209, 208, 208);
}
.foot_content_title,
.foot_standard_title {
  height: 40px;
  border-bottom: 0.5px solid rgb(209, 208, 208);
  background-color: rgb(209, 208, 208);
  color: rgb(1, 128, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.foot_standard {
  flex: 1;
  border: 1px solid rgb(209, 208, 208);
  border-left: none;
}
.foot_content_body,
.foot_standard_body {
  font-size: 13px;
  margin: 10px;
}
.comm {
  color: red;
  border-top: 1px dashed rgb(209, 208, 208);
  margin: 10px 10px 0 10px;
  font-size: 12px;
  line-height: 22px;
  padding: 10px;
}
.btn {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: #000;
  z-index: 10;
}
</style>