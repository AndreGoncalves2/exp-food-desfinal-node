const { Router } = require("express");

const usersRoutes = require("./users.routes");
const dishRoutes = require("./dish.routes");
const sessionsRoutes = require("./sessions.routes");
const favoriteRoutes = require("./favorite.routes");
const ingredientRoutes = require("./ingredient.routes");
const orderRoutes = require("./order.routes");
const saleRoutes = require("./sale.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/dish", dishRoutes);
routes.use("/session", sessionsRoutes);
routes.use("/favorite", favoriteRoutes);
routes.use("/ingredients", ingredientRoutes);
routes.use("/order", orderRoutes);
routes.use("/sale", saleRoutes);

module.exports = routes;