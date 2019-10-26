<!--
 * @Description: “关于我们”界面
 * @Author: Celine
 * @Date: 2019-10-15 17:28:28
 * @LastEditTime: 2019-10-26 21:20:57
 * @LastEditors: Lin Changkun
 -->
<template>
  <div class="aboutUs">
    <div class="title">我是一个不知道干嘛的可怜小页面～</div>
    <div class="tips">让Ihome小姐姐为您放首歌吧～</div>
    <audio class="audio" :poster="poster" :name="name" :author="author" :src="src" id="myAudio" controls loop="true"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      poster:
        "http://qukufile2.qianqian.com/data2/pic/8d356491f24692ff802cc49c80f51fee/612356223/612356223.jpg@s_1,w_224,h_224",
      name: "我是最强UI，我要加班！",
      author: "婉琳靓靓",
      src: "http://audio04.dmhmusic.com/71_53_T10046455719_128_4_1_0_sdk-cpm/cn/0210/M00/6B/57/ChR461tYzIWAI7uRADirJWcZUEM718.mp3?xcode=871424cf42c5edb154c79f2a62ebcab69fc7ada"
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
  margin: 0 0 0 100rpx;
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