class SaleCreateService {
    constructor({ saleRepository, orderRepository }) {
        this.saleRepository = saleRepository;
        this.orderRepository = orderRepository;
    };

    async execute({ user_id }) {
        // try {
            // const [sale] = await this.saleRepository.create({ user_id });
    
            // const order = await this.orderRepository.update({ user_id, sale_id: sale });
            await this.orderRepository.delete({ user_id })
            // return {sale, order};
            
        // }
    };
};

module.exports = SaleCreateService;