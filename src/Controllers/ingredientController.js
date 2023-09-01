const IngredientRepository = require("../repositories/ingredientRepository");

class ingredientController {
    async findByDishId(request, response) {
        const  { dish_id }  = request.params;

        const ingredientsRepository = new IngredientRepository();
        const ingredients = await ingredientsRepository.findByDishId({ dish_id });

        return response.status(200).json(ingredients);
    };
};

module.exports = ingredientController;