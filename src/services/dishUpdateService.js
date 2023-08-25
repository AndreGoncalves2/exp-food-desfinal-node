const DiskStorage = require("../providers/diskStorage");

class DishUpdateService {
    constructor(disRepository, userRepository, ingredientsRepository) {
        this.disRepository = disRepository;
        this.userRepository = userRepository;
        this.ingredientsRepository = ingredientsRepository;
    }

    async execute({ dish_id, user_id, name, description, category, price, img, ingredients, oldImg }) {
        const arrayIngredient = ingredients.split(',');

        if ( !name || !description || !category || !price ) {
            throw new AppError("Preencha todos os campos.");
        };

        price = price.replace(/[a-zA-Z$]+/g, "").replace(/,/g, ".");

        const user = await this.userRepository.findById({ id: user_id });

        if (!Boolean(user.adm)) {
            throw new AppError("Usuário sem permissão.");
        };
        const diskStorage = new DiskStorage();

        await diskStorage.saveFile(img);
        await diskStorage.deleteFile(oldImg);

        this.disRepository.update({ name, description, category, price, img, dish_id })

        this.ingredientsRepository.deleteAllByDishId({ dish_id });

        if (arrayIngredient.length > 0) {

            const ingredientsInsert = arrayIngredient.map((ingredient) => {
                return {
                    name: ingredient,
                    dish_id
                };
            });

            await this.ingredientsRepository.create({ ingredientsInsert });
        };
    };
};

module.exports = DishUpdateService;