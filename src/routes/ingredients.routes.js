const { Router } = require("express");

const IngredientsController = require("../Controllers/ingredientsController");

const ingredientsRoutes = Router();

const ingredientsControllers = new IngredientsController();


ingredientsRoutes.post("/", ingredientsControllers.create);

module.exports = ingredientsRoutes;