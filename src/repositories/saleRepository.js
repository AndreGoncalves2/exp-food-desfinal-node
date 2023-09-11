const knex = require("../database/knex");

class SaleRepository {
    async create({ user_id }) {
        const sale = await knex("sale").insert({ user_id });
        return sale;
    };

    async getSale({ user_id }) {
        const sale = await knex("sale").join("order", "sale.id", "=", "order.sale_id")
        .join("dish", "order.dish_id", "=", "dish.id").select("sale.id AS sale_id", "dish.*", "order.dish_id", knex.raw('(SELECT GROUP_CONCAT(name, ", ") FROM dish INNER JOIN sale id = sale.dish_id) AS ingredient') ).where("sale.user_id", user_id);
        
        // .select('dish.*', knex.raw('(SELECT GROUP_CONCAT(, ", ") FROM ingredient WHERE dish_id = dish.id) AS ingredient')).select('dish.*', knex.raw('(SELECT GROUP_CONCAT(name, ", ") FROM ingredient WHERE dish_id = dish.id) AS ingredient')).select('dish.*', knex.raw('(SELECT GROUP_CONCAT(name, ", ") FROM ingredient WHERE dish_id = dish.id) AS ingredient')).select('dish.*', knex.raw('(SELECT GROUP_CONCAT(name, ", ") FROM ingredient WHERE dish_id = dish.id) AS ingredient')).select('dish.*', knex.raw('(SELECT GROUP_CONCAT(name, ", ") FROM ingredient WHERE dish_id = dish.id) AS ingredient')).select('dish.*', knex.raw('(SELECT GROUP_CONCAT(name, ", ") FROM ingredient WHERE dish_id = dish.id) AS ingredient')).select('dish.*', knex.raw('(SELECT GROUP_CONCAT(name, ", ") FROM ingredient WHERE dish_id = dish.id) AS ingredient')).select('dish.*', knex.raw('(SELECT GROUP_CONCAT(name, ", ") FROM ingredient WHERE dish_id = dish.id) AS ingredient'))


        console.log(sale);
        return sale;
    };
};

module.exports = SaleRepository;