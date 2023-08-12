const AppError = require("../utils/AppError");

class DishCreateService {
    constructor(dishRepository, ingredientsRepository) {
        this.dishRepository = dishRepository;
        this.ingredientsRepository = ingredientsRepository;
    };

    async execute({ name, description, photo,  category, price, ingredients }) {
        if ( !name || !description || !category || !price) {
            throw new AppError("Preencha todos os campos.");
        };

        const dishExists = await this.dishRepository.findByName({ name });

        if (dishExists) {
            throw new AppError("Nome do prato já cadastrado.");
        };

        
        price = price.replace(/[a-zA-Z$]+/g, "").replace(/,/g, ".");
        
        const [dish] = await this.dishRepository.create({ name, description, category, price });

        if (ingredients.length > 0) {
            const ingredientsInsert = ingredients.map((ingredient) => {
                return {
                    name: ingredient,
                    dish_id: dish
                };
            });

            await this.ingredientsRepository.create({ ingredientsInsert });
        };
    };
};

module.exports = DishCreateService;