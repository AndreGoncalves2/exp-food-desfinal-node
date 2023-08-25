const { Router } = require("express");

const DishController = require("../Controllers/dishController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const dishRoutes = Router();

const dishControllers = new DishController();
const upload = multer(uploadConfig.MULTER);

dishRoutes.post("/", ensureAuthenticated , upload.single("photo"), dishControllers.create);
dishRoutes.put("/", ensureAuthenticated , upload.single("photo"), dishControllers.update);
dishRoutes.delete("/:dish_id", ensureAuthenticated, dishControllers.delete);
dishRoutes.get("/", dishControllers.showDishes);
dishRoutes.get("/:dish_id", dishControllers.showDishAndIngredientsById);


module.exports = dishRoutes;