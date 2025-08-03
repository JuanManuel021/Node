// Importa el modelo Moto para interactuar con la base de datos
const Moto = require('../models/Moto');

// Crear nueva moto
exports.nuevaMoto = async (req, res, next) => {
  try {
    // Crea una nueva instancia de Moto con los datos recibidos en la petición
    const moto = new Moto(req.body);
    // Guarda la nueva moto en la base de datos
    await moto.save();
    // Responde con un mensaje de éxito y la moto creada
    res.status(201).json({ mensaje: 'Se agregó correctamente', moto });
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error(error);
    // Llama al siguiente middleware de error
    next(error);
  }
};

// Mostrar todas las motos
exports.mostrarMotos = async (req, res, next) => {
  try {
    // Busca todas las motos en la base de datos
    const motos = await Moto.find({});
    // Responde con la lista de motos encontradas
    res.json(motos);
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error(error);
    // Llama al siguiente middleware de error
    next(error);
  }
};

// Mostrar una moto por modelo
exports.mostrarMotoPorModelo = async (req, res, next) => {
  try {
    // Busca una moto por el modelo recibido en los parámetros de la ruta
    const moto = await Moto.findOne({ Modelo: req.params.modeloMoto });
    // Si no existe la moto, responde con un mensaje de error
    if (!moto) {
      return res.status(404).json({ mensaje: 'Moto no encontrada' });
    }
    // Si existe, responde con la moto encontrada
    res.json(moto);
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error(error);
    // Llama al siguiente middleware de error
    next(error);
  }
};

// Actualizar moto por modelo
exports.actualizarMoto = async (req, res, next) => {
  try {
    // Busca y actualiza la moto que coincide con el modelo recibido en los parámetros
    const moto = await Moto.findOneAndUpdate(
      { Modelo: req.params.modeloMoto },
      req.body,
      { new: true }
    );
    // Si no existe la moto, responde con un mensaje de error
    if (!moto) {
      return res.status(404).json({ mensaje: 'Moto no encontrada' });
    }
    // Si existe, responde con un mensaje de éxito y la moto actualizada
    res.json({ mensaje: 'Moto actualizada', moto });
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error(error);
    // Llama al siguiente middleware de error
    next(error);
  }
};

// Eliminar moto por modelo
exports.eliminarMoto = async (req, res, next) => {
  try {
    // Busca y elimina la moto que coincide con el modelo recibido en los parámetros
    const moto = await Moto.findOneAndDelete({ Modelo: req.params.modeloMoto });
    // Si no existe la moto, responde con un mensaje de error
    if (!moto) {
      return res.status(404).json({ mensaje: 'Moto no encontrada' });
    }
    // Si existe, responde con un mensaje de éxito
    res.json({ mensaje: 'Moto eliminada correctamente' });
  } catch (error) {
    // Muestra el error en consola si ocurre alguno
    console.error(error);
    // Llama al siguiente middleware de error
    next(error);
  }
};