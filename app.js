//Todo lo relacionado con express

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const activitieRouter = require("./routes/activitiesRoutes");
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
//Configurando archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//const activitieRouter = express.Router();
//Montando la ruta
app.get("/", (req, res) => {
    res.status(200).render("index");
});
app.use("/activities", activitieRouter);

module.exports = app;
