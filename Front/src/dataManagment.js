import axios from 'axios';

//URL de la API
const url = 'http://localhost:3000';

export default {
	cargarTerceros,
	cargarBalance,
	cargarMov,
}

async function cargarTerceros(terceros) {
	try {
		const response = await axios.post(url + "/cargar/terceros", terceros);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}

async function cargarBalance(balance) {
	try {
		const response = await axios.post(url + "/cargar/balance"+balance);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}

async function cargarMov(mov) {
	try {
		const response = await axios.post(url + "/cargar/mov"+mov);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}