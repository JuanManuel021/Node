// Importa el modelo Pedido para interactuar con la base de datos
const Pedido = require('../models/Pedido');

// Controlador para agregar un nuevo pedido
exports.nuevaPedido = async (req, res, next) => {
    // Crea una nueva instancia de Pedido con los datos recibidos en el cuerpo de la petición
    const pedido = new Pedido(req.body);
    try {
        // Guarda el nuevo pedido en la base de datos
        await pedido.save();
        // Responde con un mensaje de éxito y los datos del pedido agregado
        res.json({ mensaje: 'Se agrego correctamente', Pedido: req.body });
    } catch (error) {
        // Muestra el error en consola si ocurre alguno
        console.log(error);
        // Llama al siguiente middleware de error
        next();
    }
}

// Controlador para mostrar todos los pedidos
exports.mostarPedidos = async (req, res, next) => {
    try {
        // Busca todos los pedidos en la base de datos
        const pedidos = await Pedido.find({});
        // Responde con la lista de pedidos encontrados
        res.json({ pedidos });
    } catch (error) {
        // Muestra el error en consola si ocurre alguno
        console.log(error);
        // Llama al siguiente middleware de error
        next();
    }
}

// Controlador para mostrar un pedido por su ID
exports.mostarPedidosId = async (req, res, next) => {
    // Busca el pedido por el ID recibido en los parámetros de la ruta
    const pedido = await Pedido.findById(req.params.modelo);
    // Si no existe el pedido, responde con un mensaje y llama al siguiente middleware
    if (!pedido) {
        res.json({ Mensaje: 'Pedido no existe' });
        next();
    }
    // Si existe, responde con el pedido encontrado
    res.json(pedido);
}

// Controlador para eliminar un pedido por su modelo
exports.eliminarPedido = async (req, res, next) => {
    try {
        // Busca y elimina el pedido que coincide con el modelo recibido en los parámetros
        const pedido = await Pedido.findOneAndDelete({
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

