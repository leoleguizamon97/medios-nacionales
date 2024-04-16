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
	pedir1001,
	pedir1003,
	pedir1004,
	pedir1005,
	pedir1006,
	pedir1007,
	pedir1008,
	pedir1009,
	pedir1010,
	pedir1011,
	pedir1012,
	pedir2276,
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
		linea: linea
	}
	try {
		const response = await axios.post(url + "/corregir/" + id, data);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
}
//Solicitar elementos

async function pedirTerceros(){
	try {
		const response = await axios.get(url + "/elementos/terceros");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}

async function pedirCuentas(){
	try {
		const response = await axios.get(url + "/elementos/cuentas");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}

async function pedirBalance(){
	try {
		const response = await axios.get(url + "/elementos/balance");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}

async function pedirMov(){
	try {
		const response = await axios.get(url + "/elementos/mov");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
//Solicitar informes
async function pedir1001(){
	try {
		const response = await axios.get(url + "/Nacionales/1001");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir1003(){
	try {
		const response = await axios.get(url + "/Nacionales/1001");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir1004(){
	try {
		const response = await axios.get(url + "/Nacionales/1004");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir1005(){
	try {
		const response = await axios.get(url + "/Nacionales/1005");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir1006(){
	try {
		const response = await axios.get(url + "/Nacionales/1006");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir1007(){
	try {
		const response = await axios.get(url + "/Nacionales/1007");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir1008(){
	try {
		const response = await axios.get(url + "/Nacionales/1008");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir1009(){
	try {
		const response = await axios.get(url + "/Nacionales/1009");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir1010(){
	try {
		const response = await axios.get(url + "/Nacionales/1010");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir1011(){
	try {
		const response = await axios.get(url + "/Nacionales/1011");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir1012(){
	try {
		const response = await axios.get(url + "/Nacionales/1012");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}
async function pedir2276(){
	try {
		const response = await axios.get(url + "/Nacionales/2276");
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}