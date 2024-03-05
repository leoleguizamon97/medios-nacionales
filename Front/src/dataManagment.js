import axios from 'axios';

//URL de la API
const url = 'http://localhost:3000';

export default {
	cargarTerceros,
	cargarBalance,
	cargarMov,
	eliminarDB,
}

//Carga de informacion

async function cargarTerceros(terceros) {
	try {
		const response = await axios.post(url + "/cargar/terceros", terceros);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function cargarBalance(balance) {
	try {
		const response = await axios.post(url + "/cargar/balance", balance);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function cargarMov(mov) {
	try {
		const response = await axios.post(url + "/cargar/mov", mov);
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