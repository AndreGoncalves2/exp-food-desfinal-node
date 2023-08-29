const { Router } = require("express");

const OrderController = require("../Controllers/orderController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const orderRoutes = Router();

const orderController = new OrderController ();

orderRoutes.post("/", ensureAuthenticated, orderController.create);
orderRoutes.get("/", ensureAuthenticated, orderController.getOrder);

module.exports = orderRoutes;