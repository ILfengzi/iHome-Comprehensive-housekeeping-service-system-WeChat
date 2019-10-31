<!--
 * @Description: "服务详情"页面
 * @Author: Wanlin Chen
 * @Date: 2019-10-15 17:02:36
 * @LastEditTime: 2019-10-31 10:59:23
 * @LastEditors: Lin Changkun
 -->

 <template>
  <div class="serviceDetail">
    <img :src="img" mode="center" />
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
        <!-- 静态，通用 -->
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
        <div class="PoperContentView"></div>
      </CustomPopup>
    </div>
    <div class="foot">
      <div class="contentAndStandard">
        <div class="foot_title">
          <div>服务项目</div>
          <div>服务标准</div>
        </div>
        <div class="foot_content" v-for="item in iServiceItemList" :key="item.id">
          <div class="foot_content_body">{{item.content}}</div>
          <div>{{item.standard}}</div>
        </div>
      </div>
      <div class="comm">
        注明：
        <br />
        {{comm}}
      </div>
    </div>
    <div class="btn">
      <button type="primary" @click="toReservation(typeId)">预约</button>
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
      img: "",
      name: "",
      price: "",
      iServiceItemList: [],
      // content: '',
      // standard: '',
      comm: "",
      typeId: "", //服务类型
      userAddress: {
        city: "",
        detail: "",
        id: "",
        phone: "",
        province: "",
        status: "",
        userId: "",
        username: ""
      }
    };
  },
  mounted() {
    // 先从vuex中取出，更新到data数据中
    this.img = this.$store.state.serviceDetail.picturepath2;
    this.name = this.$store.state.serviceDetail.typename;
    this.price = this.$store.state.serviceDetail.chargeType;
    this.iServiceItemList = this.$store.state.serviceDetail.iServiceItemList;
    this.comm = this.$store.state.serviceDetail.comm;
    this.typeId = this.$store.state.serviceDetail.typeId;
    // console.log('@@@@@@@@@@@@',this.iServiceItemList);
  },
  methods: {
    showCustomPopupClick() {
      this.$refs.CustomPopupRef.showCustom();
    },
    closerButton() {
      this.$refs.CustomPopupRef.maskClick();
    },

    /**
     * 员工不能下单
     */
    // 根据服务类型进行跳转到预约界面
    toReservation(typeId) {
      if (this.$store.state.position === 1) {
        wx.showToast({
          title: "员工不能下单哦～",
          icon: "none",
          duration: 2000
        });
      } else {
        // 向后端拿默认地址，给下一个页面用
        this.$https
          .request({
            url: this.$interfaces.getDefaultAddress,
            data: {
              userId: this.$store.state.fakeId //正式用：用户id
              // userId: 1
            },
            header: {
              "content-type": "application/json" // 默认值
            },
            method: "POST"
          })
          .then(res => {
            // console.log(res);
            if (res.code === 1) {          
            this.userAddress.city = " ";
            this.userAddress.detail = " ";
            this.userAddress.id = " ";
            this.userAddress.phone = " ";
            this.userAddress.province = " ";
            this.userAddress.status = " ";
            this.userAddress.userId = " ";
            this.userAddress.username = "请选择";

            // 将空的默认地址存到vuex
            this.$store.dispatch("setUserAddress", this.userAddress);
            } else {
            // 将默认地址存到vuex
            this.$store.dispatch("setUserAddress", res.iUserDetail);
            console.log("将默认地址存起：");
            console.log(this.$store.state.userAddress);
            }
          })
          .catch(err => {
            console.log(err);
          });

        // 1：按时间算钱、2：按平方、3:按数量、4:线下定价
        console.log("typeId:", typeId);
        if (typeId === 1) {
          wx.navigateTo({
            url: "../reservation/forDuration/main"
          });
        } else if (typeId === 2) {
          wx.navigateTo({
            url: "../reservation/forSquare/main"
          });
        } else if (typeId === 3) {
          wx.navigateTo({
            url: "../reservation/forAmount/main"
          });
        } else {
          wx.navigateTo({
            url: "../reservation/forOffline/main"
          });
        }
      }
    }
  }
};
</script>
 
 <style>
.head {
  background-color: #fff;
}
.serviceDetail {
  padding-bottom: 50px;
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
.foot_title {
  display: flex;
  flex-direction: row;
  margin: 10px 10px 0 10px;
}
.foot_content {
  display: flex;
  flex-direction: row;
  margin: 0 10px 0 10px;
  border: 1px solid rgb(209, 208, 208);
  border-top: none;
}
.foot_title div {
  flex: 1;
  height: 40px;
  background-color: rgb(209, 208, 208);
  color: rgb(1, 128, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.foot_content div {
  flex: 1;
  font-size: 13px;
  margin: 10px;
}
.foot_content_body {
  border-right: 0.5px solid rgb(209, 208, 208);
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
  background-color: gray;
  z-index: 10;
}
</style>