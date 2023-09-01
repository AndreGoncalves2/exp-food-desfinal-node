const { Router } = require("express");

const IngredientController = require("../Controllers/ingredientController");

const ingredientRoutes = Router();

const ingredientController = new IngredientController ();

ingredientRoutes.get("/:dish_id", ingredientController.findByDishId);

module.exports = ingredientRoutes;