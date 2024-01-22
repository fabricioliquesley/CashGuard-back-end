const AppError = require("../utils/AppError");

class TransactionsService {
    constructor(repository) {
        this.transactionsRepository = repository;
    }

    async execute({ type, title, description, value, date, category, status, user_id }) {
        await this.transactionsRepository.insertTransaction({ 
            type, 
            title, 
            description, 
            value, 
            date,
            category, 
            status, 
            user_id 
        });
    }

    async executeGetTransactions({ user_id, title }) {
        return await this.transactionsRepository.getTransactions({ user_id, title });
    }

    async executeUpdateTransaction({ transaction_id, type, title, description, value, date, category, status }){
        return await this.transactionsRepository.updateTransaction({ 
            transaction_id, 
            type, 
            title, 
            description, 
            value, 
            date,
            category, 
            status, 
        });
    }
}

module.exports = TransactionsService;