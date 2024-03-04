const express	= require('express')
const mysql		= require("mysql2");
const app		= express()
const port		= 3000

app.listen(port, () => {
	console.log(`Servicio corriendo en ${port}`)
})

require('dotenv').config()
app.use(express.json());

const conexion = mysql.createConnection({
	host:		process.env.HOST,
	user:		process.env.USUARIO,
	password:	process.env.PASSWORD,
	database:	process.env.DATABASE
});

conexion.connect((error) => {
	if (error) {
		console.error("No se pudo conectar a la BD: " + error);
		return;
	}
	console.log("Conectado a la DB");
});

module.exports = conexion;