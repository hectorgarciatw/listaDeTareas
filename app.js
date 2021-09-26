const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const activities = JSON.parse(fs.readFileSync(`${__dirname}/activities/activities.json`));

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        results: activities.length,
        data: { activities: activities },
    });
});

app.post("/addActivitie", (req, res) => {
    const freshId = activities[activities.length - 1].id + 1;
    //Creo una actividad vía merge del nuevo id con los datos de la request
    const newActivitie = Object.assign({ id: freshId }, req.body);
    activities.push(newActivitie);
    fs.writeFile(`${__dirname}/activities/activities.json`, JSON.stringify(activities), (err) => {
        if (err) return err;
        res.status(201).json({
            status: "success",
            data: newActivitie,
        });
    });
});

const port = 2500;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
