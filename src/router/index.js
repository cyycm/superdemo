import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/nav/Home'
import Collect from '@/components/nav/Collect'
import My from '@/components/nav/My'
import Goodcart from '@/components/nav/Goodcart'
import Apage from '@/components/nav/Apage'



Vue.use(Router)
let routes = [
  {
    redirect: '/home',
    path: ''
  },
  {
    path: '/home',
    name: 'Home',
    meta:{title:'首页'},
    component: Home
  },
  {
    path: '/collect',
    name: 'Collect',
    meta:{title:'关于'},
    component: Collect
  },
  {
    path: '/my',
    name: 'My',
    meta:{title:'个人中心'},
    component: My
  },
  {
    path: '/goodcart',
    name: 'Goodcart',
    meta:{title:'购物车'},
    component: Goodcart
  },
  {
    path:'/apage',
    name:'Apage',
    meta:{title:'测试页面'},
    component:Apage
  }
];
export default new Router({
  routes,
  mode:'history'
})


