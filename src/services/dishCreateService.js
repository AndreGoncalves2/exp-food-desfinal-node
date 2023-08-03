const AppError = require("../utils/AppError");

class DishCreateService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    };

    async execute({ name, description, category, price }) {
        if ( !name || !description || !category || !price) {
            throw new AppError("Preencha todos os campos.");
        };

        const dishExists = await this.dishRepository.findByName({ name });

        if (dishExists) {
            throw new AppError("Nome do prato já cadastrado.");
        };

        const dish = await this.dishRepository.create({name, description, category, price});
        return dish;
    };
};

module.exports = DishCreateService;