const express	= require('express')
const mysql		= require("mysql2");
const app		= express()
const port		= 3000


app.get('/', (req, res) => {
	res.send('Hello World!')
})

require('dotenv').config()

const conexion = mysql.createConnection({
	host:		process.env.HOST,
	user:		process.env.USUARIO,
	password:	process.env.PASSWORD,
	database:	process.env.DATABASE
});

app.listen(port, () => {
	console.log(`Servicio corriendo en ${port}`)
})

conexion.connect((error) => {
	if (error) {
		console.error("No se pudo conectar a la BD: " + error);
		return;
	}
	console.log("Conectado a la DB");
});