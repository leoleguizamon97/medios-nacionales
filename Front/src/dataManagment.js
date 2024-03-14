import axios from 'axios';

//URL de la API
const url = 'http://localhost:3000';

export default {
	cargarTerceros,
	cargarBalance,
	cargarMov,
	eliminarDB,
	corregirErrores,
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
async function corregirErrores(tipo, linea) {
	tipo = tipo.toLowerCase();
	let data = {
		linea: linea
	}
	try {
		const response = await axios.post(url + "/corregir/" + tipo, data);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
}

//Solicitar informes
