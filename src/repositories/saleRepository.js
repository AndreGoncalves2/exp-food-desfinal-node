const knex = require("../database/knex");

class SaleRepository {
    async create({ user_id }) {
        const sale = await knex("sale").insert({ user_id });
        return sale;
    };

    async getSale({ user_id }) {
        const sale = await knex("sale").join("order", "sale.id", "=", "order.sale_id")
        .join("dish", "order.dish_id", "=", "dish.id").where("sale.user_id", user_id)
        
            
        console.log(sale);
        return sale;
    }

};

module.exports = SaleRepository;