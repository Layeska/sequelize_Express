const express = require("express");
const initModels = require("./models/initModels");

const db = require("./utils/database");

const userRoutes = require("./routes/user.routes");
const tasksRoutes = require("./routes/tasks.routes");

//const morgan = require("morgan");
const handleError = require("./middlewares/error");

const logs = require("./middlewares/requestLogs");

require("dotenv").config();

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 8000;

/*app.use((req, res, next) => {
    console.log("antes de atender una peticion");
    next();
});*/


db.authenticate().then(() => console.log("*** Successful authentication ***")).catch((error) => console.log(error));

db.sync({force: false}).then(() => console.log("*** Synchronized database ***")).catch(error => console.log(error));

initModels();
app.use(express.urlencoded({ extended: true }));


app.use(logs);
//app.use(morgan("tiny"));



/*app.get("/", (req, res, next) => {
    res.status(200).json("todo bien");
    next();
})*/

app.use("/api/v1", userRoutes); 
app.use("/api/v1", tasksRoutes);

app.use((req, res, next) => {
    console.log("despues de atender las peticiones anteriores");
}) 


/*app.use((error, req, res, next) => {
    res.status(400).json({ 
        message: 'Ups, algo no va bien', 
        error: error.message
    });
});
*/

app.use(handleError);

app.listen(PORT, ()=> console.log(`--- Active Server in ${PORT} port! ---`));