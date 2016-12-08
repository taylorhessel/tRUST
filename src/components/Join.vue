<template>
  <div class="view join">
    <div class="ink-grid">
      <div class="column-group">
        <h2>Join a group</h2>
        <table class="ink-table alternating">
          <thead>
            <tr>
              <th class="align-left">Creator</th>
              <th class="align-left">Server Name</th>
              <th class="align-left">Server Map</th>
              <th class="align-left">Playstyle</th>
              <th class="align-left">Maximum Group Size</th>
              <th class="align-left">Discord</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img class="avatar" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d9/d9ddf48834ce06c8712cf2af95c87e61d281a88c_full.jpg" alt="Watch"></td>
              <td>Rusty Moose</td>
              <td>Procedural</td>
              <td>PVP</td>
              <td>5</td>
              <td><a target="_blank" href="https://discord.gg/inbvf"><img class="discord" src="../assets/images/discord-logo.png" alt="Discord"></a></td>
            </tr>
            <tr>
              <td><img class="avatar" src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/0c/0c38bba25d0a0dc15f391f4043349eb01ee040e7_full.jpg" alt="Trausi"></td>
              <td>Rustafied - Hapis</td>
              <td>Hapis</td>
              <td>Roleplaying</td>
              <td>3</td>
              <td>None provided</td>
            </tr>
            <tr>
              <td><img class="avatar" src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/2c/2c52d37f202d30dbfe0455a4ac1b2b5d7687def9_full.jpg" alt="Nimbly.exe"></td>
              <td>CombatTags United States 1</td>
              <td>None provided</td>
              <td>PVP practice</td>
              <td>None provided</td>
              <td><a target="_blank" href="https://discord.gg/kdjjs"><img class="discord" src="../assets/images/discord-logo.png" alt="Discord"></a></td>
            </tr>
            <tr>
              <td><img class="avatar" src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/e9/e91fa1eb169591b6bf549323b79c7d95f324ac26_full.jpg" alt="Old Budou"></td>
              <td>Bob the Builder</td>
              <td>Procedural</td>
              <td>Creative</td>
              <td>None provided</td>
              <td><a target="_blank" href="https://discord.gg/nmool"><img class="discord" src="../assets/images/discord-logo.png" alt="Discord"></a></td>
            </tr>
            <tr>
              <td><img class="avatar" src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/42/42a84b6cf9109fd54b943edb99827bde9d932829_full.jpg" alt="Bchillz!"></td>
              <td>Rustopia US</td>
              <td>Procedural</td>
              <td>PVP</td>
              <td>4</td>
              <td><a target="_blank" href="https://discord.gg/isdfj"><img class="discord" src="../assets/images/discord-logo.png" alt="Discord"></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
