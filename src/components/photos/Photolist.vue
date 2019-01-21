<template>
  <div class="photolist">
    <van-tabs v-model="active" @click="getimg">
      <van-tab v-for="(item,index) in catelist" :title="item.title" :key="index" >
        <router-link v-for="img in imageList" :key="img.id"  :to="'/home/photoinfo/'+img.id">
          <img v-lazy="img.img_url">
        </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return { catelist: [], active: 0, imageList: [] };
  },
  created() {
    this.getinfo();
    this.getimg(0);
   
  },
  methods: {
    getinfo() {
      this.$http.get("api/getimgcategory").then(res => {
        // console.log(res);
        const {
          data: { status, message }
        } = res;
        if (status === 0) {
          this.catelist = message;
          this.catelist.unshift({ id: 0, title: "全部" });
          // console.log(this.catelist);
        } else {
          Toast("404");
        }
      });
    },
    getimg(index){
      this.$http.get('api/getimages/'+index).then(res=>{
        const {data:{status,message}}=res;
        this.imageList=[]
        this.imageList=message
      })
    },
  
  }
};
</script>

<style  scoped>
</style>