const knex = require("../database/knex");

class UserRepository {
    async create({name, email, password}) {
        await knex("user").insert({ name, email, password });
    };

    async findByEmail({ email }) {
        const [user] = await knex("user").where({ email });
        return user;
    };
};

module.exports = UserRepository;