<template>
  <div>
    <h3>{{newsinfo.title}}</h3>
    <p>
      <span>发表时间：{{newsinfo.add_time | formytime}}</span>
      <span>点击：{{newsinfo.click}}</span>
    </p>
    <p v-html="newsinfo.content"></p>
    <comment></comment>
  </div>
  
</template>

<script>
import comment from '../subcom/comment.vue'

import { Toast } from 'vant';
export default {
 data(){
  return {id:this.$route.params.id,newsinfo:{}}
 },
 created(){this.getnews()},
 methods:{
  async getnews(){
     const {data:{status,message}}=await this.$http.get('api/getnew/'+this.id)
     if(status==0){
       this.newsinfo=message
     }else{
       Toast('获取失败')
     }
     
   }
 },
  components:{comment}
};
</script>

<style  scoped>

</style>