const UserService = require("../services/user.services");

const getAllUsers = async(req, res, next) => {
    try {
        const result = await UserService.getAll();
        res.status(200).json(result);
    } catch (error) { next(error); }
}

const getUserById = async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserService.getById(id);
        res.status(200).json(result);
    } catch(error) { next(error); }
};

const getUserWithAddress = async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserService.getUserJoinAddress(id);
        res.status(200).json(result);
    } catch(error) { next(error); }
};

const getUserWithTasks = async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserService.getUserJoinTasks(id);
        res.status(200).json(result);
    } catch(error) { next(error); }
};

const createUser = async(req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserService.addUser(newUser);
        res.status(201).json(result);
    } catch(error) { 
        console.log(error);
        next({
            status: 418, 
            errorContent: error, 
            message: "Revisa la info que mandas"
        });
     }
};

const updateUser = async(req, res, next) => {
    try {
        const {id} = req.body;
        const body = req.body;
        const result = await UserService.update(id, body);
        res.status(200).json(result);
    } catch(error) { next(error); }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserWithAddress,
    getUserWithTasks,
    createUser,
    updateUser
};