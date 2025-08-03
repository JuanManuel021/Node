// Importa el módulo express para crear el router
const express = require('express');

// Crea una nueva instancia de router de Express
const routes = express.Router();

// Importa el controlador de motos que contiene la lógica de cada ruta
const motoController = require('../controllers/motoController');

// Define la ruta para crear una nueva moto (POST /moto)
routes.post('/moto', motoController.nuevaMoto);

// Define la ruta para obtener todas las motos (GET /moto)
routes.get('/moto', motoController.mostrarMotos);

// Define la ruta para obtener una moto por su modelo (GET /moto/:modeloMoto)
routes.get('/moto/:modeloMoto', motoController.mostrarMotoPorModelo);

// Define la ruta para actualizar una moto por su modelo (PUT /moto/:modeloMoto)
routes.put('/moto/:modeloMoto', motoController.actualizarMoto);

// Define la ruta para eliminar una moto por su modelo (DELETE /moto/:modeloMoto)
routes.delete('/moto/:modeloMoto', motoController.eliminarMoto);

// Exporta el router para que pueda ser usado en otros archivos
module.exports = routes;