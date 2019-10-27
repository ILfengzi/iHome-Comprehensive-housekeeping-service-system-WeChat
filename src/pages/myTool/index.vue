<!--
 * @Description: "我的工具"界面
 * @Author: Celine
 * @Date: 2019-10-24 15:04:16
 * @LastEditTime: 2019-10-27 22:29:55
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="tool">
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
              <!-- <div v-for="(item,index) in myTool" :key="index">
                <myTool :myTool="item"></myTool>
              </div> -->
              <myTool
                v-for="(item,index) in myTool"
                :key="index"
                :index="index"
                :myTool="item"
                @isTake="isTake"
              ></myTool>
            </div>
            <div class="weui-tab__content" :hidden="activeIndex != 1">
              <myTool
                v-for="(item,index) in myTool"
                :key="index"
                :index="index"
                :myTool="item"
                @isReturn="isReturn"
                @isDam="isDam"
              ></myTool>
            </div>
            <div class="weui-tab__content" :hidden="activeIndex != 2">
              <myTool
                v-for="(item,index) in myTool"
                :key="index"
                :index="index"
                :myTool="item"
              ></myTool>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="{'hide':isHide,'tips':istips}">没有该状态的工具哦！</div>
  </div>
</template>

<script>
import myTool from "../../components/tooCell/index";
import mpNavbar from "mpvue-weui/src/navbar";
export default {
  components: {
    myTool,
    mpNavbar
  },
  data() {
    return {
      tabs: ["待领取", "待归还", "已完成"],
      activeIndex: 0,
      isHide: true,
      myTool: null,
      state:0,
      istips: true
    };
  },
  onShow() {
    console.log("成功加载");
    this.isHide = true;
    this.$https
      .request({
        url: this.$interfaces.seeTool,
        data: {
          userid: this.$store.state.fakeId, //注意!!！！！正式用
          // userid: 1, //输入值
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
        this.myTool = res.iToolrecordList;
        if (this.myTool.length == 0) {
          this.isHide = false;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    isDam(e1,e2,index){
      console.log("isDam");
      console.log(e1);
      console.log(e2);
      this.isHide = true;
      this.$https
        .request({
          url: this.$interfaces.damTool,
          data: {
            orderid: e2, //输入值
            staffid: e1 //用户类型 1为员工，2为普通用户
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log(res);
          // 成功，刷新页面
          this.myTool.splice(index,1);
          if (this.myTool.length == 0) {
            this.isHide = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    isReturn(e1,e2,index){
      console.log("isReturn");
      console.log(e1);
      console.log(e2);
      this.isHide = true;
      this.$https
        .request({
          url: this.$interfaces.returnTool,
          data: {
            orderid: e2, //输入值
            staffid: e1 //用户类型 1为员工，2为普通用户
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log(res);
          // 成功，刷新页面
          this.myTool.splice(index,1);
          if (this.myTool.length == 0) {
            this.isHide = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    isTake(e1,e2,index){
      console.log("isTake");
      console.log(e1);
      console.log(e2);
      this.isHide = true;
      this.$https
        .request({
          url: this.$interfaces.getTool,
          data: {
            orderid: e2, //输入值
            staffid: e1 //用户类型 1为员工，2为普通用户
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log(res);
          // 成功，刷新页面
          this.myTool.splice(index,1);
          if (this.myTool.length == 0) {
            this.isHide = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    tabClick(e) {
      this.isHide = true;
      console.log(e);
      // if (this.inputValue == "") {
      this.activeIndex = Number(e.currentTarget.id);
      // console.log(typeof(this.activeIndex));
      if (this.activeIndex === 0) {
        this.state = 0;
      } else if (this.activeIndex === 1) {
        this.state = 1;
      } else if (this.activeIndex === 2) {
        this.state = 2;
      }
    this.$https
      .request({
        url: this.$interfaces.seeTool,
        data: {
          userid: this.$store.state.fakeId, //注意!！！！!正式用
          // userid: 1, //输入值
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
        this.myTool = res.iToolrecordList;
        if (this.myTool.length == 0) {
          this.isHide = false;
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
.weui-navbar {
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