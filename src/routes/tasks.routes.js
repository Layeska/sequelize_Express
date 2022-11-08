const {Router} = require("express");
const {getAllTasks, getTasksById, getTasksByCategory,
        createTask, updateTasks, deleteTasks} = require("../controllers/tasks.controllers");

const routerTasks = Router();

routerTasks.get("/tasks", getAllTasks);

routerTasks.get("/tasks/:id", getTasksById);

routerTasks.get("/tasks/:id/category", getTasksByCategory);

routerTasks.post("/tasks", createTask);

routerTasks.put("/tasks", updateTasks);

routerTasks.delete("/tasks", deleteTasks);

module.exports = routerTasks;