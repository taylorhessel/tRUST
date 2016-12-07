import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)

const homeView = App.components.Index
const createView = App.components.Create
const joinView = App.components.Join
const colors = App.components.Colors

const routes = [
  {path: '/', component: homeView},
  {path: '/create', component: createView},
  {path: '/join', component: joinView},
  {path: '/colors', component: colors}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  template: '<App/>',
  components: { App },
  data () {
    return {

    }
  }
}).$mount('#app')
