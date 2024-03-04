export default {
	createTercero,
	viewTercero,
	viewAllTercero,
	updateTercero,
	deleteTercero
}
createTercero = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
viewTercero = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
viewAllTercero = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
updateTercero = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
deleteTercero = (req, res) => {
	let query = ''
	conexion.query(query, (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.json({ results: results });
		}
	});
}
