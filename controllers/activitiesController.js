const fs = require("fs");

const activities = JSON.parse(fs.readFileSync(`${__dirname}/../activities/activities.json`));

//Obtengo todas las actividades
exports.getActivities = (req, res) => {
    res.status(200).json({
        status: "success",
        results: activities.length,
        data: { activities: activities },
    });
};

//Elimino una actividad
exports.deleteActivitie = (req, res) => {
    targetId = parseInt(req.params.id);
    //Obtengo el índice de la actividad a eliminar
    const targetIndex = activities.findIndex((item) => item.id === targetId);
    if (targetIndex > -1) {
        //Elimino la actividad del arreglo
        activities.splice(targetIndex, 1);
        //Actualizo el JSON con la actividad eliminada
        fs.writeFile(`${__dirname}/activities/activities.json`, JSON.stringify(activities), (err) => {
            if (err) return err;
            res.status(204).json({
                status: "actividadEliminada",
                data: null,
            });
        });
    } else {
        //La actividad que se desea eliminar no se encuentra en el arreglo
        res.status(404).json({
            status: "actividadNoEliminada",
        });
    }
};

//Agrego una actividad
exports.addActivitie = (req, res) => {
    const freshId = activities[activities.length - 1].id + 1;
    //Creo una actividad vía merge del nuevo id con los datos de la request
    const newActivitie = Object.assign({ id: freshId }, req.body);
    activities.push(newActivitie);
    //Escritura de una nueva actividad
    fs.writeFile(`${__dirname}/activities/activities.json`, JSON.stringify(activities), (err) => {
        if (err) return err;
        res.status(201).json({
            status: "actividadCreada",
            data: newActivitie,
        });
    });
};
