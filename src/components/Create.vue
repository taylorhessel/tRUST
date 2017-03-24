<template>
  <div class="view create">
    <div class="ink-grid">
      <div class="column-group medium-75 medium-push-center large-50 large-push-center xlarge-50 xlarge-push-center">
        <h2>Create a group</h2>
        <h5>Users must be logged in with Steam to create a group</h5>
        <form novalidate class="ink-form" action="/create" method="post" @submit.prevent="submit">
            <div class="column-group">
                <div class="control-group">
                    <label for="serverName">Server Name <span class="asterisk">*</span></label>
                    <div class="control">
                        <input v-model="serverName" v-validate="'required|max:50'" type="text" name="serverName" data-vv-as="server name" id="serverName" placeholder="Rusty Moose">
                        <transition name="fade">
                          <span v-show="errors.has('serverName')" class="is-danger">{{ errors.first('serverName') }}</span>
                        </transition>
                    </div>
                </div>
                <div class="control-group">
                    <label for="groupSize">Maximum Group Size <span class="asterisk">*</span></label>
                    <div class="control">
                        <input v-model="groupSize" v-validate="'required|between:1,20'" type="text" name="groupSize" data-vv-as="group size" id="groupSize" placeholder="5">
                        <transition name="fade">
                          <span v-show="errors.has('groupSize')" class="is-danger">{{ errors.first('groupSize') }}</span>
                        </transition>
                    </div>
                </div>
                <div class="control-group">
                    <label for="activeHours">Active Hours <span class="asterisk">*</span></label>
                    <div class="control">
                        <input v-model="activeHours" v-validate="'required|max:50'" type="text" name="activeHours" data-vv-as="active hours" id="activeHours" placeholder="MWF, 5:30pm EST">
                        <transition name="fade">
                          <span v-show="errors.has('activeHours')" class="is-danger">{{ errors.first('activeHours') }}</span>
                        </transition>
                    </div>
                </div>
                <div class="control-group">
                    <label for="playstyle">Playstyle</label>
                    <div class="control">
                        <select v-model="selected" name="playstyle">
                          <option v-for="option in options" :value="option.value">{{option.text}}</option>
                        </select>
                    </div>
                </div>
                <div class="control-group">
                    <label for="discord">Discord Instant Invite</label>
                    <div class="control">
                        <input v-model="discord" v-validate="{ rules: { regex: /^https:\/\/discord.gg\/[A-Za-z0-9]{5,16}$/}}" :class="{'input-is-danger': errors.has('discord')}" type="text" name="discord" data-vv-as="discord instant invite" id="discord">
                        <span v-show="errors.has('discord')" class="is-danger">{{ errors.first('discord') }}</span>
                    </div>
                </div>
            </div>
            <transition name="fade">
              <span v-show="loggedInError" class="ink-alert basic error status">Login with Steam to create a group.</span>
            </transition>
            <transition name="fade">
              <span v-show="formSubmitSuccess" class="ink-alert basic success status">Group created successfully!</span>
            </transition>
            <transition name="fade">
              <span v-show="formSubmitFailure" class="ink-alert basic error status">Failed to create group, please try again.</span>
            </transition>
            <button class="ink-button" type="submit">Submit</button>
            <button @click="clearErrors" class="ink-button reset" type="reset">Reset</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create',
  data () {
    return {
      loggedInError: false,
      formSubmitSuccess: false,
      formSubmitFailure: false,
      serverName: '',
      groupSize: undefined,
      activeHours: '',
      selected: '',
      options: [
        {text: '', value: undefined},
        {text: 'PvP', value: 'PvP'},
        {text: 'Roleplaying', value: 'Roleplaying'},
        {text: 'Casual', value: 'Casual'},
        {text: 'Creative', value: 'Creative'}
      ],
      discord: ''
    }
  },
  metaInfo: {
    title: 'tRUST - Create a Group'
  },
  props: ['loggedIn', 'steamUser'],
  methods: {
    login: function () {
      this.$emit('login')
    },
    submit: function () {
      if (!this.loggedIn) {
        this.loggedInError = true
      }
      if (this.loggedIn) {
        this.$validator.validateAll().then((res) => {
          if (res) {
            let groupData = {
              serverName: this.serverName,
              groupSize: parseInt(this.groupSize),
              activeHours: this.activeHours,
              playstyle: this.selected,
              discord: this.discord,
              creator: this.steamUser.personaname,
              profileurl: this.steamUser.profileurl,
              avatar: this.steamUser.avatarfull
            }
            // this.$http.post('http://localhost:8080/groups', groupData, {
            this.$http.post('https://trust-social-networking.herokuapp.com/groups', groupData, {
              emulateJSON: true
            }).then((res) => {
              if (res.status === 200) {
                this.formSubmitSuccess = true
                setTimeout(() => {
                  this.formSubmitSuccess = false
                  this.resetForm()
                }, 3000)
              } else {
                this.formSubmitFailure = true
                setTimeout(() => {
                  this.formSubmitFailure = false
                }, 3000)
              }
            })
          }
        })
      }
    },
    clearErrors: function () {
      this.loggedInError = false
      this.errors.clear()
    },
    resetForm: function () {
      this.serverName = ''
      this.groupSize = undefined
      this.activeHours = ''
      this.selected = ''
      this.discord = ''
    }
  },
  created () {
    this.$emit('transparency', false)
  }
}
</script>
