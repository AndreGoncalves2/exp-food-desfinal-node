const knex = require("../database/knex");

class SaleRepository {
    async create({ user_id }) {
        const sale = await knex("sale").insert({ user_id });
        return sale;
    };
};

module.exports = SaleRepository;