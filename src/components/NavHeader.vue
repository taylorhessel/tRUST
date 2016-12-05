<template>
  <header>
    <nav>
      <div class="ink-grid clearfix">
        <div class="column-group push-left">
          <router-link class="brand" to="/">tRUST</router-link>
        </div>
        <div class="ink-navigation column-group push-right">
          <ul class="menu horizontal">
              <li><router-link to="/groups">join a group</router-link></li>
              <li><router-link to="/groups/create">create a group</router-link></li>
              <li><button v-on:click="login" class="ink-button" type="button" name="button">login with Steam</button></li>
              <!--<li><router-link to="/colors">Colors</router-link></li>-->
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login: function () {
      this.$emit('login')
    }
  }
}
</script>
