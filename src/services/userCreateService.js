const AppError = require("../utils/AppError");

const { hash } = require("bcryptjs");
class UserCreateService {
    async execute({ name, email, password}) {
        if(!name ||!email ||!password) {
            throw new AppError("Preencha todos os campos");
        }

        const hashedPassword = await hash(password, 8);
        const userCreated = {
            name,
            email,
            password: hashedPassword
        }

        return userCreated;
    };
};

module.exports = UserCreateService;