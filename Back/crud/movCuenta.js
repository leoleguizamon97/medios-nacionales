export default {
	createMovCuenta,
	viewMovCuenta,
	viewAllMovCuenta,
	updateMovCuenta,
	deleteMovCuenta
}
createMovCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
viewMovCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
viewAllMovCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
updateMovCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
deleteMovCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}