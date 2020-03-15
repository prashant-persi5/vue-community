exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('description');
    table.text('image_url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('category');  
};
