
const TasksServices = require("../services/tasks.services");

const getAllTasks = async(req, res) => {
    try {
        const result = await TasksServices.getAll();
        res.status(200).json(result);
    } catch(error) { console.log(error); }
};

const getTasksById = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await TasksServices.getById(id);
        res.status(200).json(result);
    } catch(error) { console.log(error); }
};

const getTasksByCategory = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await TasksServices.getByCategory(id);
        res.status(200).json(result);
    } catch(error) { console.log(error); }
};

const createTask = async(req, res) => {
    try {
        const body = req.body;
        const result = await TasksServices.createTasks(body);
        res.status(201).json(result);
    } catch(error) { console.log(error); }
};

const updateTasks = async(req, res) => {
    try {
        const id = req.body.id;
        const body = req.body;
        const result = await TasksServices.updateTask(body, id);
        res.status(200).json(result);
    } catch(error) { console.log(error); }
};

const deleteTasks = async(req, res) => {
    try {
        const {id} = req.body;
        const result = await TasksServices.deleteGeneral(id);
        res.status(200).json(result);
    } catch(error) { console.log(error); }
};

module.exports = {
    getAllTasks,
    getTasksById,
    getTasksByCategory,
    createTask,
    updateTasks,
    deleteTasks
};