// Importa el paquete mongoose para definir el esquema y el modelo
const mongoose = require('mongoose');

// Extrae el constructor Schema de mongoose y crea el esquema para Agencia
const agenciaSchema = new mongoose.Schema({
    // Campo para el nombre de la agencia
    NombreAgencia: {
        type: String,
        trim: true
    },
    // Campo para la dirección de la agencia
    Address: {
        type: String,
        trim: true
    },
    // Campo para el teléfono de la agencia
    Telefono: {
        type: String,
        trim: true
    },
    // Campo para el nombre del gerente de la agencia
    NombreGerente: {
        type: String,
        trim: true
    },
    // Campo para el estado de la agencia (activa/inactiva)
    Edo: {
        type: Boolean,
        default: true
    }
});

// Exporta el modelo Agencia basado en el esquema definido
module.exports = mongoose.model('Agencia', agenciaSchema);