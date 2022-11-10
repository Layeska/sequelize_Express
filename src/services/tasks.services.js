const tasksServices = require("../models/taskscategories.models");
const Tasks = require("../models/tasks.models");
const Categories = require("../models/categories.models");
const TaskCategories = require("../models/taskscategories.models");

class TasksServices {

    static async getById(userId) {
        try {
            const result = await Tasks.findAll({
                where: { userId },
                attributes: ["id", "title", "description", "isCompleted", "createdAt"],
                include: {
                    model: TaskCategories,
                    as: "categories",
                    attributes: ["categoryId"],
                    include: {
                        model: Categories,
                        as: "categories",
                        attributes: ["name"]
                    }
                }
            });
            return result;
        } catch(error) {  throw error; }
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

    static async createTasks(tasks, categories) {
        try { 
            const result = await Tasks.create(tasks);
            const {id} = result;  
            //console.log(id);
           // categories.forEach(async (category) => await TaskCategories.create({categoryId: category, tasksId: 1}));
           categories.forEach( 
            async (c) =>
              await TaskCategories.create({ categoryId: c, tasksId: id })
          );
           return true;
        } catch(error) { throw error; }
    }

    static async updateTask(id) {
        try {
            const result = await Tasks.update({isCompleted: true},{where: {id}});
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