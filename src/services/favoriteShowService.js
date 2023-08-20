class FavoriteShowService {
    constructor(favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    };
    
    async execute({ user_id, dish_id }) {
        const favorites = await this.favoriteRepository.findByUserAndDish({ user_id, dish_id });
        return favorites;
    };
};

module.exports = FavoriteShowService;