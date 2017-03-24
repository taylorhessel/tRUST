<template>
  <div class="view groups">
    <div class="ink-grid">
      <div class="column-group">
        <h2>Groups</h2>
        <h5 v-if="groups.length === 0">There are no groups at this time, create a group or try again later</h5>
        <table v-if="groups.length > 0" class="ink-table alternating">
          <thead>
            <tr>
              <th class="align-left">Creator</th>
              <th class="align-left">Created On</th>
              <th class="align-left">Server Name</th>
              <th class="align-left">Playstyle</th>
              <th class="align-left">Group Size</th>
              <th class="align-left">Active Hours</th>
              <th class="align-left">Discord</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="group in groups">
              <tr>
                <td><a target="_blank" :href="group.creator_url"><img class="avatar" :src="group.creator_avatar" :alt="group.creator_name"></a></td>
                <td>{{group.created_at | moment}}</td>
                <td>{{group.server_name}}</td>
                <td v-if="group.playstyle !== ''">{{group.playstyle}}</td>
                <td v-else>N/A</td>
                <td>{{group.group_size}}</td>
                <td>{{group.active_hours}}</td>
                <td v-if="group.discord !== ''"><a target="_blank" :href="group.discord"><img class="discord" src="../assets/images/discord-logo.png" alt="Discord"></a></td>
                <td v-else>N/A</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'groups',
  data () {
    return {
      groups: []
    }
  },
  metaInfo: {
    title: 'tRUST - View Groups'
  },
  props: ['loggedIn'],
  methods: {
    login: function () {
      this.$emit('login')
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do, YYYY')
    }
  },
  created () {
    this.$emit('transparency', false)
    // this.$http.get('http://localhost:8080/groups').then((res) => {
    this.$http.get('https://trust-social-networking.herokuapp.com/groups').then((res) => {
      this.groups = res.body
      this.groups.reverse() // needs to be turned into a computed property if additional orderbys are ever added
    }, (rej) => {
      console.log("couldn't get groups")
    })
  }
}
</script>
