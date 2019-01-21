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
      <h3>荣耀</h3><hr>
      <div>
        <div class="price">市场价格  销售价格</div>
        <div class="num">购买数量：<span>-</span><input type="text" v-model="num"><span>+</span></div>
        <div><van-button type="default" size="small">立即购买</van-button><van-button type="danger" size="small" @click="ballmove">加入购物车</van-button></div>
      </div>
      
    </div>
    <!-- 参数 -->
    <div>
      <h3>商品参数</h3><hr>
      <div>
        <p>商品货号：   </p>
        <p>库存情况：</p>
        <p>上架时间：</p>
      </div>
      <div><van-button plain type="primary">朴素按钮</van-button>
<van-button plain type="danger">朴素按钮</van-button></div>
    </div>
  </div>
</template>

<script>
import Swiper from '../subcom/Swiper.vue'
export default {
  data() {
    return { id: this.$route.params.id,goodsinfo:[],num:1,lunbolist:[],ballflag:false };
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
    }
  },
  components:{Swiper}
};
</script>

<style lang='less' scoped>
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