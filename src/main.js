import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const homeView = App.components.Index
const routes = [
  {path: '/', component: homeView}
]
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
