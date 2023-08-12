const knex = require("../database/knex");

class IngredientsController {
    async create({ ingredientsInsert }) {
        const ingredients = await knex("ingredients").insert(ingredientsInsert);
        return ingredients;
    };
};

module.exports = IngredientsController;