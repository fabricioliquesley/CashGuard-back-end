const knex = require("../database/knex");

class IncomesRepository {
    async getIncomes({ user_id, transaction_id = false }) {
        if (transaction_id){
            const [expenses] = await knex("incomes").where("id", transaction_id);

            return expenses;
        }

        const expenses = await knex("incomes").where("user_id", user_id);

        return expenses;
    }

    async deleteIncome({ transaction_id }) {
        return await knex("incomes").where("id", transaction_id).delete();
    }
}

module.exports = IncomesRepository;