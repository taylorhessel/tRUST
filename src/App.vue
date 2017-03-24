<template>
  <div id="app">
    <nav-header :transparentNav="transparentNav" @logout="logoutUser" :steamUser="steamUser" :loggedIn="loggedIn"></nav-header>
    <router-view @transparency="setTransparency" :steamUser="steamUser" :loggedIn="loggedIn"></router-view>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
import Index from './components/Index'
import Create from './components/Create'
import Groups from './components/Groups'
import Colors from './components/Colors'

export default {
  name: 'App',
  components: {
    NavHeader,
    Index,
    Create,
    Groups,
    Colors
  },
  data () {
    return {
      steamUser: null,
      loggedIn: false,
      transparentNav: true
    }
  },
  metaInfo: {
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ]
  },
  methods: {
    logoutUser: function () {
      this.steamUser = null
      this.loggedIn = false
      // this.$http.get('http://localhost:8080/logout').then((res) => {
      this.$http.get('https://trust-social-networking.herokuapp.com/logout').then((res) => {
        console.log(res.body.message)
      }, (rej) => {
        console.log('user was not logged out')
      })
    },
    setTransparency: function (val) {
      this.transparentNav = val
    }
  },
  created () {
    // this.$http.get('http://localhost:8080/user').then((res) => {
    this.$http.get('https://trust-social-networking.herokuapp.com/user').then((res) => {
      if (res.body._json.steamid) {
        this.steamUser = res.body._json
        this.loggedIn = true
      }
    }, (rej) => {
      console.log('user not logged in')
    })
  }
}
</script>

<style src="./assets/css/global.sass" lang="sass"></style>
