exports.up = knex => knex.schema.createTable("order", table => {
    table.increments("id");
    table.integer("quantity");
    table.decimal("total_price");
    table.boolean("invoice").default("false");
    
    table.integer("user_id").references("id").inTable("user").onDelete("CASCADE");
    table.integer("dish_id").references("id").inTable("dish").onDelete("CASCADE");
    table.integer("sale_id").references("id").inTable("sale").default(null).onDelete("CASCADE");    
});
  
exports.down = knex => knex.schema.dropTable("order");