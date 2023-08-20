const FavoriteCreateService = require("../services/favoriteCreateService");
const FavoriteDeleteService = require("../services/favoriteDeleteService");
const FavoriteShowService = require("../services/favoriteShowService");
const FavoriteShowAllService = require("../services/favoriteShowAllService");

const FavoriteRepository = require("../repositories/favoriteRepository");

class FavoriteController {
    async create(request, response) {
        const { dishId } = request.body;
        const  { id }  = request.user;
        
        const favoriteRepository = new FavoriteRepository()
        const favoriteCreateService = new FavoriteCreateService(favoriteRepository);

        await favoriteCreateService.execute({ dish_id: dishId, user_id: id});

        return response.status(201).json();
    };

    async delete(request, response) {
        const { dishId } = request.params;
        const  { id }  = request.user;

        const favoriteRepository = new FavoriteRepository()
        const favoriteDeleteService = new FavoriteDeleteService(favoriteRepository);

        await favoriteDeleteService.execute({ dish_id: dishId, user_id: id });
        
        return response.status(200).json();
    };

    async find(request, response) {
        const  { id }  = request.user;
        const { dishId } = request.params;

        const favoriteRepository = new FavoriteRepository()
        const favoriteShowService = new FavoriteShowService(favoriteRepository);

        const favorite = await favoriteShowService.execute({ dish_id: dishId, user_id: id });

        return response.status(200).json(favorite);
    };

    async findAll(request, response) {
        const { id: user_id } = request.user;
        
        const favoriteRepository = new FavoriteRepository()
        const favoriteShowAllService = new FavoriteShowAllService(favoriteRepository);
        
        const favorites = await favoriteShowAllService.execute({ user_id });
        
        return response.status(200).json(favorites);
    };
};

module.exports = FavoriteController;