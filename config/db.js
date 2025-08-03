// Importa mongoose para manejar la conexión con MongoDB
const mongoose = require('mongoose');

// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Define la función para conectar a la base de datos
const conectarDB = async () => {
  try {
    // Intenta conectar a MongoDB usando la URI definida en las variables de entorno
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,      // Usa el nuevo parser de URL de MongoDB
      useUnifiedTopology: true,   // Usa el nuevo motor de topología de MongoDB
    });
    // Si la conexión es exitosa, muestra un mensaje en consola
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (error) {
    // Si ocurre un error, lo muestra en consola
    console.error('❌ Error al conectar a MongoDB:', error);
    // Finaliza el proceso con error
    process.exit(1);
  }
};

// Exporta la función para que pueda ser utilizada en otros archivos
module.exports = conectarDB;