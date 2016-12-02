<template>
  <header>
    <nav class="ink-navigation">
        <ul class="menu horizontal black">
            <li class="heading"><router-link to="/">Home</router-link></li>
            <li><router-link to="/groups">Groups</router-link></li>
            <li class="disabled"><a href="#">About</a></li>
        </ul>
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
  }
}
</script>
