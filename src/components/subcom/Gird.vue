<template>
  <div class="demo-icon">
    <router-link tag="div" class="van-col" v-for="item in list" :key="item.src" :to='item.tosome'>
      <i class="van-icon">
        <img :src='item.src'>
        <!-- <img src="../../../static/images/menu1.png"> -->
      </i>
      <span>{{item.msg}}</span>

      
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { src: 'static/images/menu1.png', msg: "新闻资讯", tosome: "/home/newlist" },
        { src: 'static/images/menu2.png', msg: "图片分析", tosome: "home/2" },
        { src: 'static/images/menu3.png', msg: "视频购买", tosome: "home/3" },
        { src: 'static/images/menu4.png', msg: "留言反馈", tosome: "home/4" },
        { src: 'static/images/menu5.png', msg: "视频专区", tosome: "home/5" },
        { src: 'static/images/menu6.png', msg: "我不知道", tosome: "home/6" }
      ]
    };
  }
};
</script>

<style lang='less'  scoped>
.demo-icon {
  padding-top: 10px;
  font-size: 0;
}
.demo-icon-list {
  padding-top: 10px;
  box-sizing: border-box;
  min-height: calc(100vh - 65px);
}
.demo-icon .van-col {
  float: none;
  text-align: center;
  // height: 100px;
  display: inline-block;
  vertical-align: middle;
  width: 33.3333%;
}
.demo-icon .van-col span {
  display: block;
  padding: 0 5px;
  font-size: 12px;
  line-height: 14px;
}
.demo-icon .van-icon {
  font-size: 32px;
  margin: 15px 0;
  color: #455a64;
  img {
    width: 60px;
    height: 60px;
    display: block;
    background-color: pink;
  }
}
</style>