const OrderCreateService = require("../services/orderCreateService");
const OrderDeleteService = require("../services/orderDeleteService");
const OrderRepository = require("../repositories/orderRepository");

class OrderController {
    async create(request, response) {
        const { id: user_id } = request.user;
        const { stepperCont: quantity, totalPrice: total_price, id: dish_id } = request.body;

        const orderRepository = new OrderRepository();
        const orderCreateService = new OrderCreateService(orderRepository);

        const order = await orderCreateService.execute({ quantity, total_price, user_id, dish_id });
        
        return response.status(201).json(order);
    };

    async delete(request, response) {
        const { order_id } = request.params;
        const { id: user_id } = request.user;

        const orderRepository = new OrderRepository();
        const orderDeleteService = new OrderDeleteService(orderRepository);

        const order = await orderDeleteService.execute({ user_id, order_id });

        response.status(200).json(order);
    };

    async getOrder(request,response) {
        const { id: user_id } = request.user;
        
        const orderRepository = new OrderRepository();
        const order = await orderRepository.findByUserId({ user_id });
        
        console.log(order)
        return response.status(200).json(order);
    }
};

module.exports = OrderController;