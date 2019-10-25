<!--
 * @Description: 首页
 * @Author: 
 * @Date: 2019-10-05 22:25:02
 * @LastEditTime: 2019-10-25 08:29:22
 * @LastEditors: Lin Changkun
 -->
<template>
  <scroll-view class="home" scroll-y="true">
    <!-- 轮播图 -->
    <div>
      <Swiper :images="images" />
    </div>
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
              <div class="weui-search-bar__text">搜索</div>
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

    <!-- 热门服务 -->
    <div class="popService">
      <p>热门服务</p>
      <div class="page__bd">
        <div class="weui-grids">
          <div v-for="item in grids" :key="item.index" @click="passData(item.index)">
            <div class="weui-grid" hover-class="weui-grid_active">
              <image class="weui-grid__icon" :src="item.src" />
              <div class="weui-grid__label">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 服务保障 -->

    <div class="serviceGuarantee">
      <p>服务保障</p>
      <div v-for="(item,index) in service" :key="index">
        <service-cell
          :img="item.img"
          :title="item.title"
          :describe="item.describe"
          :level="item.level"
          :count="item.count"
        ></service-cell>
      </div>
    </div>
  </scroll-view>
</template>

<script>
import Swiper from "../../components/swiper/index";
import mpGrid from "mpvue-weui/src/grid";
import serviceCell from "../../components/serviceCell/index";

export default {
  components: {
    Swiper,
    mpGrid,
    serviceCell
  },
  data() {
    return {
      images: [
        {
          url: "http://47.100.139.184:8080/首页轮播1.jpg"
        },
        {
          url: "http://47.100.139.184:8080/首页轮播2.jpg"
        },
        {
          url: "http://47.100.139.184:8080/首页轮播3.jpg"
        }
      ],
      inputShowed: false, //搜索
      inputVal: "", //输入值
      grids: [
        { src: "http://47.100.139.184:8080/xinju.png", name: "新居", index: 7 },
        { src: "http://47.100.139.184:8080/caboli.png", name: "擦玻璃", index: 2 },
        { src: "http://47.100.139.184:8080/baojie.png", name: "日常保洁", index: 3 },
        { src: "http://47.100.139.184:8080/zuofan.png", name: "做饭", index: 4 },
        { src: "http://47.100.139.184:8080/jiesong.png", name: "接送", index: 5 },
        { src: "http://47.100.139.184:8080/ktwx.png", name: "空调维修", index: 1 },
        { src: "http://47.100.139.184:8080/matong.png", name: "通马桶", index: 6 },
        { src: "http://47.100.139.184:8080/all.png", name: "全部服务", index: 8 }
      ],
      service: [
        {
          img: "http://47.100.139.184:8080/bjdc.jpg",
          title: "背景调查",
          describe: "入职前的背景调查，保障从业人员无任何背景问题",
          level: "完全放心",
          count: "层层把关"
        },
        {
          img: "http://47.100.139.184:8080/zypx.jpg",
          title: "专业培训",
          describe: "定期的专业培训，不断提高从业人员的服务质量和专业素养",
          level: "完全安心",
          count: "服务提升"
        },
        {
          img: "http://47.100.139.184:8080/zyrz.jpg",
          title: "专业认证",
          describe: "每个从业人员皆持证上岗，且都经过行业的专业认证",
          level: "完全走心",
          count: "行业认可"
        },
        {
          img: "http://47.100.139.184:8080/fwzd.jpg",
          title: "服务周到",
          describe: "周到的服务，一丝不苟、细致入微是我们的追求",
          level: "完全称心",
          count: "客户至上"
        },
        {
          img: "http://47.100.139.184:8080/shbz.jpg",
          title: "售后保障",
          describe: "完善的售后制度，时刻保障您的权益，完全无后顾之忧",
          level: "完全诚心",
          count: "客服在线"
        }
      ]
    };
  },
  methods: {
    showInput() {
      this.inputShowed = true;
    },
    hideInput() {
      this.inputVal = "";
      this.inputShowed = false;
    },
    clearInput() {
      this.inputVal = "";
    },
    inputTyping(e) {
      //   console.log(e);
      // this.inputVal = e.mp.detail.value;
      //将输入的值存到vuexs
      this.$store.dispatch("setInputVal", e.mp.detail.value);
    },
    complete(e) {
      //输入完成，传递输入值给后端、进行页面跳转
      console.log("输入完成！输入的值为：");
      console.log(this.$store.state.inputVal);
      this.$https
        .request({
          url: this.$interfaces.getSearchResults,
          data: {
            typename: this.$store.state.inputVal //输入值
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          this.$store.dispatch("setSearchResults", res.listd);
          wx.navigateTo({
            url: "../booking/main"
          });
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 点击图标，进行相应的跳转
    passData(index) {
      console.log("$$$$$$$$$$$");
      console.log(index);
      if (index === 8) {
        //点击全部，跳转到分类页面
        wx.navigateTo({
          url: "../service/main"
        });
      } else {
        //跳转到相应的服务详情页、传id给后端
        this.$https
          .request({
            url: this.$interfaces.getServiceDetails,
            data: {
              id: index
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
.message {
  color: red;
  padding: 10px;
  text-align: center;
}

.popService {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
}
.serviceGuarantee p {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
  /* margin-top: 16px;
  background-color: #fff;
  border: 1px solid #ebeef5;*/
}
</style>