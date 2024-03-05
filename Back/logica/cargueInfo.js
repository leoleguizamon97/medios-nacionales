
//Terceros
exports.cargarTerceros = (req, res) => {
	console.log(req.body.terceros);
	res.json({ mensaje: "Cargando terceros" });
		
	/*conexion.query("SELECT * FROM User WHERE nickname = '" + req.params.id + "'", (error, results) => {
		if (error) {
			console.log(error);
			res.json(error);
		} else {
			res.json({ results: results });
		}
	});*/
}
exports.cargarBalance = (req, res) => {
	console.log(req.body.terceros);
	res.json({ mensaje: "Cargando terceros" });
}
exports.cargarMov = (req, res) => {
	console.log(req.body.terceros);
	res.json({ mensaje: "Cargando terceros" });
}