const mongoose = require('mongoose')

//esquema
const movimientosSchema = mongoose.Schema({

    _id: Number,
    cliente: String,
    no_cuenta: Number,
    tipo_cuenta: String,
    sede: String,
    retiros: Number,
    consignaciones: Number,
    banco: String

}, { versionKey: false });

//crear modelo
const movimientosModelo = mongoose.model('movimientos', movimientosSchema, 'movimientos_Bancarios');


module.exports = movimientosModelo;