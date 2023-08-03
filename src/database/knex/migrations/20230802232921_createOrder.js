exports.up = knex => knex.schema.createTable("order", table => {
    table.increments("id");
    table.integer("user_id").references("id").inTable("user").onDelete("CASCADE");
    table.integer("dish_id").references("id").inTable("dish").onDelete("CASCADE");
});
  
exports.down = knex => knex.schema.dropTable("order");