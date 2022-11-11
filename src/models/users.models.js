const db = require("../utils/database");
const {DataTypes} = require("sequelize");
const bcrypt = require("bcrypt");

const Users = db.define("users", { 
    id: { 
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: { isEmail: true },
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: (user, options) => {
            const hash = bcrypt.hashSync(user.password, 8);
            user.password = hash;
        }
    }
});

module.exports = Users;

//$2b$08$9zGkVMTO0yN34JQ3N4cSaOrVOIZx4raksb0YAy7WCM0iotXZBygLO
//$2b$08$s9qJPy/raHCPzydoF2EVtuhLCJwmFKapzuKB/42M6fSui/Nuur4DC