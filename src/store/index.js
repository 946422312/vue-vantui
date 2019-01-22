import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// let cart=JSON.parse(localStorage.getItem('cart') || '[]');
var cart = JSON.parse(localStorage.getItem('cart') || '[]')
// console.log(cart);
// let count= 0

//  cart.forEach(item=>{
//    count+=item.num
//  })
export default new Vuex.Store({
  state:{cart},
  mutations:{
    // add(state){
    //   state.count++
    // },
    // sub(state){
    //   state.count--
    // },
    cart(state,cartone){
      //获取本地中cart中有没有值 没有就赋值给一个空数组
      
      console.log(state.cart);
      
      // 如果为空直接将数据push进去，否者判断已存在的同样的商品 
      if(state.cart.length==0){
        state.cart.push(cartone)
      }else{
        let flag=false
        state.cart.forEach(item=>{
          //如果同样的就将num相加 没有就push进去
          //定义一个flag判定购物车是否有该商品 当flag改变则表示购物车有
          if(item.id==cartone.id){
            item.num+=parseInt(cartone.num)
            flag=true
          }
        })
        // 当循环结束flag改变为true即表示购物车中有
        if(!flag){
          state.cart.push(cartone)
        }
      }
      // console.log(state.cart);
      // let step=0;
      // state.cart.forEach(item=>{
      //   step+=item.num
      // })
      // state.count=step
      localStorage.setItem('cart',JSON.stringify(state.cart))
      
    
    }
  },
  getters:{
    count(state){
      let count= 0
      state.cart.forEach(item=>{
         count+=item.num
      })
      return count
    }
  }
})