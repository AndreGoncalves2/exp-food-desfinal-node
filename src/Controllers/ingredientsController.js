const IngredientsRepository = require("../repositories/ingredientsRepository");

class ingredientsController {
    async findByDishId(request, response) {
        const  { dish_id }  = request.params;
<<<<<<< HEAD

        const ingredientsRepository = new IngredientsRepository();
        const ingredients = await ingredientsRepository.findByDishId({ dish_id });
=======
        // console.log(id);

        const ingredientsRepository = new IngredientsRepository();
        const ingredients = await ingredientsRepository.findByDishId({ dish_id });
        console.log(ingredients);
>>>>>>> a7e493337018907487cc2a0c076898df5da0bd80

        return response.status(200).json(ingredients);
    };
};

module.exports = ingredientsController;