const {Router} = require("express");
const { getTasksByUserId, getTasksByCategory,
        createTask, completedTasks, deleteTasks} = require("../controllers/tasks.controllers");

const routerTasks = Router();

routerTasks.get("/tasks/:userId", getTasksByUserId);

//routerTasks.get("/tasks/:id/category", getTasksByCategory);

routerTasks.post("/tasks", createTask);

routerTasks.patch("/tasks/:id", completedTasks);

//routerTasks.delete("/tasks", deleteTasks);

module.exports = routerTasks;

/*
{
  "tasks": {
    "userId": 1,
    "title": "Finish the CRUD - New",
    "description": ""
  }, "categories": [1,5]
}
*/