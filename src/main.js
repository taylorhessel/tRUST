import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)

const homeView = App.components.Index
const colors = App.components.Colors

const routes = [
  {path: '/', component: homeView},
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
    return {}
  },
  computed: {}
}).$mount('#app')
