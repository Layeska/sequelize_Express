const TaskCategories = require("../models/taskscategories.models");
const Tasks = require("../models/tasks.models");
const Address = require("../models/addresses.models");
const Users = require("../models/users.models");
const Categories = require("../models/categories.models");

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll({attributes: ["id", "username", "email"]});
            return result;
        } catch(error) { throw error; }
    }

    static async getById(id) {
        try {
            const result = await Users.findByPk(id, {attributes: ["id", "username", "email"]});
            return result;
        } catch(error) { throw error;}
    }

    static async getUserJoinAddress(id) {
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: ["id", "username"],
                include: {
                    model: Address,
                    as: "home",
                    attributes: {
                        exclude: ["id", "user_id", "user_id"]
                    }
                }
            });
            return result;
        } catch(error) { throw(error);}
    }

    static async getUserJoinTasks(id) {
        try {
            const result =  await Users.findOne({
                where: {id},
                attributes: ["id", "username"],
                include: {
                    model: Tasks,
                    as: "todo",
                    attributes: ["title", "description", "is_complete"],
                    include: {
                        model: TaskCategories,
                        as: "categories",
                        attributes: ["category_id"],
                        include: {
                            model: Categories,
                            as: "categories",
                            attributes: ["name"]
                        }
                    }
                }
            });
            return result;
        } catch(error) { throw(error); }
    }

    static async addUser(body) {
        try {
            const result = await Users.create(body);
            return result;
        } catch(error) { throw(error); }
    }

    static async update(id, body) {
        try {
            const result = await Users.update(body, {where: {id}});
            return result;
        } catch(error) { throw(error); }
    }
}

module.exports = UserServices;