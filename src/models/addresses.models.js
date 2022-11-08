const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Address = db.define("addresses", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.INTEGER,
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
}, { timestamps: false });

module.exports = Address;
