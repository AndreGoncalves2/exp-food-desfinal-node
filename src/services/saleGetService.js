class SaleGetService {
    constructor(userRepository, saleRepository) {
        this.userRepository = userRepository;
        this.saleRepository = saleRepository;
    };

    async execute({ user_id }) {

        const user = await this.userRepository.findById({ id: user_id });

        const isAdm = Boolean(user.adm);

        const sale = await this.saleRepository.getSale({ user_id, isAdm });

        return sale;
    };
};

module.exports = SaleGetService;