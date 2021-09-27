const app = require("./app");

//Configuración del servidor
const port = 2500;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
