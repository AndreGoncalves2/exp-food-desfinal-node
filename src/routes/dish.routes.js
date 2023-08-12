const { Router } = require("express");

const DishController = require("../Controllers/dishController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishRoutes = Router();

const dishControllers = new DishController();


dishRoutes.post("/",ensureAuthenticated, dishControllers.create);

module.exports = dishRoutes;