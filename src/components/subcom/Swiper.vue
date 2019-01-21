<template>
  <div class="myswiper">
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in lunbolist" :key="item.img" class="item">
        <img :src="item.img || item.src" alt>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data(){ return {}
    },
  props:['lunbolist']
};
</script>

<style lang="less"  scoped>
.swipe {
  height: 200px;
  .item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}



</style>