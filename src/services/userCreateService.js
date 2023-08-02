const AppError = require("../utils/AppError");

const { hash } = require("bcryptjs");
class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    };

    async execute({ name, email, password}) {
        if(!name ||!email ||!password) {
            throw new AppError("Preencha todos os campos");
        };

        const userExists = await this.userRepository.findByEmail({email});
        console.log(userExists)
        if (userExists) {
            throw new AppError("E-mail já cadastrado");
        }

        await this.userRepository.create({name, email, password})
    };
};

module.exports = UserCreateService;