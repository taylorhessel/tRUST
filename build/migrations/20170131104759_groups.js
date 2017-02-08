exports.up = function(knex, Promise) {
    return knex.schema.createTable('groups', (table) => {
      table.increments()
      table.string('creator_name')
      table.string('creator_url')
      table.string('creator_avatar')
      table.string('server_name')
      table.integer('group_size')
      table.string('active_hours')
      table.string('playstyle')
      table.string('discord')
      table.timestamps(true, true)
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups')
}
