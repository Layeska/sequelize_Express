const Users = require("./users.models");
const Tasks = require("./tasks.models");
const Address = require("./addresses.models");
const Categories = require("./categories.models");
const TaskCategories = require("./taskscategories.models");

const initModels = () => {
    TaskCategories;

    //! Relation 1:1 
    Address.belongsTo(Users, { as: "resident", foreignKey: "user_id" });
    Users.hasOne(Address, { as: "home", foreignKey: "user_id" });

    //! Relation 1:N
    Users.hasMany(Tasks, { as: "todo", foreignKey: "user_id" });
    Tasks.belongsTo(Users, { as: "author", foreignKey: "user_id" });

    //! Relation N:N
    /*
    Tasks.belongsToMany(Categories, {through: "tasks_categories", foreignKey: "tasks_id", otherKey: "categories_id"});
    Categories.belongsToMany(Tasks, {through: "tasks_categories", foreignKey: "categories_id", otherKey: "tasks_id"});*/

    Tasks.hasMany(TaskCategories, {as: "categories", foreignKey: "task_id"});
    TaskCategories.belongsTo(Tasks, {as: "todo", foreignKey: "task_id"});

    Categories.hasMany(TaskCategories, {as: "todo", foreignKey: "category_id"});
    TaskCategories.belongsTo(Categories, {as: "categories", foreignKey: "category_id"});
}

module.exports = initModels;