const tasksServices = require("../models/taskscategories.models");
const Tasks = require("../models/tasks.models");
const Categories = require("../models/categories.models");

class TasksServices {
    static async getAll() {
        try {
            const result = await Tasks.findAll({attributes: ["id", "user_id", "title", "description", "is_complete", "createdAt"]});
            return result;
        } catch(error) { throw error; }
    }

    static async getById(id) {
        try {
            const result = await Tasks.findByPk(id, {attributes: ["id", "user_id", "title", "description", "is_complete", "createdAt"]});
            return result;
        } catch(error) { throw error; }
    }

    static async getByCategory(id) {
        try {
            const result = await Tasks.findOne({
                where: {id},
                attributes: ["id", "user_id", "title", "description", "is_complete", "createdAt"],
                include: {
                    model: tasksServices,
                    as: "categories",
                    attributes: ["id", "task_id"],
                    include: {
                        model: Categories,
                        as: "categories"
                    }
                }
            });
            return result;
        } catch(error) { throw error; }
    }

    static async createTasks(tasks) {
        try { 
            const result = await Tasks.create(tasks);
            return result;
        } catch(error) { throw error; }
    }

    static async updateTask(body, id) {
        try {
            const result = await Tasks.update(body, {where: {id}});
            return result;
        } catch(error) { throw error; }
    }

    static async deleteGeneral(id) {
        try {
            const result = await Tasks.destroy({where: {id}});
            return result;
        } catch(error) { throw error; }
    }
}

module.exports = TasksServices;