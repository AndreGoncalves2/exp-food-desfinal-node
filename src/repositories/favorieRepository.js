const knex = require("../database/knex");

class FavoriteRepository {
    async create({ user_id, dish_id}) {
        const favorite = await knex("favorite").insert({ user_id, dish_id });
        return favorite;
    };
};
module.exports = FavoriteRepository;