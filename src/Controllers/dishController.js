const DishRepository = require("../repositories/dishRepository");
const DishCreateService = require("../services/dishCreateService");

class DishController {
    async create(request, response) {
        const {name, description, category, price} = request.body;
        
        const dishRepository = new DishRepository();
        const dishCreateService = new DishCreateService(dishRepository);

        const dish = await dishCreateService.execute({name, description, category, price});

        return response.status(201).json({ name, description, category, price });
    };
};

module.exports = DishController;