const AppError = require("../utils/AppError");

class FavoriteCreateService {
    constructor(favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    };

    async execute({ user_id, dish_id }) {
        if (!user_id || !dish_id) {
            throw new AppError("Nao foi possível adicionar esse item, tente novamente");
        };

        const favorite = await this.favoriteRepository.create({ user_id, dish_id });
    };
};