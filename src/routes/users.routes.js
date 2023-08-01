const { Router } = require("express");

const UserController = require("../Controllers/usersController");

const usersRoutes = Router();

const usersControllers = new UserController();


usersRoutes.post("/", usersControllers.create);

module.exports = usersRoutes;