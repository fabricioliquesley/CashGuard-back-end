const { Router } = require("express");

const userRoutes = require("./user.routes");
const sessionsRoute = require("../routes/sessions.routes");

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRoute);

module.exports = routes;