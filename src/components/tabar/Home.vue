<template>
  <div>
    <!-- <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in lunbolist" :key="item.img" class="item">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe> -->
    <Swiper :lunbolist='lunbolist'></Swiper>
  <Gird></Gird>
  </div>
</template>

<script>
import Gird from '../subcom/Gird.vue'
import Swiper from '../subcom/Swiper.vue'
import {Toast} from 'vant'
export default {
  data: () => ({
    lunbolist: []
  }),
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("api/getlunbo").then(res => {
        const {status,message}=res.data
        // console.log(res.data);
        if(status==0){
          this.lunbolist = message;
        }else{
          Toast('服务器故障')
        }
        
      });
    }
  },
  components:{Gird,Swiper}
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