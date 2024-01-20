const { Router, response } = require("express");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const TransactionsController = require("../controllers/TransactionsController");

const transactionsController = new TransactionsController();

const transactionsRoutes = Router();

transactionsRoutes.post('/', ensureAuthenticated, transactionsController.create);
transactionsRoutes.get('/', ensureAuthenticated, transactionsController.index);

module.exports = transactionsRoutes;