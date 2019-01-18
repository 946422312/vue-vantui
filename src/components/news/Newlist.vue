<template>
  <div id="newslist">
    <router-link v-for="item in newslist" :key="item.id" :to='"/home/newinfo/"+item.id'>
      <van-card
        :desc="item.add_time | formytime('YYYY-MM-DD')"
        :title="item.title"
        :thumb="item.img_url"
      >
        <div slot="footer">
          <span>点了{{item.click}}</span>
        </div>
      </van-card>
    </router-link>
    
  </div>
  
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    newslist: []
  }),
  created() {
    this.getnewlist();
  },
  methods: {
    async getnewlist() {
      const res = await this.$http.get("api/getnewslist");
      if (res.data.status == 0) {
        console.log(res.data);
        this.newslist = res.data.message;
      } else {
        Toast("请求失败");
      }
    }
  },
 
};
</script>

<style lang='less'>
#newslist {
  .van-card__thumb img {
    width: 60px;
    height: 60px;
    margin-top: 10px;
  }
  .van-card:not(:first-child) {
    margin-top: 0px;
  }
  .van-card__footer {
    position: relative;
    right: 10px;
    bottom: 53px;
  }
}
</style>