class FavoriteShowAllService {
    constructor(favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    };

    async execute({ user_id }) {
        const favorites = await this.favoriteRepository.findAllByUserId({ user_id });
        return favorites;
    };
};

module.exports = FavoriteShowAllService;