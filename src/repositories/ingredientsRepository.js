const knex = require("../database/knex");

class IngredientsRepository {
    async create({ ingredientsInsert }) {
        const ingredients = await knex("ingredients").insert(ingredientsInsert);
        return ingredients;
    };

    async findByDishId({ dish_id }) {
        const ingredients= await knex("ingredients").where({ dish_id });
        return ingredients;
    }
};

module.exports = IngredientsRepository;