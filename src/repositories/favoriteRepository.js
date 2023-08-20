const knex = require("../database/knex");

class FavoriteRepository {
    async create({ user_id, dish_id}) {
        const favorite = await knex("favorite").insert({ user_id, dish_id });
        return favorite;
    };

    async delete({ user_id, dish_id }) {
        const favorite = await knex("favorite").delete().where({ user_id, dish_id });
        return favorite;
    };

    async findAllByUserId({ user_id }) {
        const favorite = await knex("favorite").where({ user_id });
        return favorite;
    };

    async findByUserAndDish({ user_id, dish_id }) {
        const favorites = await knex("favorite").where({ user_id, dish_id });
        return favorites;
    };
};
module.exports = FavoriteRepository;