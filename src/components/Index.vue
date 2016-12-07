<template>
  <div class="index">
    <img src="../assets/images/index-bg.jpg" class="bg" alt="tRUST">
    <div class="overlay"></div>
    <div class="index-content ink-grid clearfix">
      <div class="column-group marketing push-right">
        <h1 class="align-center">A Rust social networking resource</h1>
        <h2 class="align-right">Login and group up today</h2>
        <div v-if="!loggedIn" class="button-wrapper align-right">
          <a href="/login"><button class="ink-button" type="button" name="login">login with Steam</button></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  props: ['loggedIn'],
  created () {
    this.$emit('transparency', true)
  }
}
</script>
