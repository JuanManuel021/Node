// Importa el paquete mongoose para definir el esquema y el modelo
const mongoose = require('mongoose');

// Extrae el constructor Schema de mongoose
const Schema = mongoose.Schema;

// Define el esquema para el modelo Moto
const motoSchema = new Schema({
  // Campo para el modelo de la moto
  Modelo: {
    type: String,
    trim: true
  },
  // Campo para la versión de la moto
  Version: {
    type: String,
    trim: true
  },
  // Campo para el año de la moto
  Year: {
    type: String,
    trim: true
  },
  // Campo para el tipo de moto
  Tipo: {
    type: String,
    trim: true
  },
  // Campo para el precio de la moto
  Precio: {
    type: String,
    trim: true
  },
  // Campo para el número de serie VIN de la moto
  VIN: {
    type: String,
    trim: true
  },
  // Campo para el estado de la moto (activa/inactiva)
  Edo: {
    type: Boolean,
    default: true
  }
});

// Exporta el modelo Moto basado en el esquema definido
module.exports = mongoose.model('Moto', motoSchema);