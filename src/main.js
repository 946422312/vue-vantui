// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueresource from 'vue-resource'
import { NavBar ,Tabbar, TabbarItem ,Swipe, SwipeItem,Card,Button,Tab, Tabs,Lazyload} from 'vant';
import 'animate.css/animate.css'
import moment from 'moment'
// import axios from 'axios'
Vue.use(vueresource)

Vue.
    use(NavBar).
    use(Tabbar).
    use(TabbarItem).
    use(Swipe).
    use(Card).
    use(Button).
    use(SwipeItem).
    use(Tab).
    use(Tabs).
    use(Lazyload);

Vue.config.productionTip = false
Vue.http.options.root='http://127.0.0.1:5000/'
Vue.http.options.emulateJSON=true
Vue.filter('formytime',(datastr,arg1='YYYY-MM-DD HH:mm:ss')=>{
  return moment(datastr).format(arg1)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
// Vue.prototype.axios=axios