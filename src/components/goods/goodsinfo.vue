<template>
  
    <div class="goodsinfo">
      <transition v-on:before-enter="bEnter" v-on:enter="enter" v-on:after-enter="aEnter"><div ref="ball" class="ball" v-show="ballflag"></div></transition>
    
    <!-- // -->
    <!-- 轮播 -->
    <div>
     <Swiper :lunbolist='lunbolist'></Swiper>
    </div>
    <!-- 描述 -->
    <div class="dec">
      <h3>{{goodsinfo.title}}</h3><hr>
      <div>
        <div class="price">市场价格:{{goodsinfo.sell_price}} &nbsp;  销售价格:{{goodsinfo.market_price}}</div>
        <div class="num">购买数量：<span @click="sub">-</span><input type="number" min='1' v-model="num"><span @click="add">+</span></div>
        <div><van-button type="default" size="small" >立即购买</van-button><van-button type="danger" size="small" @click="ballmove" :disabled="btnflag">加入购物车</van-button></div>
      </div>
      
    </div>
    <!-- 参数 -->
    <div>
      <h3>商品参数</h3><hr>
      <div>
        <p>商品货号：{{goodsinfo.goods_no}}  </p>
        <p>库存情况：{{goodsinfo.stock_quantity}}</p>
        <p>上架时间：{{goodsinfo.add_time | formytime('YYYY-MM-DD')}}</p>
      </div>
      <div id="btn"><van-button plain type="primary" size="normal" @click="togoodsdesc(id)">图文介绍</van-button>
<van-button plain type="danger" size="normal" >商品评论</van-button></div>
    </div>
  </div>
</template>

<script>
import Swiper from '../subcom/Swiper.vue'
export default {
  data() {
    return { id: this.$route.params.id,goodsinfo:[],num:1,lunbolist:[],ballflag:false,btnflag:false };
  },
  created(){
    this.getinfo(),
    this.getlunbo()
  },
  methods:{
    async getinfo(){
      const {data:{status,message}}=await this.$http.get('api/goods/getinfo/'+this.id)
      if(status===0){
        this.goodsinfo=message
      }
    },
    getlunbo(){
      const id=parseInt(this.id)+100;
      this.$http.get("api/getthumimages/" +id).then(result => {
        if (result.body.status === 0) {
          // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为 轮播图 组件中，只认识 item.img， 不认识 item.src
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbolist = result.body.message;
        }
      });
    },
    ballmove(){
      this.ballflag=!this.ballflag;
      this.btnflag=true;
      setTimeout(()=>{this.btnflag=false},1100)
      // 点击加入购物车传递过去的对象
      let cartone={
        id:this.id,
        price:998,
        num:this.num}
        this.$store.commit('cart',cartone)
    },
    bEnter(el){
      el.style.transform = "translate(0,0)"
    },
    enter(el,done){
      el.offsetTop;
      const ballXY=this.$refs.ball.getBoundingClientRect()
      const cartXY=document.querySelector('#cart .van-info').getBoundingClientRect()
      const disTop=cartXY.top-ballXY.top;
      const disleft=cartXY.left-ballXY.left;
      el.style.transform=`translate(${disleft}px,${disTop}px)`;
      el.style.transition='all 1s ease';
      done()
    },
    aEnter(el){
      this.ballflag=!this.ballflag;
    },
    togoodsdesc(id){
      this.$router.push('/home/goodsdesc/'+id)
    },
    add(){
      // this.$store.commit('add')
      this.num++
    },
    sub(){
      // this.$store.commit('sub')
      if(this.num<=1){
        return
      }
      this.num--
    }
  },
  components:{Swiper}
};
</script>

<style lang='less' scoped>
#btn{
  display: flex;
  justify-content: space-between;
  button{
    width: 49%;
  }
}
.ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: hotpink;
  position: absolute;
  z-index: 99;
  left: 117px;
  top: 344px;
  // transform: translate(85px,177px)
}
  .goodsinfo{
    padding: 8px;
    .dec{
      h3{
        font-size: 18px;
        line-height: 10px;
      }
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      .num{
        margin: 5px 0;
        font-size: 14px;
        span{
          border: 1px solid #ccc;
          display: inline-block;
          width: 1.5em;
          text-align: center;
        }
        input{
          width: 2em;
          height: 15px;
          text-align: center
        }
      }
      .price{
        font-size: 14px;
      }
    }
  }
</style>