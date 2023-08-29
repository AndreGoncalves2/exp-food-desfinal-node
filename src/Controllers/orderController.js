const OrderCreateService = require("../services/orderCreateService");
const OrderRepository = require("../repositories/orderRepository");

class OrderController {
    async create(request, response) {
        const { id: user_id } = request.user;
        const { stepperCont: quantity, totalPrice: total_price, id: dish_id } = request.body;

        const orderRepository = new OrderRepository();
        const orderCreateService = new OrderCreateService(orderRepository);

        const order = await orderCreateService.execute({ quantity, total_price, user_id, dish_id });
        
        return response.status(201).json();
    };

    async getOrder(request,response) {
        const { id: user_id } = request.user;

        const orderRepository = new OrderRepository();
        const order = await orderRepository.findByUserId({ user_id });

        return response.status(200).json(order);
    }
};

module.exports = OrderController;