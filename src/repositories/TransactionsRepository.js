const knex = require("../database/knex");

class TransactionsRepository {
    async insertTransaction({ type, title, description, value, category, status, user_id }) {
        await knex(type).insert({
            title,
            description,
            value,
            category,
            status,
            user_id
        });
    }
}

module.exports = TransactionsRepository;