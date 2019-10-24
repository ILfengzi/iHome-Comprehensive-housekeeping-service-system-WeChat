<!--
 * @Description: 订单列表界面
 * @Author: Wanlin Chen
 * @Date: 2019-10-09 11:02:29
 * @LastEditTime: 2019-10-24 20:54:37
 * @LastEditors: Lin Changkun
 -->

<template>
  <div class="order">
    <div class="page">
      <div class="page__bd">
        <div class="weui-tab">
          <div class="weui-navbar">
            <block v-for="(item,index) in tabs" :key="index">
              <div
                :id="index"
                :class="['weui-navbar__item', activeIndex === index ? 'weui-bar__item_on' : '']"
                @click="tabClick"
              >
                <div class="weui-navbar__title">{{item}}</div>
              </div>
            </block>
          </div>
          <div class="weui-tab__panel">
            <div class="weui-tab__content" :hidden="activeIndex != 0">
              <div v-for="(item,index) in allOrderList" :key="index">
                <orderCell :allOrderList="item"></orderCell>
              </div>
            </div>
            <div class="weui-tab__content" :hidden="activeIndex != 1">
              <div v-for="(item,index) in allOrderList" :key="index">
                <orderCell :allOrderList="item"></orderCell>
              </div>
            </div>
            <div class="weui-tab__content" :hidden="activeIndex != 2">
              <div v-for="(item,index) in allOrderList" :key="index">
                <orderCell :index="index"  :allOrderList="item"></orderCell>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="{'hide':isHide,'tips':istips}">没有该状态的订单哦！</div>
  </div>
</template>

<script>
import orderCell from "../../components/orderCell/index";
import mpNavbar from "mpvue-weui/src/navbar";

export default {
  data() {
    return {
      tabs: ["待服务", "服务中", "已完成"],
      activeIndex: 0,
      allOrderList: null,
      index:Number,
      order:"",
      state: 2,
      inputValue: "",
      isHide: true,
      istips: true
    };
  },
  components: {
    orderCell,
    mpNavbar
  },
  onShow() {
    console.log("成功加载");
    this.isHide = true;
    this.$https
      .request({
        url: this.$interfaces.getOrderlistByid,
        data: {
          userid: 1, //输入值
          temp: 2, //用户类型 1为员工，2为普通用户
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
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    tabClick(e) {
      this.isHide = true;
      console.log(e);
      // if (this.inputValue == "") {
      this.activeIndex = Number(e.currentTarget.id);
      // console.log(typeof(this.activeIndex));
      if (this.activeIndex === 0) {
        this.state = 2;
      } else if (this.activeIndex === 1) {
        this.state = 3;
      } else if (this.activeIndex === 2) {
        this.state = 4;
      }
      this.$https
        .request({
          url: this.$interfaces.getOrderlistByid,
          data: {
            userid: 1, //输入值
            temp: 2, //用户类型 1为员工，2为普通用户
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
    }
  }
};
</script>

<style>
.page,
.page__bd {
  height: 100%;
  margin-top: 0px;
}
.page__bd {
  padding-bottom: 0;
}
.weui-navbar{
  background-color: white;
}
.weui-navbar__title {
  display: block;
  
}
.tips {
  color: slategrey;
  margin: 300rpx 0 0 250rpx;
}
.hide {
  display: none;
}

</style>