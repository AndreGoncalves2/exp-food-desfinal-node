const AppError = require("../utils/AppError");

class DishCreateService {
    constructor(dishRepository, ingredientsRepository, userRepository) {
        this.dishRepository = dishRepository;
        this.ingredientsRepository = ingredientsRepository;
        this.userRepository = userRepository;
    };

    async execute({ name, description, category, price, ingredients, img, id}) {
        const arrayIngredient = ingredients.split(',');

        if ( !name || !description || !category || !price ) {
            throw new AppError("Preencha todos os campos.");
        };

        const dishExists = await this.dishRepository.findByName({ name });

        if (dishExists) {
            throw new AppError("Nome do prato já cadastrado.");
        };

        price = price.replace(/[a-zA-Z$]+/g, "").replace(/,/g, ".");

        const user = await this.userRepository.findById({ id });

        if (!Boolean(user.adm)) {
            throw new AppError("Usuário sem permissão.");
        };
        
        const [dish] = await this.dishRepository.create({ name, description, category, price, img, id });

        if (arrayIngredient.length > 0) {
            const ingredientsInsert = arrayIngredient.map((ingredient) => {
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