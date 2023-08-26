const IngredientsRepository = require("../repositories/ingredientsRepository");

class ingredientsController {
    async findByDishId(request, response) {
        const  { dish_id }  = request.params;

        const ingredientsRepository = new IngredientsRepository();
        const ingredients = await ingredientsRepository.findByDishId({ dish_id });

        return response.status(200).json(ingredients);
    };
};

module.exports = ingredientsController;