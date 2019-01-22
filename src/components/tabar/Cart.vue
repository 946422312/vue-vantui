<template>
  <div class="cart">
    <div class="cart-group">
      <div class="carttag">
        <van-switch v-model="checked"/>
      </div>
      <div class="cartcard">
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({checked:false})
};
</script>

<style lang='less'>
  .cart{
    .cart-group{
      display: flex;
      .carttag{
        flex: 1;
        // width: 25px;
      }
      .cartcard{
        flex: 4;
      }
    }
  }
</style>