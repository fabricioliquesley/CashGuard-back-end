const AppError = require("../utils/AppError");
const knex = require("../database/knex");
const { hash } = require("bcryptjs");

class UserController {
    async create(request, response) {
        const { name, email, password } = request.body;

        if (name == "" || email == "" || password == "") {
            throw new AppError("Preencha todos os campos para cadastrar");
        }

        const userExists = await knex("users").where("email", email).first();

        if (userExists){
            throw new AppError("Email já em uso!");
        }

        const hashedPassword = await hash(password, 8)

        await knex("users").insert({
            name,
            email,
            password: hashedPassword,
        })

        response.status(201).json();
    }
}

module.exports = UserController;