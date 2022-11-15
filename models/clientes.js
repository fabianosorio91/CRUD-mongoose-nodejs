const mongoose = require('mongoose')

//esquema
const clientesSchema = mongoose.Schema({
    _id: Number,
    nombre: String,
    apellido: String,
    direccion: String,
    cuenta:{
        _id: Number,
        numero: Number,
        tipo: String,
        saldo: Number
        }
},{versionKey: false});

//crear modelo
const clientesModelo = mongoose.model('clientes', clientesSchema, 'clientes');


module.exports = clientesModelo;