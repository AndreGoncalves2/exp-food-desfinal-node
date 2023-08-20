const { Router } = require("express");

const usersRoutes = require("./users.routes");
const dishRoutes = require("./dish.routes");
const sessionsRoutes = require("./sessions.routes");
const favoriteController = require("./favorite.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/dish", dishRoutes);
routes.use("/session", sessionsRoutes);
routes.use("/favorite", favoriteController);

module.exports = routes;