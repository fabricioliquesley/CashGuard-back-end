const AppError = require("../utils/AppError");

class IncomesService {
    constructor(repository) {
        this.incomesRepository = repository;
    }

    async execute({ user_id }) {
        const incomes = await this.incomesRepository.getIncomes({ user_id });

        return incomes;
    }

    async executeDelete({ user_id, transaction_id }) {
        const income = await this.incomesRepository.getIncomes({ transaction_id });

        if (!income) {
            throw new AppError("Transação não encontrada");
        } else if (user_id !== income.id) {
            throw new AppError("Essa transação não pertence a esse usuário");
        }

        return await this.incomesRepository.deleteIncome({ transaction_id });
    }
}

module.exports = IncomesService;