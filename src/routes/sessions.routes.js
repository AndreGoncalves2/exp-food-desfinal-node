const { Router } = require("express");

const SessionController = require("../Controllers/sessionController");

const sessionsRoutes = Router();

const sessionController = new SessionController ();

sessionsRoutes.post("/", sessionController.create);

module.exports = sessionsRoutes;