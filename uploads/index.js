// Importa el framework Express para crear el servidor
const express = require('express');

// Importa las rutas definidas en el archivo ../routes/index.js
const routes = require('../routes');

// Importa la función para conectar a la base de datos desde ../config/db.js
const conectarDB = require('../config/db');

// Importa dotenv para manejar variables de entorno desde un archivo .env
const dotenv = require('dotenv');

// Importa body-parser para poder leer datos enviados en el cuerpo de las peticiones HTTP
const bodyParser = require('body-parser');

// Carga las variables de entorno definidas en el archivo .env
dotenv.config();

// Llama a la función para conectar a la base de datos
conectarDB();

// Crea una instancia de la aplicación Express
const app = express();

// Configura la app para que use body-parser y pueda leer JSON en las peticiones
app.use(bodyParser.json());

// Configura la app para que use body-parser y pueda leer datos codificados en URL (formularios)
app.use(bodyParser.urlencoded({ extended: true }));

// Usa las rutas importadas para manejar las peticiones que lleguen a la raíz ('/')
app.use('/', routes);

// Define el puerto en el que se ejecutará el servidor, usando la variable de entorno PORT o el 3000 por defecto
const PORT = process.env.PORT || 3000;

// Inicia el servidor y muestra un mensaje en consola indicando la URL donde está corriendo
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});