const knex = require("../database/knex");

class DishRepository {
    async create({ name, description, category, price, img }) {
        const dish = await knex("dish").insert({ name, description, category, price, img });
        return dish;
    };

    async update({ name, description, category, price, img, dish_id }) {
        const dishUpdated = await knex("dish").update({ name, description, category, price, img }).where({ id: dish_id });
        return dishUpdated;
    };

    async delete({ dish_id }) {
        await knex("dish").delete().where({ id: dish_id });
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
        .select('dish.*', knex.raw('(SELECT GROUP_CONCAT(name, ", ") FROM ingredient WHERE dish_id = dish.id) AS ingredient')).where({ id: dish_id });

        return dish;
    };

    async findDishByNameOrIngredient({ name }) {
        const dishes = await knex("dish").join("ingredient", "dish.id", "=", "ingredient.dish_id")
        .select("dish.*", "ingredient.name AS ingredient", "ingredient.dish_id" )
        .where("dish.name", "like", `%${name}%`)
        .orWhere("ingredient.name", "like", `%${name}%`)
        .groupBy('dish.id');

        return dishes;
    };
};

module.exports = DishRepository;