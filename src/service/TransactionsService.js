const AppError = require("../utils/AppError");

class TransactionsService {
    constructor(repository) {
        this.transactionsRepository = repository;
    }

    async execute({ type, title, description, value, category, status, user_id }) {
        await this.transactionsRepository.insertTransaction({ type, title, description, value, category, status, user_id });
    }

    async executeGetTransactions({user_id}){
        return await this.transactionsRepository.getTransactions({ user_id});
    }
}

module.exports = TransactionsService;