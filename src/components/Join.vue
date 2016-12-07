<template>
  <div class="join">
    <h1>Join a group here</h1>
  </div>
</template>

<script>
export default {
  name: 'join',
  data () {
    return {}
  },
  props: ['loggedIn'],
  methods: {
    login: function () {
      this.$emit('login')
    }
  },
  created () {
    this.$emit('transparency', false)
  }
}
</script>
