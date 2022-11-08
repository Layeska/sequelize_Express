const express = require("express");
const initModels = require("./models/initModels");

const db = require("./utils/database");

const userRoutes = require("./routes/user.routes");
const tasksRoutes = require("./routes/tasks.routes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;

db.authenticate().then(() => console.log("*** Successful authentication ***")).catch((error) => console.log(error));

db.sync({force: false}).then(() => console.log("*** Synchronized database ***")).catch(error => console.log(error));

initModels();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json("-- It's Ok! --");
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", tasksRoutes);

app.listen(PORT, ()=> console.log(`--- Active Server in ${PORT} port! ---`));