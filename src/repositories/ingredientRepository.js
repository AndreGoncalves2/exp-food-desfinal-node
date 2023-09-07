const knex = require("../database/knex");

class IngredientRepository {
    async create({ ingredientsInsert }) {
        const ingredients = await knex("ingredient").insert(ingredientsInsert);
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