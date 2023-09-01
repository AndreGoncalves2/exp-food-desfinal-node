const knex = require("../database/knex");

class IngredientRepository {
    async create({ ingredientInsert }) {
        const ingredients = await knex("ingredient").insert(ingredientInsert);
        return ingredients;
    };

    async deleteAllByDishId({ dish_id }) {
        await knex("ingredient").delete().where({ dish_id });
    };

    async findByDishId({ dish_id }) {
        const ingredients= await knex("ingredient").where({ dish_id });
        return ingredients;
    };
};

module.exports = IngredientRepository;