const AppError = require("../utils/AppError");

class FavoriteDeleteService {
    constructor(favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    };

    async execute({ user_id, dish_id }) {
        if (!user_id || !dish_id) {
            throw new AppError("Tente novamente");
        };

        const favorite = await this.favoriteRepository.delete({ user_id, dish_id });
        return favorite;
    };
};

module.exports = FavoriteDeleteService;