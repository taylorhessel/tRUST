<template>
  <div id="app">
    <nav-header v-on:login="loginUser"></nav-header>
    <router-view v-on:login="loginUser"></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
import Index from './components/Index'
import Colors from './components/Colors'
import NavFooter from './components/NavFooter'

export default {
  name: 'App',
  components: {
    NavHeader,
    Index,
    Colors,
    NavFooter
  },
  data () {
    return {
      loggedInUser: {}
    }
  },
  methods: {
    loginUser: function () {
      this.$http.get('http://pokeapi.co/api/v2/pokemon/151').then((response) => {
        console.log(response)
      }, (response) => {
        // error callback
      })
    }
  }
}
</script>

<style src="./assets/css/global.sass" lang="sass"></style>
