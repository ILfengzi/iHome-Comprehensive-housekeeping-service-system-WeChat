<!--
 * @Description: 轮播图组件（已完成）
 * @Author: Lin Changkun
 * @Date: 2019-10-07 23:51:06
 * @LastEditTime: 2019-10-23 17:07:43
 * @LastEditors: Lin Changkun
 -->
<template>
  <swiper
    class="swiper"
    :indicator-dots="indicatorDots"
    :autoplay="autoplay"
    :interval="interval"
    :duration="duration"
  >
    <block v-for="(item, index) in images" :key="index">
      <swiper-item>
        <image :src="item.url" class="slide-image" mode="aspectFill" />
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    }
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500
    };
  }
};
</script>

<style scoped>
.swiper {
  height: 300rpx !important;
}
image {
  height: 100%;
  width: 100%;
}
</style>