
const TasksServices = require("../services/tasks.services");


const getTasksByUserId = async(req, res, next) => {
    try {
        const { userId } = req.params;
        const result = await TasksServices.getById(userId);
        res.status(200).json(result);
    } catch(error) { 
        next({
            message: "no se pudieron obtener las tareas",
            status: 400,
            errorContent: error
        });
    }
};

const getTasksByCategory = async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await TasksServices.getByCategory(id);
        res.status(200).json(result);
    } catch(error) { 
        next({
            message: "",
            status: 400,
            errorContent: error
        }); 
    }
}; 

const createTask = async(req, res, next) => {
    console.log(req.body);  
    try {
        const { tasks, categories } = req.body;
        console.log(tasks);
        const result = await TasksServices.createTasks(tasks, categories); 
        res.status(201).json({message: "La tarea ha sido creada con exito"});
    } catch(error) { 
        next({
            message: "No se creo la tarea",
            status: 400,
            errorContent: error 
        }); 
    }
};

const completedTasks = async(req, res, next ) => {
    try {
        const {id} = req.params;
        const result = await TasksServices.updateTask(id);
        res.status(200).json({message: "Tarea actualizada exitosamente"});
    } catch(error) { 
        next({
            message: "La tarea no se actualizo",
            status: 400,
            errorContent: error   
        });
     }
};

const deleteTasks = async(req, res) => {
    try {
        const {id} = req.body;
        const result = await TasksServices.deleteGeneral(id);
        res.status(200).json(result);
    } catch(error) { console.log(error); }
};

module.exports = {
    getTasksByUserId,
    getTasksByCategory,
    createTask,
    completedTasks,
    deleteTasks
};