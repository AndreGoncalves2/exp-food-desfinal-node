const { Router } = require("express");

const SaleController = require("../Controllers/saleController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const saleRoutes = Router();

const saleController = new SaleController ();

saleRoutes.post("/", ensureAuthenticated, saleController.create);


module.exports = saleRoutes;