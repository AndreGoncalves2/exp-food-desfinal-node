const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class DishRepository {
    async create({ name, description, category, price, img}) {
        const dish = await knex("dish").insert({ name, description, category, price, img });
        return dish;
    };

    async findAll() {
        return await knex("dish");
    };

    async findByName({ name }) {
        const [dish] = await knex("dish").where({ name });
        return dish;
    };

    async findById({ id }) {
        const [dish] = await knex("dish").where({ id });
        return dish;
    };

    async findDishAndIngredients({ dish_id }) {
        const [dish] = await knex('dish')
        .select('dish.*', knex.raw('(SELECT GROUP_CONCAT(name, ", ") FROM ingredients WHERE dish_id = dish.id) AS ingredients'))
        return dish;
    }
};

module.exports = DishRepository;