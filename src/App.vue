<template>
  <div id="app">
    <nav-header  v-bind:transparentNav="transparentNav" v-on:logout="logoutUser" v-bind:steamUser="steamUser" v-bind:loggedIn="loggedIn"></nav-header>
    <router-view v-on:transparency="setTransparency" v-bind:steamUser="steamUser" v-bind:loggedIn="loggedIn"></router-view>
    <!--<nav-footer></nav-footer>-->
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
import Index from './components/Index'
import Create from './components/Create'
import Join from './components/Join'
import Colors from './components/Colors'
import NavFooter from './components/NavFooter'

export default {
  name: 'App',
  components: {
    NavHeader,
    Index,
    Create,
    Join,
    Colors,
    NavFooter
  },
  data () {
    return {
      steamUser: null,
      loggedIn: false,
      transparentNav: true
    }
  },
  methods: {
    logoutUser: function () {
      this.steamUser = null
      this.loggedIn = false
      this.$http.get('https://trust-social-networking.herokuapp.com/logout').then((response) => {
        console.log(response.body.message)
      }, (response) => {
        console.log('user was not logged out')
      })
    },
    setTransparency: function (val) {
      this.transparentNav = val
    }
  },
  created () {
    this.$http.get('https://trust-social-networking.herokuapp.com/user').then((response) => {
      if (response.body._json.steamid) {
        this.steamUser = response.body._json
        this.loggedIn = true
      }
    }, (response) => {
      console.log('user logged in')
    })
  }
}
</script>

<style src="./assets/css/global.sass" lang="sass"></style>
