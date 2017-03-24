<template>
  <div class="view index">
    <img src="../assets/images/index-bg.jpg" class="bg" alt="tRUST">
    <div class="overlay"></div>
    <div class="index-content view ink-grid clearfix">
      <div class="column-group marketing">
        <h1>A Rust social networking resource</h1>
        <h2>Login and group up today</h2>
        <div v-if="!loggedIn" class="button-wrapper">
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
  metaInfo: {
    title: 'tRUST'
  },
  props: ['loggedIn'],
  created () {
    this.$emit('transparency', true)
  }
}
</script>
