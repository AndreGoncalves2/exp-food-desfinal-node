const UserCreateService = require("../services/userCreateService");

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;
        
        const userCreateService = new UserCreateService();

        const user = await userCreateService.execute({ name, email, password });

        return response.json(user);

    };
};

module.exports = UsersController;