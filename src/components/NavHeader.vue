<template>
  <header>
    <nav class="ink-navigation">
        <ul class="menu horizontal black">
            <li class="heading active"><a href="#">Home</a></li>
            <li>
                <a href="#">Post archive</a>
                <ul class="submenu">
                    <li><a href="#">January</a></li>
                    <li><a href="#">February</a></li>
                    <li><a href="#">March</a></li>
                    <li><a href="#">...</a></li>
                </ul>
            </li>
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
