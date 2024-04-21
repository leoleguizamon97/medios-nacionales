module.exports = {
	helloWorld,
	generarInforme
}

let cuentas = []
let terceros = []
let balances = []
let movimientos = []

function helloWorld(config) {
	return true
}

function generarInforme(data, cuentas, terceros, balances, movimientos) {
	this.cuentas = cuentas
	this.terceros = terceros
	this.balances = balances
	this.movimientos = movimientos
	let resultado = []

	switch (data.Titulo) {
		case "1001":
			resultado = informe1001(data)
			break;
		case "1003":
			resultado = informe1003(data)
			break;
		case "1004":
			resultado = informe1004(data)
			break;
		case "1005":
			resultado = informe1005(data)
			break;
		case "1006":
			resultado = informe1006(data)
			break;
		case "1007":
			resultado = informe1007(data)
			break;
		case "1008":
			resultado = informe1008(data)
			break;
		case "1009":
			resultado = informe1009(data)
			break;
		case "1010":
			resultado = informe1010(data)
			break;
		case "1011":
			resultado = informe1011(data)
			break;
		case "1012":
			resultado = informe1012(data)
			break;
		case "2276":
			resultado = informe2276(data)
			break;
		default:
			console.log("ERROR")
			break;
	}
	return resultado

}

function informe1001(data) {
	return [{
		error: "",
	}]
}
function informe1003(data) {
	
	return [{
		error: "",
	}]
}
function informe1004(data) {
	
	return [{
		error: "",
	}]
}
function informe1005(data) {
	
	return [{
		error: "",
	}]
}
function informe1006(data) {
	
	return [{
		error: "",
	}]
}
function informe1007(data) {
	
	return [{
		error: "",
	}]
}
function informe1008(data) {
	
	return [{
		error: "",
	}]
}
function informe1009(data) {
	
	return [{
		error: "",
	}]
}
function informe1010(data) {
	
	return [{
		error: "",
	}]
}
function informe1011(data) {
	
	return [{
		error: "",
	}]
}
function informe1012(data) {
	
	return [{
		error: "",
	}]
}
function informe2276(data) {
	
	return [{
		error: "",
	}]
}