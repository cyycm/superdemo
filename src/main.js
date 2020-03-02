import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
router.beforeEach((to,from,next) =>{
  document.title = to.matched[0].meta.title
  //console.log(to)
  next()
})
