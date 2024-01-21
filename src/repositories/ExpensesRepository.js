const knex = require("../database/knex");

class ExpensesRepository {
    async getExpenses({user_id}){
        const expenses = await knex("expenses").where("user_id", user_id);

        return expenses;
    }
}

module.exports = ExpensesRepository;