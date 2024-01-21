class ExpensesService {
    constructor(repository) {
        this.expensesRepository = repository;
    }

    async execute({user_id}){
        const expenses = await this.expensesRepository.getExpenses({user_id});

        return expenses;
    }
}

module.exports = ExpensesService;