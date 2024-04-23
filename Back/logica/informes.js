module.exports = {
	helloWorld,
	generarInforme,
}

let cuentas = []
let terceros = []
let balances = []
let movimientos = []

function helloWorld(config) {
	return true
}

function generarInforme(data, cuentas, terceros, balances, movimientos) {
	let resultado = []
	switch (data.Titulo) {
		case "1001":
			resultado = informe1001(data, cuentas, terceros, balances, movimientos)
			break;
		case "1003":
			resultado = informe1003(data, cuentas, terceros, balances, movimientos)
			break;
		case "1004":
			resultado = informe1004(data, cuentas, terceros, balances, movimientos)
			break;
		case "1005":
			resultado = informe1005(data, cuentas, terceros, balances, movimientos)
			break;
		case "1006":
			resultado = informe1006(data, cuentas, terceros, balances, movimientos)
			break;
		case "1007":
			resultado = informe1007(data, cuentas, terceros, balances, movimientos)
			break;
		case "1008":
			resultado = informe1008(data, cuentas, terceros, balances, movimientos)
			break;
		case "1009":
			resultado = informe1009(data, cuentas, terceros, balances, movimientos)
			break;
		case "1010":
			resultado = informe1010(data, cuentas, terceros, balances, movimientos)
			break;
		case "1011":
			resultado = informe1011(data, cuentas, terceros, balances, movimientos)
			break;
		case "1012":
			resultado = informe1012(data, cuentas, terceros, balances, movimientos)
			break;
		case "2276":
			resultado = informe2276(data, cuentas, terceros, balances, movimientos)
			break;
		default:
			console.log("ERROR")
			break;
	}
	return resultado

}

//UTILIDADES
function buscarCuentas(cuentas, filtro) {
	cuentasFiltradas = []
	filtro = Object.keys(filtro)
	cuentas.forEach((value, key) => {
		filtro.forEach(val => {
			if (key.startsWith(val)) {
				cuentasFiltradas.push(key)
			}
		});
	});
	return cuentasFiltradas
}

function buscarMovimientos(movimientos, filtro) {
	movimientosFiltrados = []
	movimientos.forEach(mov => {
		if (filtro.includes(mov.idCuenta)) {
			movimientosFiltrados.push(mov)
		}
	});
	return movimientosFiltrados
}
function mapToArray(miMapa) {
	let arrayResultante = [];

	for (let [clave, valor] of miMapa) {
		arrayResultante.push([clave, valor]);
	}

	return arrayResultante;
}

//GENERACION DE INFORMES -----------------------------------------

function informe1001(data, cuentas, terceros, balances, movimientos) {
	let informe = []
	let errorInforme = true
	let cuentasFiltradas = buscarCuentas(cuentas, data.Cuentas)
	let movimientosFiltrados = buscarMovimientos(movimientos, cuentasFiltradas)
	let sumaTerceros = new Map()

	//Suma los valores en la cuenta
	movimientosFiltrados.forEach(mov => {
		let tercero = mov.idTercero
		let debito = parseInt(mov.debito)
		let credito = parseInt(mov.credito)
		if (!sumaTerceros.has(tercero)) {
			sumaTerceros.set(tercero, { debito, credito })
		} else {
			let val = sumaTerceros.get(tercero)
			val.debito = val.debito + debito
			val.credito = val.credito + credito
		}
	});
	sumaTerceros.forEach((elemento,key) => {
		if ((elemento.debito - elemento.credito)<100000) {
			sumaTerceros.delete(key)
		}
		else {
			let tercero = terceros.get(key)
		}

	});

	//Genera el informe
	informe = mapToArray(sumaTerceros)

	return {
		informe,
		error: errorInforme
	}	
}
function informe1003(data, cuentas, terceros, balances, movimientos) {

	return [{
		error: "",
	}]
}
function informe1004(data, cuentas, terceros, balances, movimientos) {

	return [{
		error: "",
	}]
}
function informe1005(data, cuentas, terceros, balances, movimientos) {

	return [{
		error: "",
	}]
}
function informe1006(data, cuentas, terceros, balances, movimientos) {

	return [{
		error: "",
	}]
}
function informe1007(data, cuentas, terceros, balances, movimientos) {

	return [{
		error: "",
	}]
}
function informe1008(data, cuentas, terceros, balances, movimientos) {

	return [{
		error: "",
	}]
}
function informe1009(data, cuentas, terceros, balances, movimientos) {

	return [{
		error: "",
	}]
}
function informe1010(data, cuentas, terceros, balances, movimientos) {

	return [{
		error: "",
	}]
}
function informe1011(data, cuentas, terceros, balances, movimientos) {
	let errorInforme = true

	const data2 = [
		{ name: "test1", email: "test1@me.com", age: 20 },
		{ name2: "test2", email: "test2@me.com", age: 21 },
		{ name3: "test3", email: "test3@me.com", age: 22 },
		{ name4: "test4", email: "test4@me.com", age: 23 },
		{ name3: "test5", email: "test5@me.com", age: 24 },
	]

	return {
		informe: data2,
		error: errorInforme
	}	
	
}
function informe1012(data, cuentas, terceros, balances, movimientos) {

	return [{
		error: "",
	}]
}
function informe2276(data, cuentas, terceros, balances, movimientos) {

	return [{
		error: "",
	}]
}