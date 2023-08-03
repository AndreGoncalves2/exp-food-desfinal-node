const IngredientsRepository = require("../repositories/ingredientsRepository");

class IngredientsController {
    async create(request, response) {
        const { name, dish_id } = request.body;

        const ingredientsRepository = new IngredientsRepository();
        await ingredientsRepository.create({ name, dish_id });

        return response.status(201).json({ name, dish_id });
    };
};

module.exports = IngredientsController;