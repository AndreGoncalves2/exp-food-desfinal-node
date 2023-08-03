exports.up = knex => knex.schema.createTable("Ingredients", table => {
    table.increments("id");
    table.integer("dish_id").references("id").inTable("dish").onDelete("CASCADE");
    table.text("name");
});
  
exports.down = knex => knex.schema.dropTable("Ingredients");