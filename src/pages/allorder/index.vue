<!--
 * @Description: 全部订单页面
 * @Author: Wanlin Chen
 * @Date: 2019-10-14 09:03:52
 * @LastEditTime: 2019-10-27 22:13:30
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="allorder">
    <mp-searchbar
      v-model="inputValue"
      :isFocus="true"
      :inputValue="inputValue"
      :placeholder="placeholder"
      @input="input"
      @blur="blur"
      @focus="focus"
      @confirm="confirm"
    ></mp-searchbar>
    <div v-for="(item,index) in allOrderList" :key="index">
      <myOrderCell :allOrderList="item"></myOrderCell>
    </div>
    <div :class="{'hide':isHide,'tips':istips}">您目前尚未有订单哦！</div>
  </div>
</template>

<script>
import myOrderCell from "../../components/myOrderCell/index";
import mpSearchbar from "mpvue-weui/src/searchbar";
export default {
  components: {
    mpSearchbar,
    myOrderCell
  },
  data() {
    return {
      allOrderList: null,
      state: 7,
      inputValue: "",
      isHide: true,
      istips: true
    };
  },
  onShow() {
    console.log("成功加载");
    this.$https
      .request({
        url: this.$interfaces.getOrderlistByid,
        data: {
          temp: this.$store.state.position,//注意!!!!!!!!!!正式用
          userid: this.$store.state.fakeId, //注意!!!!!!!!!!!!正式用      
          // userid: 1, //输入值
          // temp: 2, //用户类型 1为员工，2为普通用户
          state: this.state
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        method: "POST"
      })
      .then(res => {
        // 成功，刷新页面
        this.allOrderList = res.iOrderList;
        console.log(this.allOrderList);
        if (this.allOrderList.length == 0) {
          this.isHide = false;
          console.log(this.isHide);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    focus(){
      console.log("focus");
    },
    swithToOrder: function() {
      console.log(123);
      wx.navigateBack({
        delta: 1 // 回退前 delta(默认为1) 页面
      });
    },
    blur(){
      console.log("失去焦点");
      this.isHide = true;
      this.$https
      .request({
        url: this.$interfaces.getOrderlistByid,
        data: {
          temp: this.$store.state.position,//注意!!!!!!!!!!正式用
          userid: this.$store.state.fakeId, //注意!!!!!!!!!!!!正式用
          // userid: 1, //输入值
          // temp: 2, //用户类型 1为员工，2为普通用户
          state: this.state
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        method: "POST"
      })
      .then(res => {
        console.log(res);
        // 成功，刷新页面
        this.allOrderList = res.iOrderList;
        if (this.allOrderList.length == 0) {
          this.isHide = false;
          console.log(this.isHide);
        }
      })
      .catch(err => {
        console.log(err);
      });
    },
    confirm() {
      console.log("输入完成");
      console.log(this.inputValue);
      this.isHide = true;
      this.$https
        .request({
          url: this.$interfaces.getOrderlistBytypename,
          data: {
            temp: this.$store.state.position,//注意!!!!!!!!!!正式用
            userid: this.$store.state.fakeId, //注意!!!!!!!!!!!!正式用
            // userid: 1, //输入值
            // temp: 2, //用户类型 1为员工，2为普通用户
            state: this.state,
            typename: this.inputValue
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log(res);
          // 成功，刷新页面
          this.allOrderList = res.orders;
          if (this.allOrderList.length == 0) {
            this.isHide = false;
            console.log(this.isHide);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.tips {
  color: slategrey;
  margin: 300rpx 0 0 250rpx;
}
.hide {
  display: none;
}
</style>