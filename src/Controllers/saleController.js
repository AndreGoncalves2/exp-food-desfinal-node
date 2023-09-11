const OrderRepository = require("../repositories/orderRepository");
const SaleRepository = require("../repositories/saleRepository");
const SaleCreateService = require("../services/saleCreateService");
const UserRepository = require("../repositories/userRepository");
const SaleGetService = require("../services/saleGetService");
const SaleUpdateService = require("../services/saleUpdateService");

class SaleController {
    async create(request, response) {
        const user = request.user;
        

        const saleRepository = new SaleRepository();
        const orderRepository = new OrderRepository();
        const saleCreateService = new SaleCreateService({ saleRepository, orderRepository });

        const sale = await saleCreateService.execute({ user_id: user.id });
        return response.status(201).json(sale);
    };

    async getSale(request, response) {
        const user = request.user;
        
        const saleRepository = new SaleRepository();
        const userRepository = new UserRepository();

        const saleCreateService = new SaleGetService(userRepository, saleRepository);

        const sale = await saleCreateService.execute({ user_id: user.id });

        return response.status(200).json(sale);      
    };

    async update(request, response) {
        const { statusName, sale } = request.body;
        const user = request.user;

        const saleRepository = new SaleRepository();
        const userRepository = new UserRepository();

        const saleUpdateService = new SaleUpdateService(userRepository, saleRepository);
        saleUpdateService.execute({  statusName, sale_id: sale, user_id: user.id });

        return response.status(200).json()
    };
};

module.exports = SaleController;