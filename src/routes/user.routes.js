const { Router } = require("express");
const {getAllUsers, getUserById, getUserWithAddress, getUserWithTasks,
    createUser, updateUser} = require("../controllers/user.controllers");

const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.get("/users/:id/address", getUserWithAddress);

router.get("/users/:id/tasks", getUserWithTasks);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

module.exports = router;