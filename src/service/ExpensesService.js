const AppError = require("../utils/AppError");

class ExpensesService {
    constructor(repository) {
        this.expensesRepository = repository;
    }

    async execute({user_id}){
        const expenses = await this.expensesRepository.getExpenses({user_id});

        return expenses;
    }

    async executeDelete({ user_id, transaction_id }) {
        const expense = await this.expensesRepository.getExpenses({ transaction_id });

        if (!expense) {
            throw new AppError("Transação não encontrada");
        } else if (user_id !== expense.id) {
            throw new AppError("Essa transação não pertence a esse usuário");
        }

        return await this.expensesRepository.deleteExpense({ transaction_id });
    }
}

module.exports = ExpensesService;