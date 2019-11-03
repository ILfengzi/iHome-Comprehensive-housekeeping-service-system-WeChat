<!--
 * @Description: “关于我们”界面
 * @Author: Celine
 * @Date: 2019-10-15 17:28:28
 * @LastEditTime: 2019-11-03 10:50:50
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="aboutUs">
    <div class="title">我是一个不知道干嘛的可怜小页面～</div>
    <div class="tips">工作累了？让Ihome小姐姐为您放首歌吧～</div>
    <audio class="audio" :poster="poster" :name="name" :author="author" :src="src" id="myAudio" controls loop="true"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      poster:
        "http://qukufile2.qianqian.com/data2/pic/8d356491f24692ff802cc49c80f51fee/612356223/612356223.jpg@s_1,w_224,h_224",
      name: "卡路里",
      author: "火箭少女",
      src: "http://47.100.139.184/image/wechat/卡路里.mp3"
    };
  },

  methods: {
    onReady(e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = wx.createAudioContext("myAudio");
    },
  }
};
</script>

<style>
.audio{
  margin: 0 0 0 70rpx;
}
.title{
  text-align: center;
}
.tips {
  color: slategrey;
  text-align: center;
  margin: 150rpx 0 50rpx auto;
}
</style>