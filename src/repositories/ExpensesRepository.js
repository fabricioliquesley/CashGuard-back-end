const knex = require("../database/knex");

class ExpensesRepository {
    async getExpenses({user_id, transaction_id = false}){
        if(transaction_id){
            const expenses = await knex("expenses").where("id", transaction_id).first();

            return expenses;
        }

        const expenses = await knex("expenses").where("user_id", user_id);

        return expenses;
    }

    async deleteExpense({ transaction_id }) {
        return await knex("expenses").where("id", transaction_id).delete();
    }
}

module.exports = ExpensesRepository;