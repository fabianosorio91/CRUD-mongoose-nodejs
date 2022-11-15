const movimientosModelo = require("../models/movimientos_bancarios");



//buscar por ID
const buscarxIdM = async (id) => {
    try {
        const movimiento = await movimientosModelo.find({ _id: id });
        console.log(movimiento);
    } catch (error) {
        throw new Error(error);
    };
};

//Mostrar 
const buscarM = async () => {
    try {
        const movimiento = await movimientosModelo.find();
        console.log(movimiento);
    } catch (error) {
        throw new Error(error);
    };
};


//crear
const crearM = async () => {
    try {
        const movimiento = new movimientosModelo({

            _id: 4,
            cliente: "Andres",
            no_cuenta: 546354,
            tipo_cuenta: "Ahorro",
            sede: "Centro",
            retiros: 300000,
            consignaciones: 900000,
            banco: "COLPATRIA" 

        })
        movimiento.save();
        await buscarM();
        console.log("Movimiento Creado con Exito");
    } catch (error) {
        throw new Error(error);
    };
};


//Editar. actualizar
const actualizarM = async (id) => {
    try {
        await movimientosModelo.updateOne({_id: id }, {
            $set: {
                cliente: "Andrea",
                no_cuenta: 1111,
                tipo_cuenta: "Credito",
               
            }
        })
        console.log("cliente Actualizado");
        await buscarxIdM(id);
    } catch (error) {
           throw new Error(error);
    };
};

//Eliminar
const eliminarM = async (id) => {
    try {
        await movimientosModelo.deleteOne({ _id: id });
        console.log("Movimiento con id: " + id + " eliminado con Exito");
        await buscarM();

    } catch (error) {
        throw new Error(error)

    };
};


//1. Cantidad de clientes por tipo de cuenta
const func1 = async () => {
    try {
        const movimiento = await movimientosModelo.aggregate([{ $group: { _id: "$tipo_cuenta", clientesxtipocuenta: { $sum: 1 } } }])
        console.log(movimiento);
    } catch (error) {
        throw new Error(error);
    };
};

//2. Suma de consignaciones y suma de retiros por tipo de cuenta
const func2 = async () => {
    try {
        const movimiento = await movimientosModelo.aggregate([{ $group: { _id: "$tipo_cuenta", Consignaciones: { $sum: "$consignaciones" }, Retiros: { $sum: "$retiros" }  } }]);        console.log(movimiento);
    } catch (error) {
        throw new Error(error);
    };
};

//3. Promedio de Consignaciones y retiros por tipo de cuenta
const func3 = async () => {
    try {
        const movimiento = await movimientosModelo.aggregate([{ $group: { _id: "$tipo_cuenta", PromedioConsignaciones: {$avg: "$consignaciones"}, PromedioRetiros: {$avg: "$retiros"} } }]);
        console.log(movimiento);
    } catch (error) {
        throw new Error(error);
    };
};

//4. máximo y mínimo consignaciones y retiros por tipo de cuenta
const func4 = async () => {
    try {
        const movimiento = await movimientosModelo.aggregate([{ $group: { _id: "$tipo_cuenta", MaximoxConsignaciones: { $max: "$consignaciones" }, Maximoxretiros: { $max: "$retiros" }, minimoxConsignaciones: { $min: "$consignaciones" }, minimoxretiros: { $min: "$retiros" } } }]);
        console.log(movimiento);
      
    } catch (error) {
        throw new Error(error);
    };
};


//5. saldos por tipo de cuenta: consignaciones - retiros
const func5 = async () => {
    try {
        const movimiento = await movimientosModelo.aggregate([{ $group: { _id: "$tipo_cuenta", SaldoxtipocuentaConsign: { $sum: { $subtract: ["$consignaciones", "$retiros"] } } } }])
        console.log(movimiento);
    } catch (error) {
        throw new Error(error);
    };

};

//6. Totales generales por banco
const func6 = async () => {
    try {
        const movimiento= await movimientosModelo.aggregate([{ $group: { _id: "$banco", totalSaldoxbanco: { $sum: { $subtract: ["$consignaciones", "$retiros"] } }, totalConsignacionesxbanco: { $sum: "$consignaciones" }, totalRetirosxbanco: { $sum: "$retiros" } } }])
        console.log(movimiento);
    } catch (error) {
        throw new Error(error);
    };

};



module.exports = {
    buscarM, 
    buscarxIdM, 
    eliminarM, 
    actualizarM, 
    crearM, 
    func1, 
    func2, 
    func3, 
    func4, 
    func5, 
    func6
  
};
