<template>
  <div class="view create">
    <div class="ink-grid">
      <h2>Create a group here</h2>
      <div class="column-group">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create',
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
