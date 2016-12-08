<template>
  <div class="view create">
    <div class="ink-grid">
      <div class="column-group large-50 large-push-center xlarge-50 xlarge-push-center">
        <h2>Create a group</h2>
        <form class="ink-form" action="/create" method="post" v-on:submit.prevent>
            <div class="column-group">
                <div class="control-group">
                    <label for="serverName">Server Name</label>
                    <div class="control">
                        <input type="text" name="serverName" id="serverName" placeholder="Rusty Moose">
                    </div>
                </div>
                <div class="control-group">
                    <label for="serverMap">Server Map</label>
                    <div class="control">
                        <input type="text" name="serverMap" id="serverMap" placeholder="Procedural">
                    </div>
                </div>
                <div class="control-group">
                    <label for="playstyle">Playstyle</label>
                    <div class="control">
                        <input type="text" name="playstyle" id="playstyle" placeholder="PvP">
                    </div>
                </div>
                <div class="control-group">
                    <label for="groupSize">Maximum Group Size</label>
                    <div class="control">
                        <input type="text" name="groupSize" id="groupSize" placeholder="5">
                    </div>
                </div>
                <div class="control-group">
                    <label for="discord">Discord</label>
                    <div class="control">
                        <input type="text" name="discord" id="discord" placeholder="https://discord.gg/zxoxo">
                    </div>
                </div>
            </div>
            <button class="ink-button" type="submit">Submit</button>
        </form>
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
