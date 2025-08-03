// Importa el modelo Agencia para interactuar con la base de datos
const agencia = require('../models/Agencia');

// Controlador para agregar una nueva agencia
exports.nuevaagencia = async (req, res, next) => {
    // Crea una nueva instancia de Agencia con los datos recibidos en la petición
    const nuevaAgencia = new agencia(req.body);
    try {
        // Guarda la nueva agencia en la base de datos
        await nuevaAgencia.save();
        // Responde con un mensaje de éxito y la agencia creada
        res.json({ mensaje: 'Se agrego correctamente', agencia: req.body });
    } catch (error) {
        // Muestra el error en consola si ocurre alguno
        console.log(error);
        // Llama al siguiente middleware de error
        next();
    }
}

// Controlador para mostrar todas las agencias
exports.mostaragencias = async (req, res, next) => {
    try {
        // Busca todas las agencias en la base de datos
        const agencias = await agencia.find({});
        // Responde con la lista de agencias encontradas
        res.json({ agencias });
    } catch (error) {
        // Muestra el error en consola si ocurre alguno
        console.log(error);
        // Llama al siguiente middleware de error
        next();
    }
}

// Controlador para mostrar una agencia por su ID
exports.mostaragenciasId = async (req, res, next) => {
    // Busca la agencia por el ID recibido en los parámetros de la ruta
    const agenciaEncontrada = await agencia.findById(req.params.modelo);
    // Si no existe la agencia, responde con un mensaje y llama al siguiente middleware
    if (!agenciaEncontrada) {
        res.json({ Mensaje: 'agencia no existe' });
        next();
    }
    // Si existe, responde con la agencia encontrada
    res.json(agenciaEncontrada);
}

// Controlador para eliminar una agencia por su modelo
exports.eliminaragencia = async (req, res, next) => {
    try {
        // Busca y elimina la agencia que coincide con el modelo recibido en los parámetros
        const agenciaEliminada = await agencia.findOneAndDelete({
            _modelo: req.params.modelo
        });
        // (Opcional) Podrías responder con un mensaje de éxito aquí
    } catch (error) {
        // Muestra el error en consola si ocurre alguno
        console.log(error);
        // Llama al siguiente middleware de error
        next();
    }
}

