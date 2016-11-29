<template>
  <div id="app">
    <nav-header></nav-header>
    <img src="./assets/logo.png">
    <app-view></app-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
import AppView from './components/AppView'
import NavFooter from './components/NavFooter'

export default {
  name: 'App',
  components: {
    NavHeader,
    AppView,
    NavFooter
  }
}
</script>
