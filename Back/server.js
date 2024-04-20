const express = require('express');
const mysql = require("mysql2");
const app = express();
const port = 3000;
const cors = require('cors');
const router = require('./logica/router.js');
var bodyParser = require('body-parser');
require('dotenv').config();

//Permite el acceso a la API desde el front
app.use(
	cors({
		origin: '*',
	})
);

//Permite el manejo de archivos grandes
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//Permite el manejo de JSON
app.use(express.json());

//Inicia el servidor en el puerto indicado
app.listen(port, () => {
	console.log(`Servicio corriendo en ${port}`);
})

/*
//Conexión a la base de datos
const conexion = mysql.createConnection({
	//Carga de credenciales
	host: process.env.HOST,
	user: process.env.USUARIO,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
});

conexion.connect((error) => {
	if (error) {
		console.error("No se pudo conectar a la BD: " + error);
		return;
	}
	console.log("Conectado a la DB");
});

//Exporta la conexión
module.exports = conexion;
*/
//uso del router
app.use('/', router);
