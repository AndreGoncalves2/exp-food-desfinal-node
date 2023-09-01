const knex = require("../database/knex");

class OrderRepository {
    async create({ quantity, total_price, user_id, dish_id }) {
        const order = await knex("order").insert({ quantity, total_price, user_id, dish_id });
        return order;
    };

    async delete({ order_id=null, user_id }) {
        let query = knex("order").where({ user_id });

        if (order_id) {
            query = query.where({ id:order_id});
        };

        const order = query.delete();
        
        return order;
    };

    async update({ user_id, sale_id }) {
        const order = await knex("order").update({ sale_id }).where({ user_id });
        return order;
    };

    async findByUserId({ user_id }) {
        const order = await knex("order").join("dish", "dish_id", "=", "dish.id")
        .where({ user_id }).select("order.*", "dish.img", "dish.name");
        return order;
    };
};

module.exports = OrderRepository;