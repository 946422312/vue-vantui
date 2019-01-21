import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabar/Home'
import Cart from '@/components/tabar/Cart'
import Search from '@/components/tabar/Search'
import Member from '@/components/tabar/Member'
import Newlist from '@/components/news/Newlist'
import Newinfo from '@/components/news/Newinfo'
import Photolist from '@/components/photos/Photolist'
import Photoinfo from '@/components/photos/Photoinfo'
import Goodslist from '@/components/goods/goodslist'
import Goodsinfo from '@/components/goods/goodsinfo'
import Goodsdesc from '@/components/goods/goodsdesc'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/Cart',component:Cart},
    {path:'/Search',component:Search},
    {path:'/Member',component:Member},
    {path:'/home/newlist',component:Newlist},
    {path:'/home/photolist',component:Photolist},
    {path:'/home/newinfo/:id',component:Newinfo},
    {path:'/home/photoinfo/:id',component:Photoinfo},
    {path:'/home/goodslist',component:Goodslist},
    {path:'/home/goodsinfo/:id',component:Goodsinfo,name:'goodsinfo'},
    {path:'/home/goodsdesc/:id',component:Goodsdesc,name:'goodsdesc'},
  ]
})
