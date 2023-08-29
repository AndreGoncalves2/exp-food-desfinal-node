const knex = require("../database/knex");

class OrderRepository {
    async create({ user_id, dish_id, status }) {
        const order = await knex("order").insert({ user_id, dish_id, status });
        return order;
    };
};

module.exports = OrderRepository;