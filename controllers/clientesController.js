const clientesModelo = require("../models/clientes");



//buscar por ID
const buscarxId = async (id) => {
    try {
        const cliente = await clientesModelo.find({ _id: id });
    console.log(cliente);
    } catch (error) {
        throw new Error(error);
    };
};

//Mostrar 
const buscar = async () => {
    try {
        const cliente = await clientesModelo.find();
    console.log(cliente);
    } catch (error) {
        throw new Error(error);
    };
};


//insertar
const crear = async () => {
    try {
        const cliente = new clientesModelo({
            
            _id: 3,
            nombre: 'nuevo Cliente',
            apellido: 'nuevo apellido',
            direccion: 'cll 3',
            cuenta: {
                _id: 3,
                numero: 33333,
                tipo: 'Ahorros',
                saldo: 0
            }
        })
        cliente.save();
        await buscar();
        console.log("Cliente Creado con Exito");
    } catch (error) {
        throw new Error(error);
    };
};


//Editar. actualizar
const actualizar = async (id) => {
    try {
        await clientesModelo.updateOne({_id: id }, {
            $set: {
                nombre: "Pablo",
                apellido: "escobar"
            }
        })
        console.log("cliente Actualizado");
        await buscar();
    } catch (error) {
           throw new Error(error);
    };
};

//Eliminar
const eliminar = async (id) =>{
    try {
        await clientesModelo.deleteOne({_id:id});
    console.log ("Cliente con id: " + id + " eliminado con Exito");
    await buscar();
        
    } catch (error) {
        throw new Error(error)
        
    };
};





module.exports = {
    buscar, 
    buscarxId, 
    eliminar,
    actualizar,
    crear
}
