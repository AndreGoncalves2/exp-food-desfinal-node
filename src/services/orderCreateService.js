const AppError = require("../utils/AppError");

class OrderCreateService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    };

    async execute({ quantity, total_price, user_id, dish_id }) {
        if (!quantity || !total_price || !dish_id || !user_id){
            throw new AppError("Produtor invalido");
        };

        const order = await this.orderRepository.create({ quantity, total_price, user_id, dish_id });
        return order;
    };
};

module.exports = OrderCreateService;