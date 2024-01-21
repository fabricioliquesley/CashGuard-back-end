const { Router, response } = require("express");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const TransactionsController = require("../controllers/TransactionsController");
const ExpensesController = require("../controllers/ExpensesController");

const transactionsController = new TransactionsController();
const expensesController = new ExpensesController();

const transactionsRoutes = Router();

transactionsRoutes.post('/', ensureAuthenticated, transactionsController.create);
transactionsRoutes.get('/', ensureAuthenticated, transactionsController.index);
transactionsRoutes.get('/expenses', ensureAuthenticated, expensesController.index)

module.exports = transactionsRoutes;