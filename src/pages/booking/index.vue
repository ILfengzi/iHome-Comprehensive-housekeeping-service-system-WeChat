<!--
 * @Description: 搜索结果页
 * @Author: Lin Changkun
 * @Date: 2019-10-05 22:25:02
 * @LastEditTime: 2019-10-27 22:14:17
 * @LastEditors: Lin Changkun
 -->
<template>
  <scroll-view class="home" scroll-y="true">
    <!-- 搜索框 -->
    <div class="page">
      <div class="page__hd"></div>
      <div class="page__bd">
        <div class="weui-search-bar">
          <div class="weui-search-bar__form">
            <div class="weui-search-bar__box">
              <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
              <input
                type="text"
                class="weui-search-bar__input"
                placeholder="请输入服务关键词"
                v-model="inputVal"
                :focus="inputShowed"
                @input="inputTyping"
                @confirm="complete"
              />
              <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
                <icon type="clear" size="14"></icon>
              </div>
            </div>
            <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
              <icon class="weui-icon-search" type="search" size="14"></icon>
              <div class="weui-search-bar__text">{{inputVal}}</div>
            </label>
          </div>
          <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
        </div>
        <!-- <div class="weui-cells searchbar-result" v-if="inputVal.length > 0">
          <navigator url class="weui-cell" hover-class="weui-cell_active">
            <div class="weui-cell__bd">
              <div>实时搜索文本</div>
            </div>
          </navigator>
        </div>-->
      </div>
    </div>

    <!-- 搜索并选取服务 -->
    <div class="searchAndSelect">
      <div v-for="(item,index) in searchResults" :key="index">
        <service-cell
          :img="item.picturepath1"
          :title="item.typename"
          :describe="item.ddescribe"
          :level="item.chargeType"
          :count="item.explains"
          @click="switchWebview(item)"
        ></service-cell>
      </div>
    </div>
  </scroll-view>
</template>

<script>
import serviceCell from "../../components/serviceCell/index";

export default {
  components: {
    serviceCell
  },
  data() {
    return {
      inputShowed: false, //搜索
      inputVal: "", //输入值
      searchResults: null
    };
  },
  mounted() {
    // 先从vuex中取出，存到data数据中
    this.inputVal = this.$store.state.inputVal;
    this.searchResults = this.$store.state.searchResults;
    // console.log(this.$store.state.searchResults);
  },
  methods: {
    showInput() {
      this.inputShowed = true;
    },
    hideInput() {
      this.inputVal = "";
      this.inputShowed = false;

      // 点击取消，搜索全部刷新页面
      this.$https
        .request({
          url: this.$interfaces.getSearchResults,
          data: {
            typename: this.inputVal //输入值
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log(res);
          // 成功，刷新页面
          this.searchResults = res.listd;
        })
        .catch(err => {
          console.log(err);
        });
    },
    clearInput() {
      this.inputVal = "";
    },
    inputTyping(e) {
      //   console.log(e);
      this.inputVal = e.mp.detail.value;
    },
    complete(e) {
      //输入完成，传递输入值给后端、刷新页面
      console.log("输入完成！");
      this.$https
        .request({
          url: this.$interfaces.getSearchResults,
          data: {
            typename: this.inputVal //输入值
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          console.log(res);
          // 成功，刷新页面
          this.searchResults = res.listd;
        })
        .catch(err => {
          console.log(err);
        });
    },
    switchWebview(item) {
      //点击后进行页面跳转、传id给后端
      this.$https
        .request({
          url: this.$interfaces.getServiceDetails,
          data: {
            id: item.id
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          // 成功，获取到后端传回到服务详情，并将其存到vuex中,给跳转后的页面用
          this.$store.dispatch("setServiceDetail", res.detailtype);
          console.log("我进来了");
          console.log(this.$store.state.serviceDetail);
          //跳转到服务详情页
          wx.navigateTo({
            url: "../serviceDetail/main"
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {}
};
</script>

<style>
.searchbar-result {
  margin-top: 0;
  font-size: 14px;
}
.searchbar-result:before {
  display: none;
}
.weui-cell {
  padding: 12px 15px 12px 35px;
}
</style>