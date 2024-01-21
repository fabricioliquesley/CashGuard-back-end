const AppError = require("../utils/AppError");
const knex = require("../database/knex");
const { hash } = require("bcryptjs");

const UserRepository = require("../repositories/UserRepository");
const UserService = require("../service/UserService")

class UserController {
    async create(request, response) {
        const { name, email, password } = request.body;

        if (name == "" || email == "" || password == "") {
            throw new AppError("Preencha todos os campos para cadastrar");
        }

        const userExists = await knex("users").where("email", email).first();

        if (userExists) {
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

    async update(request, response) {
        const { name, email, old_password, password } = request.body;
        const user_id = request.user.id;

        const userRepository = new UserRepository();
        const userService = new UserService(userRepository);

        const user = await userService.executeUpdateUser({ user_id, name, email, old_password, password })

        response.status(201).json(user);
    }
}

module.exports = UserController;