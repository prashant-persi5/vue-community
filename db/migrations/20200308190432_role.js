exports.up = (knex, Promise) => {
  return knex.schema.createTable('role', (table) => {
    table.increments();
    table.text('name').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('role');
};
