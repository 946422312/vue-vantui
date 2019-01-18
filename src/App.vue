<template>
  <div id="app">
    <van-nav-bar title="长沙黑马" left-text="返回" left-arrow @click-right="onClickRight"/>
    <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
      <router-view class="animated"></router-view>
    </transition>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" dot to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="0" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    onClickRight() {}
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
#app {
  overflow-x: hidden;
  padding-bottom: 50px;
}
.van-nav-bar{
  background-color: skyblue;
}
.v-leave-to{
  position: absolute;
  transform: translateX(-200%);
}
</style>
