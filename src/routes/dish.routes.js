const { Router } = require("express");

const DishController = require("../Controllers/dishController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const dishRoutes = Router();

const dishControllers = new DishController();
const upload = multer(uploadConfig.MULTER);

dishRoutes.post("/",ensureAuthenticated, upload.single("photo"), dishControllers.create);

module.exports = dishRoutes;