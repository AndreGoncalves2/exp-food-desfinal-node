const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class DishRepository {
    async create({ name, description, category, price, img, id}) {
        const [consult] = await knex("user").where({ id }).select("adm");

        if (!Boolean(consult.adm)) {
            throw new AppError("Usuário sem permissão.");
        };

        const dish = await knex("dish").insert({ name, description, category, price, img });
        return dish;
    };

    async findAll() {
        return await knex("dish");
    };

    async findByName({ name }) {
        const [dish] = await knex("dish").where({ name });
        return dish;
    };
};

module.exports = DishRepository;