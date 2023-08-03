const { Router } = require("express");

const DishController = require("../Controllers/dishController");

const dishRoutes = Router();

const dishControllers = new DishController();


dishRoutes.post("/", dishControllers.create);

module.exports = dishRoutes;