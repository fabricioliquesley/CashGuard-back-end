const { Router, response } = require("express");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const TransactionsController = require("../controllers/TransactionsController");

const transactionsController = new TransactionsController();

const transactionsRoutes = Router();

transactionsRoutes.post('/expenses', ensureAuthenticated, transactionsController.create);

module.exports = transactionsRoutes;