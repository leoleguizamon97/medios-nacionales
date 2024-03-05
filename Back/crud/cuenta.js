exports.createCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
exports.viewCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
exports.viewAllCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
exports.updateCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
exports.deleteCuenta = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
