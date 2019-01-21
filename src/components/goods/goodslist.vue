<template>
  <div class="goodslist">
    <div class="item" v-for="item in listinfo" :key="item.id" @click='togoodsinfo(item.id)'>
      <img :src="item.img_url" alt="">
      <h3>{{item.title}}</h3>
      <div class="price"><span>现价￥{{item.sell_price}}</span><span>原价￥{{item.market_price}}</span></div>
      <div class="sell"><span>热卖中</span><span>还剩{{item.stock_quantity}}件</span></div>
    </div>
    <van-button type="danger" size="large" @click="getmore">加载更多</van-button>
  </div>
</template>

<script>
export default {
  data(){ return {listinfo:[],pageindex:1}
    },
  created(){
    this.getgoodslist()
  },
  methods:{
    async getgoodslist(){
    const {data:{status,message}}=await this.$http.get('api/getgoods?pageindex='+this.pageindex)
    console.log(message);
    this.listinfo=this.listinfo.concat(message)
    
    },
    getmore(){
      this.pageindex++
      if(this.pageindex>4){
        return
      }
      this.getgoodslist()
    },
    togoodsinfo(id){
      this.$router.push('/home/goodsinfo/'+id)
    }
  }
};
</script>

<style lang='less'  scoped>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    .item{
      width: 42%;
      min-height: 230px;
      padding: 10px;
      box-shadow: 3px 3px 10px #888888;
      img{
        width: 100%;
      }
      h3{
        font-size: 14px;
      }
      .price{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        line-height: 25px;
        // background-color: #ccc;
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        // background-color: #ccc;
      }
    }
  }

</style>