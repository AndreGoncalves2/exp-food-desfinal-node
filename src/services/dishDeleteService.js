const DiskStorage = require("../providers/diskStorage");

class DishDeleteService {
    constructor({ dishRepository, userRepository }) {
        this.dishRepository = dishRepository;
        this.userRepository = userRepository;
    };

    async execute({ dish_id, id }){
        const user = await this.userRepository.findById({ id });

        if (!Boolean(user.adm)) throw new AppError("Usuário sem permissão.");

        const dish = await this.dishRepository.findById({ id: dish_id });

        const diskStorage = new DiskStorage();
        await diskStorage.deleteFile(dish.img);

        await this.dishRepository.delete({ dish_id });
    };
};

module.exports = DishDeleteService;