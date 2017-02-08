var knex = require('./knex')

function getGroups() {
  return knex('groups')
}

function addGroup(group) {
  return knex('groups').insert({
    creator_name: group.creator,
    creator_url: group.profileurl,
    creator_avatar: group.avatar,
    server_name: group.serverName,
    group_size: group.groupSize,
    active_hours: group.activeHours,
    playstyle: group.playstyle,
    discord: group.discord
  })
}

module.exports = {
  getGroups,
  addGroup
}
