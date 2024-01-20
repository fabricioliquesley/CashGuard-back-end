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

    async getTransactions({ user_id, title }) {
        let transactions;

        if (title) {
            transactions = await knex("incomes")
                .select([
                    "incomes.title",
                    "incomes.description",
                    "incomes.value",
                    "incomes.category",
                    "incomes.status",
                ])
                .where("incomes.user_id", user_id)
                .whereLike("incomes.title", `%${title}%`)
                .union(function () {
                    this.select([
                        "expenses.title",
                        "expenses.description",
                        "expenses.value",
                        "expenses.category",
                        "expenses.status",
                    ]).from("expenses")
                        .innerJoin("incomes", "expenses.user_id", "=", "incomes.user_id")
                        .where("incomes.user_id", user_id)
                        .whereLike("expenses.title", `%${title}%`)
                        .groupBy(["incomes.id", "expenses.id"])
                        .orderBy("value")
                });
        } else {
            transactions = await knex("incomes")
                .select([
                    "incomes.title",
                    "incomes.description",
                    "incomes.value",
                    "incomes.category",
                    "incomes.status",
                ])
                .union(function () {
                    this.select([
                        "expenses.title",
                        "expenses.description",
                        "expenses.value",
                        "expenses.category",
                        "expenses.status",
                    ]).from("expenses")
                        .innerJoin("incomes", "expenses.user_id", "=", "incomes.user_id")
                        .where("incomes.user_id", user_id)
                        .groupBy(["incomes.id", "expenses.id"])
                        .orderBy("value")
                });
        }

        return transactions;
    }
}

module.exports = TransactionsRepository;