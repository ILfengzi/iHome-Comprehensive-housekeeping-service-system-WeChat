<!--
 * @Description: 订单列表界面
 * @Author: Wanlin Chen
 * @Date: 2019-10-09 11:02:29
 * @LastEditTime: 2019-10-14 10:55:43
 * @LastEditors: Wanlin Chen
 -->

<template>
  <div class="order">
    <div class="search">
      <mp-searchbar
        :isFocus="true"
        :inputValue="inputValue"
        :placeholder="placeholder"
        @input="input"
        @blur="blur"
        @focus="focus"
        @confirm="confirm"
      ></mp-searchbar>
    </div>
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
          <div class="weui-tab__panel" >
            <div class="weui-tab__content" :hidden="activeIndex != 0" @click="switchTodetail()">
              <orderCell title="清洁" time="2019/10/09"></orderCell>
              <orderCell title="清洁" time="2019/10/09"></orderCell>
            </div>
            <div class="weui-tab__content" :hidden="activeIndex != 1">选项二的内容</div>
            <div class="weui-tab__content" :hidden="activeIndex != 2">选项三的内容</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderCell from "../../components/orderCell/index";
import mpNavbar from "mpvue-weui/src/navbar";
import mpSearchbar from "mpvue-weui/src/searchbar";
export default {
  data() {
    return {
      tabs: ["待服务", "服务中", "待确认"],
      activeIndex: 0
    };
  },
  components: {
    orderCell,
    mpNavbar,
    mpSearchbar
  },
  methods: {
    switchIndex(index) {
      this.currentIndex = index;
    },
    tabClick(e) {
      console.log(e);
      this.activeIndex = Number(e.currentTarget.id);
    }
  }
};
</script>

<style>
.page,
.page__bd {
  height: 100%;
}
.page__bd {
  padding-bottom: 0;
}
.weui-navbar__title {
  display: block;
}
.weui-tab__content {
  padding-top: 10px;
  /* text-align: center; */
}
</style>