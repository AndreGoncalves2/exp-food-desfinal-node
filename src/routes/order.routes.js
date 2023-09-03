const { Router } = require("express");

const OrderController = require("../Controllers/orderController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const orderRoutes = Router();

const orderController = new OrderController ();

orderRoutes.post("/", ensureAuthenticated, orderController.create);
orderRoutes.get("/:all", ensureAuthenticated, orderController.getOrder);
orderRoutes.delete("/:order_id", ensureAuthenticated, orderController.delete);

module.exports = orderRoutes;