let terceros = [];
let balance = [];
let mov = [];

//Terceros
exports.cargarTerceros = (req, res) => {
	terceros = req.body;
	console.log(terceros.length);
	res.json({
		estado: true,
		errores: [],
	});
}
exports.cargarBalance = (req, res) => {
	balance = req.body;
	console.log(balance.length);
	res.json({
		estado: true,
		errores: [
			{
				id: 1+'B',
				archivo: "Balance",
				error: "Error de prueba 1",
				contenido: "Contenido de prueba 1"
			},
			{
				id: 2+'B',
				archivo: "Balance",
				error: "Error de prueba 2",
				contenido: "Contenido de prueba 2"
			},
			{
				id: 3+'B',
				archivo: "Balance",
				error: "Error de prueba 3",
				contenido: "Contenido de prueba 3"
			},
		],
	});
}
exports.cargarMov = (req, res) => {
	mov = req.body;
	console.log(mov.length);
	res.json({
		estado: true,
		errores: [
			{
				id: 1+'M',
				archivo: "Movimientos",
				error: "Error de prueba 1",
				contenido: "Contenido de prueba 1"
			},
			{
				id: 2+'M',
				archivo: "Movimientos",
				error: "Error de prueba 2",
				contenido: "Contenido de prueba 2"
			},
			{
				id: 3+'M',
				archivo: "Movimientos",
				error: "Error de prueba 3",
				contenido: "Contenido de prueba 3"
			},
		],
	});
}