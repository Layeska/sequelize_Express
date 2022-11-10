const db = require("../utils/database");
const initModels = require("../models/initModels");

const Users = require("../models/users.models");
const Address = require("../models/addresses.models");
const Tasks = require("../models/tasks.models");
const Categories = require("../models/categories.models");

initModels();

const users = [
    {username: "Ana Perez", email: "ana@gmail.com", password: "1234"},
    {username: "Kevin Lopez", email: "kevin@gmail.com", password: "5423"},
    {username: "Luisa Moreno", email: "perez22@gmail.com", password: "7284"}
];

const categories = [ {name: "Personal Notes"}, {name: "Sports"}, {name: "Trips"}, {name: "Study"}, {name: "Labor"} ];

const addresses = [
    {street: "Street 95", number: 157, userId: 1},
    {street: "Altamira", number: 145, userId: 2},
    {street: "Roundabout Maria", number: 236, userId: 3}
];

const tasks = [
    { title: "Finish the homework", description: "At 8PM", userId: 1},
    { title: "Walking the Dog", description: "Stop by the vet buying vitamins", userId: 2},
    { title: "Drinking water", userId: 3}
];

db.sync({force: false}) 
.then(async() => { 
    console.log("**** Starting Seeder ****");
    users.forEach(user => Users.create(user)); 
})
.then(() => { categories.forEach(cate => Categories.create(cate)); })
.then(() => { tasks.forEach(t => Tasks.create(t)); })
.then(() => { addresses.forEach(add => Address.create(add)); });

/*db.sync({force: true}).then(async() => {
    console.log("**** Starting Seeder ****");
    users.forEach(user => Users.create(user)); 

    setTimeout(() => {
        addresses.forEach((add) => Address.create(add));
    }, 100);

    setTimeout(() => {
        categories.forEach(cate => Categories.create(cate));
    }, 100);

    setTimeout(() => {
        tasks.forEach(t => Tasks.create(t));
    }, 100);
});*/