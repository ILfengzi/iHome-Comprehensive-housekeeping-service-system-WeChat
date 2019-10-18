<!--
 * @Description: 全部服务
 * @Author: 
 * @Date: 2019-10-05 22:25:02
 * @LastEditTime: 2019-10-16 08:59:23
 * @LastEditors: Lin Changkun
 -->
<template>
  <scroll-view class="service" scroll-y="true">
    <!-- 服务类 -->
    <div class="navbar">
      <mp-navbar :tabs="tabs" @tabClick="tabClick"></mp-navbar>
    </div>

    <!-- 展示并选取服务 -->
    <div class="showAndSelect">
      <div v-for="(item,index) in showResults" :key="index">
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
import mpNavbar from "mpvue-weui/src/navbar";
import serviceCell from "../../components/serviceCell/index";

export default {
  components: {
    mpNavbar,
    serviceCell
  },
  data() {
    return {
      tabs: ["全部", "钟点工", "一般家政", "家电维护", "长期服务"],
      // activeIndex:0,
      showResults: undefined
    };
  },
  onLoad() {
    this.$https
      .request({
        url: this.$interfaces.getServiceClass,
        data: {
          typeId: 0
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        method: "POST"
      })
      .then(res => {
        // 默认获取全部的服务，渲染页面
        console.log(res.listss);
        this.showResults = res.listss;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    // 切换分类
    tabClick(e) {
      console.log(e);
      this.$https
        .request({
          url: this.$interfaces.getServiceClass,
          data: {
            typeId: e
          },
          header: {
            "content-type": "application/json" // 默认值
          },
          method: "POST"
        })
        .then(res => {
          // 默认获取全部的服务，渲染页面
          console.log(res.listss);
          this.showResults = res.listss;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 点击进入服务详情
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
.weui-cell {
  padding: 12px 15px 12px 35px;
}
</style>