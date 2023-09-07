const AppError = require("../utils/AppError");

class SaleUpdateService {
    constructor(userRepository, saleRepository) {
        this.userRepository = userRepository;
        this.saleRepository = saleRepository;
    };

    async execute ({ user_id, sale_id, statusName  }) {
        const user = await this.userRepository.findById({ id: user_id });
        const isAdm = Boolean(user.adm); 
        statusName = statusName.replace(" ", "");

        if (!isAdm) {
            throw new AppError("Usuário sem permissão");
        };
        console.log(statusName)
        const sale = await this.saleRepository.update({ sale_id, statusName });
        return sale;
    };
};

module.exports = SaleUpdateService;