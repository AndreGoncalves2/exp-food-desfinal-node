const DishRepository = require("../repositories/dishRepository");
const IngredientsRepository = require("../repositories/ingredientsRepository");

const DishCreateService = require("../services/dishCreateService");

class DishController {
    async create(request, response) {
        const { name, description, photo, category, price, ingredients } = request.body;
        
        const dishRepository = new DishRepository();
        const ingredientsRepository = new IngredientsRepository();

        const dishCreateService = new DishCreateService(dishRepository, ingredientsRepository);

        const dish = await dishCreateService.execute({ name, description, photo, category, price, ingredients });
        
        return response.status(201).json({ name, description, photo, category, price });
    };
};

module.exports = DishController;