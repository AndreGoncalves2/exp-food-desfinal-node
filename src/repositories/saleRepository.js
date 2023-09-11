const knex = require("../database/knex");

class SaleRepository {
    async create({ user_id }) {
        const sale = await knex("sale").insert({ user_id });
        return sale;
    };

    async update({ sale_id, statusName }) {
        const sale = await knex("sale").update({ status: statusName }).where({ id: sale_id });
        return sale;
    };

    async getSale({ user_id, isAdm }) {
        if (!isAdm) {
            const sale = await knex("order")
            .join("dish", "order.dish_id", "=", "dish.id")
            .join("sale", "order.sale_id", "=", "sale.id")
            .select("sale.id", "sale.status", "sale.created_at", "dish.name", "order.quantity")
            .where("sale.user_id", user_id).where("order.invoice", 1).orderBy("order.id", "desc");
            
            return sale;
        } else {
            const sale = await knex("order")
            .join("dish", "order.dish_id", "=", "dish.id")
            .join("sale", "order.sale_id", "=", "sale.id")
            .select("sale.id", "sale.status", "sale.created_at", "dish.name", "order.quantity")
            .where("order.invoice", 1).orderBy("order.id", "desc");
            
            return sale;
        };
    };
};

module.exports = SaleRepository;