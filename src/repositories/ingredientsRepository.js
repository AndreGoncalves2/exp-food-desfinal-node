const knex = require("../database/knex");

class IngredientsController {
    async create({ name, dish_id}) {
        const ingredients = await knex("ingredients").insert({ name, dish_id });
        return ingredients;
    };
};

module.exports = IngredientsController;