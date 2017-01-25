<template>
  <header>
    <nav :class="{ 'transparent': transparentNav, 'solid': !transparentNav }">
      <div class="ink-grid clearfix navbar">
        <div class="column-group push-left">
          <router-link class="brand" to="/">tRUST</router-link>
        </div>
        <div class="ink-navigation column-group push-right">
          <ul class="menu horizontal">
            <li><router-link to="/join">join a group</router-link></li>
            <li><router-link to="/create">create a group</router-link></li>
            <li v-if="!loggedIn"><a href="/login"><button class="ink-button" type="button" name="button">login with Steam</button></a></li>
            <li class="user" v-else>Hello, {{steamUser.personaname}} <span @click="logout" class="logout">(logout)</span></li>
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

    }
  },
  props: ['steamUser', 'loggedIn', 'transparentNav'],
  methods: {
    logout: function () {
      this.$emit('logout')
    }
  }
}
</script>
