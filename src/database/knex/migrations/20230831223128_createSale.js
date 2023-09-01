exports.up = knex => knex.schema.createTable("sale", table => {
    table.increments("id");
    table.text("status").default("Pendente");
    
    table.integer("user_id").references("id").inTable("user").onDelete("CASCADE");
    
    table.timestamp("created_at").default(knex.fn.now());
});
  
exports.down = knex => knex.schema.dropTable("sale");