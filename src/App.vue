<template>
  <div id="app">
    <van-nav-bar title="长沙-岳麓区" left-text="返回" left-arrow @click-left="onClickRight"/>
    <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
      <router-view class="animated"></router-view>
    </transition>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" dot to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="cart-o" :info="count" to="/cart" id="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "App",

  methods: {
    onClickRight() {
      this.$router.go(-1);
     }
  },
  data() {
    return {
      active: 0
    };
  },
  computed:{
    ...mapGetters([
      'count'
    ])
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
