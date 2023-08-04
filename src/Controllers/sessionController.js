const knex = require("../database/knex");
const { compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

const { sign } = require("jsonwebtoken");
const authConfig = require("../configs/auth");

class SessionController {
    async create(request, response) {
        const { email, password } = request.body;

        const user = await knex("user").where({ email }).first();

        if (!user) {
            throw new AppError("Email ou senha incorreta.", 401);
        };

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email ou senha incorreta.", 401);
        };

        const { secret, expiresIn} = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });
        
        return response.status(200).json({ user, token });
    };
};

module.exports = SessionController;