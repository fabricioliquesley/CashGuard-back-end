const IncomesRepository = require("../repositories/IncomesRepository");
const IncomesService = require("../service/IncomesService");

class IncomesController {
    async index(request, response){
        const user_id = request.user.id;

        const incomesRepository = new IncomesRepository();
        const incomesService = new IncomesService(incomesRepository);

        const incomes = await incomesService.execute({user_id});

        response.status(201).json(incomes);
    }
}

module.exports = IncomesController;