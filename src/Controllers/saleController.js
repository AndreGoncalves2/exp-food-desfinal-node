const OrderRepository = require("../repositories/orderRepository");
const SaleRepository = require("../repositories/saleRepository");
const SaleCreateService = require("../services/saleCreateService");

class SaleController {
    async create(request, response) {
        const user = request.user;
        

        const saleRepository = new SaleRepository();
        const orderRepository = new OrderRepository();
        const saleCreateService = new SaleCreateService({ saleRepository, orderRepository });

        saleCreateService.execute({ user_id: user.id });
    }
}

module.exports = SaleController;