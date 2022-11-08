const db = require("../utils/database");
const {DataTypes} = require("sequelize");


const Tasks = db.define("tasks", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        field: "is_complete",
        defaultValue: false,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
            key: "id",
            model: "users"
        }
    }
});

module.exports = Tasks;