//Todo lo relacionado con express

const express = require("express");
const morgan = require("morgan");
const activitieRouter = require("./routes/activitiesRoutes");
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//const activitieRouter = express.Router();
//Montando la ruta
app.use("/activities", activitieRouter);

module.exports = app;
