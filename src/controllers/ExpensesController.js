const ExpensesRepository = require("../repositories/ExpensesRepository");
const ExpensesService = require("../service/ExpensesService");

class ExpensesController {
    async index(request, response){
        const user_id = request.user.id;

        const expensesRepository = new ExpensesRepository();
        const expensesService = new ExpensesService(expensesRepository);

        const expenses = await expensesService.execute({user_id});

        response.status(201).json(expenses);
    }

    async delete(){

    }
}

module.exports = ExpensesController;