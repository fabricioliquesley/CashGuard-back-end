const knex = require("../database/knex");

class IncomesRepository {
    async getIncomes({user_id}){
        const expenses = await knex("incomes").where("user_id", user_id);

        return expenses;
    }
}

module.exports = IncomesRepository;