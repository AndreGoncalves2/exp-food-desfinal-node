const DishRepository = require("../repositories/dishRepository");
const IngredientRepository = require("../repositories/ingredientRepository");
const UserRepository = require("../repositories/userRepository");

const DishCreateService = require("../services/dishCreateService");
const DishUpdateService = require("../services/dishUpdateService");


const DishDeleteService = require("../services/dishDeleteService");

class DishController {
    async create(request, response) {
        const { id } = request.user;
        const { name, description, category, price, ingredients } = request.body;
        const img = request.file.filename;
        

        const dishRepository = new DishRepository();
        const ingredientRepository = new IngredientRepository();
        const userRepository = new UserRepository();

       

        const dishCreateService = new DishCreateService(dishRepository, ingredientRepository, userRepository);

        await dishCreateService.execute({ name, description, img, category, price, ingredients, id });
       
        
        return response.status(201).json();
     
    };

    async update(request, response) {
        const { id: dish_id, name, description, category, price, ingredients, oldImg } = request.body;
        const { id: user_id } = request.user;
        const img = request.file.filename;
        

        const dishRepository = new DishRepository();
        const userRepository = new UserRepository();
        const ingredientRepository = new IngredientRepository();

        const dishUpdatedService = new DishUpdateService(dishRepository, userRepository, ingredientRepository);

        dishUpdatedService.execute({ dish_id, user_id, name, description, category, price, img, ingredients, oldImg });
       
        return response.status(204).json();
    };

    async showDishes(request, response) {
        const dishRepository = new DishRepository();
    
        const dishes = await dishRepository.findAll();

        response.status(200).json(dishes);
    };

    async showDishAndIngredientsById(request, response) {
        const  { dish_id }  = request.params;
        
        const dishRepository = new DishRepository();
    
        const dish = await dishRepository.findDishAndIngredients({ dish_id });

        response.status(200).json(dish);
    };

    async delete(request, response) {
        const { id } = request.user;
        const { dish_id }  = request.params;

        const dishRepository = new DishRepository();
        const userRepository = new UserRepository();
        
        const dishDeleteService = new DishDeleteService({ dishRepository, userRepository });

        const order = await dishDeleteService.execute({ dish_id, id });
        
        return response.status(200).json(order);
    };
};

module.exports = DishController;