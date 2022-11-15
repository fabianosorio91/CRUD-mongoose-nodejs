const mongoose = require('mongoose') //guardo mongoose en una constante
//almacenar la cadena de coleccion de la BD creada
const uri = 'mongodb://localhost:27017/CRUD'

//hacer la conexion a mongo Db Compass
//.then promesa si pasa
//.catch si no pasa
mongoose.connect(uri, {})
    .then(() => console.log("Coneccion Exitosa"))
    .catch((e) => console.log("Error: " + e));

