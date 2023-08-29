const { Router } = require("express");

const FavoriteController = require("../Controllers/favoriteController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const favoriteRoutes = Router();

const favoriteController = new FavoriteController();


favoriteRoutes.post("/", ensureAuthenticated, favoriteController.create);
favoriteRoutes.delete("/:dishId", ensureAuthenticated, favoriteController.delete);
favoriteRoutes.get("/:dishId", ensureAuthenticated, favoriteController.find);
favoriteRoutes.get("/", ensureAuthenticated, favoriteController.findAll);
favoriteRoutes.get("/user/index", ensureAuthenticated, favoriteController.getFavoriteByUser);

module.exports = favoriteRoutes;