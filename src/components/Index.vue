<template>
  <div class="index">
    <img src="../assets/images/index-bg.jpg" class="bg" alt="tRUST">
    <div class="overlay"></div>
    <div class="index-content ink-grid clearfix">
      <div class="column-group marketing push-right">
        <h1 class="align-center">A Rust social networking resource</h1>
        <h2 class="align-right">Login and group up today</h2>
        <div class="button-wrapper align-right">
          <button v-on:click="login" class="ink-button" type="button" name="login">login with Steam</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      // msg: 'Everyday you can noodling around with all your friends and family'
    }
  },
  methods: {
    login: function () {
      this.$emit('login')
    }
  }
}
</script>
