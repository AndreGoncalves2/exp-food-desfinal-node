const knex = require("../database/knex");

class DishRepository {
    async create({ name, description, category, price}) {
        const dish = await knex("dish").insert({ name, description, category, price });
        return dish;
    };

    async findByName({ name }) {
        const [dish] = await knex("dish").where({ name });
        return dish;
    };
};

module.exports = DishRepository;