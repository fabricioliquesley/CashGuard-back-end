const { Router, response } = require("express");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const TransactionsController = require("../controllers/TransactionsController");
const ExpensesController = require("../controllers/ExpensesController");
const IncomesController = require("../controllers/IncomesController");

const transactionsController = new TransactionsController();
const expensesController = new ExpensesController();
const incomesController = new IncomesController();

const transactionsRoutes = Router();

transactionsRoutes.post('/', ensureAuthenticated, transactionsController.create);
transactionsRoutes.get('/', ensureAuthenticated, transactionsController.index);
transactionsRoutes.get('/expenses', ensureAuthenticated, expensesController.index);
transactionsRoutes.get('/incomes', ensureAuthenticated, incomesController.index);

module.exports = transactionsRoutes;