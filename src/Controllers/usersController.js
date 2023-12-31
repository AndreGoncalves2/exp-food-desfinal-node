const UserCreateService = require("../services/userCreateService"); 
const UserRepository = require("../repositories/userRepository");

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const userRepository = new UserRepository();
        const userCreateService = new UserCreateService(userRepository);

        const [user] = await userCreateService.execute({ name, email, password });
        
        return response.status(201).json({ name, email, password });
    };
};

module.exports = UsersController;