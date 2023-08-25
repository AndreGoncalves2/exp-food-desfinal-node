const { Router } = require("express");

const IngredientsController = require("../Controllers/ingredientsController");

const ingredientsRoutes = Router();

const ingredientsController = new IngredientsController ();

ingredientsRoutes.get("/:dish_id", ingredientsController.findByDishId);

module.exports = ingredientsRoutes;