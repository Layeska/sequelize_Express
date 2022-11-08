const UserService = require("../services/user.services");

const getAllUsers = async(req, res) => {
    try {
        const result = await UserService.getAll();
        res.status(200).json(result);
    } catch (error) { console.log(error); }
}

const getUserById = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await UserService.getById(id);
        res.status(200).json(result);
    } catch(error) { throw error; }
};

const getUserWithAddress = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await UserService.getUserJoinAddress(id);
        res.status(200).json(result);
    } catch(error) { throw error; }
};

const getUserWithTasks = async(req, res) => {
    try {
        const {id} = req.params;
        const result = await UserService.getUserJoinTasks(id);
        res.status(200).json(result);
    } catch(error) { throw error; }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserWithAddress,
    getUserWithTasks
};