<!--
/*
 * @Author: Wanlin Chen 
 * @Date: 2019-10-08 14:54:24 
 * @Last Modified by: Wanlin Chen
 * @Last Modified time: 2019-10-08 23:16:50
 */    
-->
<template>
  <div class="order">
    <div class="search">
      <input type="text" name="search" confirm-type="search" />
      <button>搜索</button>
    </div>
    <div class="order_info">
     <div class="order_detail">
        <span
          :class="{active: currentIndex == index}"
          class="btn_scroll"
          v-for="(item,index) in allLessons"
          :key="index"
        >{{item.title}}</span>
      </div> 
      <!-- 
      <div class="order_detail">
        <span  :index=1 :class="{active:currentIndex == index}" >待服务</span>
      </div>
      <div class="order_detail">
        <span>待验收</span>
      </div> -->
    </div>
    <div class="order_list">
      <orderCell title="清洁" time="2019/10/09"></orderCell>
      <orderCell title="清洁" time="2019/10/09"></orderCell>
      <orderCell title="清洁" time="2019/10/09"></orderCell>
    </div>
  </div>
</template>

<script>
import orderCell from "../../components/orderCell/index";
export default {
  data() {
    return {
      allLessons: [{ title: "全部" }, { title: "待服务" }, { title: "待验收" }],
      currentIndex:0
    };
  },
  components: {
    orderCell
  },
  methods: {
    getIndex(index) {
      console.log(index);
    }
  }
};
</script>

<style>
.search {
  background-color: #fff;
  box-sizing: border-box;
  padding: 8px 20px;
  border-bottom: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
  display: flex;
  flex-direction: row;
}
.search input {
  width: 75%;
  height: 30px;
  background-color: #f7f7f7;
  margin-right: 10px;
  line-height: 16px;
}
.search button {
  font-size: 14px;
}
.order_info {
  padding: 10px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
}
.order_info .order_detail {
  text-align: center;
  flex: 1;
}
.active {
  color: teal;
  font-weight: bold;
}

.btn_scroll {
  padding: 0 30px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  box-sizing: border-box;
  text-align: center;
}
</style>