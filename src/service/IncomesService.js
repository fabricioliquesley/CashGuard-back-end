class IncomesService {
    constructor(repository){
        this.incomesRepository = repository;
    }   

    async execute({user_id}){
        const incomes = await this.incomesRepository.getIncomes({user_id});

        return incomes;
    }
}

module.exports = IncomesService;