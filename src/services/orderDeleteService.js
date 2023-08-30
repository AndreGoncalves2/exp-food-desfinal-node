const AppError = require("../utils/AppError");

class OrderDeleteService {
    constructor(orderRepository){
        this.orderRepository = orderRepository;
    };

    async execute({ user_id, order_id }) {
        const [order] = await this.orderRepository.findByUserId({ user_id });

        const isUser = user_id == order.user_id;

        if(!isUser) {
            throw new AppError("Usuário invalido.");
        };

        const result = await this.orderRepository.delete({ order_id, user_id });
        return result;
    };
};

module.exports = OrderDeleteService;