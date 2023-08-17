exports.up = knex => knex.schema.createTable("dish", table => {
    table.increments("id");
    table.text("name");
    table.text("description");
    table.text("img");
    table.text("category");
    table.text("price");
    
    
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});
  
exports.down = knex => knex.schema.dropTable("dish");