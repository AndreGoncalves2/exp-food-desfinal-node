exports.up = knex => knex.schema.createTable("favorite", table => {
    table.integer("user_id").references("id").inTable("user").onDelete("CASCADE");
    table.integer("dish_id").references("id").inTable("dish").onDelete("CASCADE");
});
  
exports.down = knex => knex.schema.dropTable("favorite");