<template>
  <header>
    <nav :class="{ 'transparent': transparentNav, 'solid': !transparentNav }">
      <div class="ink-grid clearfix navbar">
        <div class="column-group">
          <div class="push-left">
            <router-link class="brand" to="/">tRUST</router-link>
          </div>
          <div class="ink-navigation show-all hide-tiny hide-small">
            <ul class="menu horizontal push-right">
              <li><router-link to="/view">view groups</router-link></li>
              <li><router-link to="/create">create a group</router-link></li>
              <li v-if="!loggedIn"><a href="/login"><button class="ink-button" type="button" name="button">login with Steam</button></a></li>
              <li class="user" v-else>Hello, {{truncated}} <span @click="logout" class="logout">(logout)</span></li>
            </ul>
          </div>
          <div class="ink-navigation hide-all show-tiny show-small">
            <button @click="hamburger" :class="{ 'is-active': hamburgerActive }" class="hamburger hamburger--squeeze push-right" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div v-if="hamburgerActive" class="column-group ink-navigation mobile hide-all show-tiny show-small">
          <ul class="menu horizontal push-left">
            <li><router-link to="/view">view groups</router-link></li>
            <li><router-link to="/create">create a group</router-link></li>
            <li v-if="!loggedIn"><a href="/login"><button class="ink-button" type="button" name="button">login with Steam</button></a></li>
            <li class="user" v-else>Hello, {{truncated}}<span @click="logout" class="logout"> (logout)</span></li>
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
      hamburgerActive: false
    }
  },
  props: ['steamUser', 'loggedIn', 'transparentNav'],
  methods: {
    logout: function () {
      this.$emit('logout')
    },
    hamburger: function () {
      if (this.hamburgerActive === false) {
        this.hamburgerActive = true
      } else {
        this.hamburgerActive = false
      }
    }
  },
  computed: {
    truncated: function () {
      if (this.steamUser.personaname.length <= 15) {
        return this.steamUser.personaname
      }
      return this.steamUser.personaname.slice(0, 14) + '...'
    }
  }
}
</script>
