class SaleCreateService {
    constructor({ saleRepository, orderRepository }) {
        this.saleRepository = saleRepository;
        this.orderRepository = orderRepository;
    };

    async execute({ user_id }) {
        const invoice = true;
        try {
            const [sale] = await this.saleRepository.create({ user_id });
    
            const order = await this.orderRepository.update({ user_id, invoice, sale_id: sale });

            return {sale, order};
            
        } catch (error) {
            console.error(error);
        }
    };
};

module.exports = SaleCreateService;