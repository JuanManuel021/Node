// Importa el paquete mongoose para definir el esquema y el modelo
const mogoose = require('mongoose');

// Importa el modelo Agencia
const Agencia = require('./Agencia');

// Importa el modelo Moto
const Moto = require('./Moto');

// Define el esquema para Pedido usando mongoose.Schema
const Schema = mongoose.Schema({
    // Campo para la agencia asociada al pedido
    Agencia: {
        type: String,
        trim: true
    },
    // Campo para la versión del pedido
    Version: {
        type: String,
        trim: true
    },
    // Campo para el total del pedido
    Total: {
        type: Float32Array,
        trim: true
    },
    // Campo para el pedido, que incluye la moto y la cantidad
    Pedido: {
        type: Moto,
        Cantidad: {
            type: Int16Array
        }
    },
});

// Exporta el modelo Pedido basado en el esquema definido
module.exports = mogoose.model(Pedido, pedidoSchema);