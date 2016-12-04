<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
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
  }
}
</script>

<style src="./assets/css/global.sass" lang="sass"></style>
