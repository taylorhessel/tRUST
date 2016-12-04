<template>
  <header>
    <nav class="ink-navigation">
      <div class="ink-grid">
        <ul class="menu horizontal">
            <li class="heading"><router-link to="/">tRUST</router-link></li>
            <li><router-link to="/groups">Groups</router-link></li>
            <li><router-link to="/colors">Colors</router-link></li>
            <li class="disabled"><a href="#">About</a></li>
        </ul>
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
  }
}
</script>
