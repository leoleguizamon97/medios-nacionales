export default {
	createCuenta,
	viewCuenta,
	viewAllCuenta,
	updateCuenta,
	deleteCuenta
}
createCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
viewCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
viewAllCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
updateCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
deleteCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
