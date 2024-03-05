exports.createMovTercero = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
exports.viewMovTercero = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
exports.viewAllMovTercero = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
exports.updateMovTercero = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
exports.deleteMovTercero = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
