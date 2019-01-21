<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <van-button type="primary" size="large" @click="postcomm">发表评论</van-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in infolist" :key="index">
        <div class="cmt-title">
          第{{index + 1}}楼&nbsp;&nbsp;用户：&nbsp;&nbsp;发表时间：{{item.add_time | formytime}}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>
      </div>
      <van-button plain type="danger" size="large" @click="getmore" v-if="clickcount<houtaiindex">加载更多</van-button>
  
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data(){
    return {artid:this.id,infolist:[],houtaiindex:4,clickcount:1,msg:''}
  },
  created(){
    this.getcomment()
  },
  props:['id'],
  methods:{
    async  getcomment(){
        const {body,body:{status,message}}= await this.$http.get(`api/getcomments/${this.artid}?pageindex=${this.clickcount}`)
        if(status===0){
          this.infolist=this.infolist.concat(message)
          console.log(body);
          
        }else{
          Toast('加载异常')
        }
        
    },
    getmore(){
      this.clickcount++
      if(this.clickcount<=this.houtaiindex){
        this.getcomment()
      }else{
        return
      }
    },
    async postcomm(){
      const {data,data:{status,message}}=await this.$http.post(`api/postcomment/${this.id}`,{content:this.msg})
      console.log(data);
      if(status===0){
        console.log(this.infolist);
        var cmt={user_name:'匿名用户',content:this.msg.trim()}
        this.infolist.unshift(cmt)
      }
      
    }
  }
};
</script>

<style lang="less" scoped>
.comment {
  h3 {
    font-size: 18px;
  }
  textarea {
    width: 95%;
    font-size: 14px;
    height: 85px;
    margin-left: 5px;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>