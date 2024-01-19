const { Router } = require('express');

const userRoutes = Router();

userRoutes.get("/", (request, response) => {
    response.send("ola, mundo! Esse é o CashGuard.");
});

module.exports = userRoutes;