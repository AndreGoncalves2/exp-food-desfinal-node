const { Router } = require("express");

const usersRoutes = require("./users.routes");
const dishRoutes = require("./dish.routes");
const sessionsRoutes = require("./sessions.routes");
const favoriteRoutes = require("./favorite.routes");
const ingredientsRoutes = require("./ingredients.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/dish", dishRoutes);
routes.use("/session", sessionsRoutes);
routes.use("/favorite", favoriteRoutes);
routes.use("/ingredients", ingredientsRoutes);

module.exports = routes;