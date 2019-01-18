import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabar/Home'
import Cart from '@/components/tabar/Cart'
import Search from '@/components/tabar/Search'
import Member from '@/components/tabar/Member'
import Newlist from '@/components/news/Newlist'
import Newinfo from '@/components/news/Newinfo'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/Home'},
    {path:'/home',component:Home},
    {path:'/Cart',component:Cart},
    {path:'/Search',component:Search},
    {path:'/Member',component:Member},
    {path:'/home/newlist',component:Newlist},
    {path:'/home/newinfo/:id',component:Newinfo}
  ]
})
