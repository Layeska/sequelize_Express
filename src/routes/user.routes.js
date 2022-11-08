const { Router } = require("express");
const {getAllUsers, getUserById, getUserWithAddress, getUserWithTasks} = require("../controllers/user.controllers");

const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.get("/users/:id/address", getUserWithAddress);

router.get("/users/:id/tasks", getUserWithTasks)

module.exports = router;