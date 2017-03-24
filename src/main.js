import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import VueMeta from 'vue-meta'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VeeValidate)
Vue.use(VueMeta)

const homeView = App.components.Index
const createView = App.components.Create
const groupsView = App.components.Groups
// const colors = App.components.Colors

const routes = [
  {path: '/', component: homeView},
  {path: '/create', component: createView},
  {path: '/view', component: groupsView},
  // {path: '/colors', component: colors},
  {path: '*', redirect: '/'}
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
  }
}).$mount('#app')
