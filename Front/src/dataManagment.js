import axios from 'axios';

//URL de la API
const url = 'http://localhost:3000';

export default {
	cargarTerceros,
	cargarBalance,
	cargarMov,
	eliminarDB,
	corregirErrores,
	pedirTerceros,
	pedirCuentas,
	pedirBalance,
	pedirMov,
	pedirArticulo,
	eliminarTercero,
	eliminarBalance,
	eliminarMovimineto,
	editarElementos,
}

//Procesar informacion
async function cargarTerceros(terceros) {
	try {
		const response = await axios.post(url + "/proc/terceros", terceros);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function cargarBalance(balance) {
	try {
		const response = await axios.post(url + "/proc/balance", balance);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function cargarMov(mov) {
	try {
		const response = await axios.post(url + "/proc/mov", mov);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
}

//Eliminar DB
async function eliminarDB() {
	try {
		const response = await axios.delete(url + "/eliminarDB");
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
}

//Correcion de errores
async function corregirErrores(id, linea) {
	id = id.toLowerCase();
	let data = {
		linea
	}
	try {
		const response = await axios.put(url + "/corregir/" + id, data);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
}
//Solicitar elementos
async function pedirTerceros() {
	try {
		const response = await axios.get(url + "/elementos/terceros");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}

async function pedirCuentas() {
	try {
		const response = await axios.get(url + "/elementos/cuentas");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}

async function pedirBalance() {
	try {
		const response = await axios.get(url + "/elementos/balance");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}

async function pedirMov() {
	try {
		const response = await axios.get(url + "/elementos/mov");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
//Solicitar informes
async function pedirArticulo(data) {
	try {
		let params = {
			data
		}
		const response = await axios.get(url + "/nacionales/", { params });
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
//Eliminar elementos
async function eliminarTercero(idUnico) {
	let params = { idUnico }
	try {
		const response = await axios.delete(url + "/eliminar/tercero/", { params });
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function eliminarBalance(idUnico) {
	let params = { idUnico }
	try {
		const response = await axios.delete(url + "/eliminar/balance/", { params });
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function eliminarMovimineto(idUnico) {
	let params = { idUnico }
	try {
		const response = await axios.delete(url + "/eliminar/movimiento/", { params });
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
//Editar elementos
async function editarElementos(idUnico, tipo, datos) {
	let data = {
		idUnico,
		datos
	}
	try {
		const response = await axios.put(url + "/editar/"+tipo, data);
		console.log(response.data.estado);
		return response.data.estado;
	} catch (error) {
		console.log(error);
		return false;
	}
}