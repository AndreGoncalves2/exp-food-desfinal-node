const { Router } = require("express");

const SaleController = require("../Controllers/saleController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const saleRoutes = Router();

const saleController = new SaleController ();

saleRoutes.post("/", ensureAuthenticated, saleController.create);
saleRoutes.get("/", ensureAuthenticated, saleController.getSale);
saleRoutes.put("/", ensureAuthenticated, saleController.update);



module.exports = saleRoutes;