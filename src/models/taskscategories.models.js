const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Categories = require("./categories.models");
const Tasks = require("./tasks.models");

const TaskCategories = db.define("task_categories", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },

    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id",
        preferences: {
            model: Categories,
            key: "id"
        }
    },
    tasksId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "task_id",
        reference: {
            model: Tasks,
            key: "id"
        }
    }
},{ timestamps: false, });

module.exports = TaskCategories;