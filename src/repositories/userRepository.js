const knex = require("../database/knex");

class UserRepository {
    async create({name, email, password}) {
        const user = await knex("user").insert({ name, email, password });
        return user;
    };

    async findByEmail({ email }) {
        const [user] = await knex("user").where({ email });
        return user;
    };

    async findById({ id }) {
        const [user] = await knex("user").where({ id });
        return user;
    };
};

module.exports = UserRepository;