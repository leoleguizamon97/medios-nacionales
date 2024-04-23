const Error = require('../modelos/Error.js');
const Tercero = require('../modelos/Tercero.js');
const Cuenta = require('../modelos/Cuenta.js');
const Balance = require('../modelos/Balance.js');
const Movimiento = require('../modelos/Movimiento.js');
const informes = require('./informes.js')

//Datos de la empresa
let año = 2023;
let nombreEmpresa = 'N/A';
let nitEmpresa = '0';
let dvEmpresa = '0';

//Listas
let listaTercero = new Map();
let listaBalance = new Map();
let listaMov = new Map();
let listaCuenta = new Map();



//Funciones generales
function limpiarLinea(linea) {
	//Limpiar linea
	linea = linea.replace(/\x00/g, '');
	linea = linea.replace(/(")\1+/g, '$1');
	linea = linea.replace(/\r/g, '');

	//Separar campos
	let campos = linea.split('"');

	//Eliminar espacios al inicio y final de los campos
	for (let i = 0; i < campos.length; i++) {
		campos[i] = campos[i].trim();
	}
	return [linea, campos];
}

//Funciones de creacion
function crearTercero(linea, id) {
	linea = linea.trim()
	let error = 'null';
	if (linea.split(';').length == 19) {
		let tercero = new Tercero(linea, nitEmpresa, dvEmpresa);
		if (listaTercero.has(tercero.idUnico)) {
			tercero.error = 'Error: Tercero repetido';
			console.log('Tercero ' + tercero.idUnico + ' repetido!');
		} else {
			listaTercero.set(tercero.idUnico, tercero);
		}
		if (tercero.error != '') {
			error = new Error(id + 'T', 'Terceros', tercero.error, linea);
		}
	} else {
		error = new Error(id + 'T', 'Terceros', 'Error: Formato incorrecto', linea);
	}
	return error;
}
function crearCuenta(linea, id) {
	let numCuenta = '000'
	if (linea == '') {
		return ['null', 1];
	}
	//Elimina espacios en blanco y tabulaciones
	let temp = linea.replace(/\s+/g, ' ')

	//Divide la cadena en nombre y cuenta
	let sep = temp.indexOf(' ');

	if (sep == -1) {					//Error en cuenta
		let error;
		if (/^[0-9]+$/.test(temp)) {
			error = new Error(id + 'CB', 'Balance', 'Error: Cuenta sin nombre', linea);
		} else {
			error = new Error(id + 'CB', 'Balance', 'Error: desconocido', linea);
		}
		return [error, 1];
	} else {							//Creacion de cuenta
		let nombreCuenta = temp.substring(sep + 1, temp.length);
		let descartado = 0
		numCuenta = temp.substring(0, sep);
		//Crear cuenta
		if (/^[0-9]+$/.test(numCuenta)) {
			let cuenta = new Cuenta(numCuenta, nombreCuenta, nitEmpresa);
			listaCuenta.set(cuenta.cuenta, cuenta);
		} else {						//Es un encabezado
			descartado = 1;
		}
		return ['null', descartado, numCuenta];
	}
}
function crearBalance(cuentaPrincipal, linea, id) {
	let error = 'null';
	let campos = linea.split('"');

	if (campos.length != 8) {
		error = new Error(id, 'Balance', 'Formato incorrecto', linea);
	} else {
		let balance = new Balance(cuentaPrincipal, campos, nitEmpresa, año);
		listaBalance.set(id, balance);

		if (balance.error != '') {
			let idError = id + 'B';
			error = new Error(idError, 'Balance', balance.error, linea);
		}
	}

	return error;
}
function crearMovimiento(cuenta, tercero, campos, id) {
	let error = 'null';
	let movimiento = new Movimiento(id, cuenta, tercero, nitEmpresa, año, campos);
	//Verificar tercero en lista
	if (listaMov.has(id)) {
		console.log("ERRORRRRRR");
	} else {
		listaMov.set(id, movimiento);
	}
	//cargar movimiento
	return error;
}
//Procesar informacion
exports.procTerceros = (req, res) => {
	let terceros = req.body;
	let errores = [];

	listaTercero = new Map;

	terceros.pop();
	//console.log('Cargando ' + terceros.length + ' terceros');

	//filtrar informacion
	terceros.forEach(linea => {
		let error = crearTercero(linea, errores.length);
		if (error != 'null') {
			errores.push(error);
		}
	});

	//console.log('Errores encontrados: ' + errores.length);
	res.json({
		estado: true,
		errores: errores,
	});
}
exports.procBalance = (req, res) => {
	let estado = true;
	let balances = req.body;
	let errores = [];

	listaBalance = new Map;

	//console.log('Cargando ' + balances.length + ' lineas de balances/cuentas');

	let idBalance = 0;
	let idCuenta = 0;
	let cuentaPrincipal = '';

	let cDescartadas = 0;
	//Filtrar informacion
	balances.forEach(linea => {
		temp = limpiarLinea(linea);
		linea = temp[0];
		let campos = temp[1];

		//Decidir si es cuenta o balance
		if (campos.length == 7) {			//Es una cuenta
			let temp = crearCuenta(campos[1], idCuenta++);
			if (temp[0] != 'null') {
				errores.push(temp[0]);
			} else {
				cuentaPrincipal = temp[2]
			}
			cDescartadas += temp[1];
		} else if (campos.length == 8) {	//Es un balance
			//Crear balance
			if (campos[1] == 'CUENTA') {	//Es un encabezado
				cDescartadas++;
			} else {
				let temp = crearBalance(cuentaPrincipal, linea, idBalance++);
				if (temp != 'null') {
					errores.push(temp);
				}
			}
		} else {							//Es un encabezado
			cDescartadas++;
		}
	});
	//Reporte de errores
	//console.log('Lineas descartadas : ' + cDescartadas);
	//console.log('Cuentas creadas : ' + listaCuenta.size);
	//console.log('Balances creados : ' + listaBalance.size);
	//console.log('Errores encontrados: ' + errores.length);
	res.json({
		estado: estado,
		errores: errores,
	});
}
exports.procMov = (req, res) => {
	let estado = true;
	let movimientos = req.body;
	let errores = [];

	listaMov = new Map;

	//console.log('Cargando ' + movimientos.length + ' movimientos');

	//filtrar informacion
	let head = true;
	let count = -1;
	let descartadas = 0;
	let cuentas = 0;
	let errorId = 0;

	//Variables de mov
	let nit = '';
	let cuentaLinea = '';

	movimientos.forEach(linea => {
		//Id de error
		errorId++;
		//Limpiar linea
		let temp = limpiarLinea(linea);
		linea = temp[0];
		let campos = temp[1];
		
		if (head) {									//Obtener nombre de la empresa general
			head = false;
			nombreEmpresa = campos[1];
			descartadas++;
		} else if (campos[1] == nombreEmpresa) {	//Descartar encabezado
			count = 0;
			descartadas++;
		} else if (count <= 3) {					//Lineas de encabezado
			count++;
			descartadas++;
			if (count == 3) {
				count = 9;
			}
		} else {									//Movimientos
			let tamaño = campos.length;
			if (tamaño == 3) {						//Obtener cuenta
				let tempCuenta = campos[1].replace(/\:/g, ',').split(',');
				if (tempCuenta[0] == 'Cuenta') {
					cuentas++;
					//Busca la cuenta
					if (listaCuenta.has(tempCuenta[1].trim())) {
						//console.log('Cuenta ' + tempCuenta[1] + '  \tencontrada');
					} else {
						//Crear cuenta
						let cuenta = tempCuenta[1].trim() + ' ' + tempCuenta[2].trim();
						let error = crearCuenta(cuenta, errorId);
						cuentaLinea = tempCuenta[1].trim();
						if (error[0] != 'null') {
							errores.push(error[0]);
						} else if (error[1] == 1) {
							//console.log(linea);
						}
					}
				} else {
					//Descartada por ser suma total
					descartadas++;
				}
			} else if (tamaño == 4) {				//Descartar totales
				descartadas++;
			} else if (tamaño == 5) {				//Informacion de tercero
				//Si el "." es cifra decimal
				let temp = campos[1].split(' ')[0]
				temp = temp.replace(/[^0-9\-]/g, '')
				if (/-/.test(temp)) {
					if(temp.split('-')[1].length > 1){		//Si no tiene guion, es un nit
						temp = temp.replace(/-/g, '');
					}
				}
				nit = temp;
				//Si la "," es cifra decimal
				//nit = campos[1].split(',')[0].replace(/\./g, '');
			} else if (tamaño == 8 || tamaño == 7 || tamaño == 6) {				//Lineas de movimientos
				let error = crearMovimiento(cuentaLinea, nit, campos, errorId);
				//console.log(linea);
				if (error != 'null') {
					errores.push(error);
				}
			} else {
				console.log(linea +"\t " +tamaño);
				descartadas++;
			}
		}
	});

	//console.log('Cuentas creadas: ' + cuentas);
	//console.log('Errores encontrados: ' + errores.length);
	//console.log('Lineas descartadas : ' + descartadas);
	
	res.json({
		estado,
		errores,
		nombreEmpresa
	});
}

//DB Eliminar
exports.eliminarDB = (req, res) => {
	listaTercero.clear();
	listaBalance.clear();
	listaMov.clear();
	listaCuenta.clear();

	console.log('DB eliminada!');
	res.json({
		estado: true,
	});
}

//Correcion de errores
exports.corregirErrores = (req, res) => {
	let estado = true;
	tipo = req.params.tipo.replace(/[0-9]/g, '');
	id = req.params.tipo.replace(/[^0-9]/g, '')
	linea = req.body.linea
	//Filtrar por tipo de error
	if (tipo == 'b') {
		//Crear balance
		estado = 'Aún no se puede corregir este tipo de error'
	} else if (tipo == 't') {
		temp = crearTercero(linea, id)
		if (temp != 'null') {
			estado = temp.error
		}
	} else if (tipo == 'cb' || tipo == 'c') {
		//Intento de crear
		temp = crearCuenta(linea, id)
		if (temp[0] != 'null') {
			estado = temp[0].error
		}
	} else {
		estado = false;
	}
	res.json({
		estado,
	});
}

//Enviar informacion
exports.sendCuentas = (req, res) => {
	let cuentas = []
	let clavesOrdenadas = Array.from(listaCuenta.keys()).sort();

	clavesOrdenadas.forEach((key) => {
		let value = listaCuenta.get(key);
		cuentas.push({
			cuenta: value.cuenta,
			nombre: value.nombre,
		});
	});
	res.json({
		cuentas,
	})
}
exports.sendTerceros = (req, res) => {
	let terceros = []
	listaTercero.forEach((value, key) => {
		terceros.push({
			error: value.error,
			id: value.id,
			dv: value.dv,
			idUnico: value.idUnico,
			tipoDocumento: value.tipoDocumento,
			tipoPersona: value.tipoPersona,
			nombre1: value.nombre1,
			nombre2: value.nombre2,
			apellido1: value.apellido1,
			apellido2: value.apellido2,
			idMunicipio: value.idMunicipio,
			direccion: value.direccion,
			correo: value.correo,
			celular: value.celular,
			esEmpresa: value.esEmpresa,
			nombreCompleto: value.nombreCompleto,
			telefono: value.telefono,
			fax: value.fax,
			nombreCiudad: value.nombreCiudad,
			apartado: value.apartado,
			actEconomica: value.actEconomica,
			codArea: value.codArea,
		});
	});
	terceros = terceros.sort()
	res.json({
		terceros,
	})
}
exports.sendBalance = (req, res) => {
	let balance = []
	listaBalance.forEach((value, key) => {
		balance.push({
			idBalance: key,
			error: value.error,
			idCuenta: value.idCuenta,
			saldoInicial: value.saldoInicial,
			debito: value.debito,
			credito: value.credito,
			neto: value.neto,
			idTercero: value.idTercero,
		});
	});
	balance = balance.sort()
	res.json({
		balance,
	})
}
exports.sendMov = (req, res) => {
	let mov = []
	listaMov.forEach((value, key) => {
		mov.push({
			id: value.id,
			error: value.error,
			idCuenta: value.idCuenta,
			idTercero: value.idTercero,
			debito: value.debito,
			credito: value.credito,
			neto: value.neto,
			concepto: value.concepto,
			fecha: value.fecha,
			documento: value.documento
		});
	});
	mov = mov.sort()
	res.json({
		mov,
	})
}

//Crear informes
exports.informeNacional = (req, res) => {
	let informe = []
	informes.helloWorld(req.query)
	informe = informes.generarInforme(req.query.data, listaCuenta, listaTercero, listaBalance, listaMov)
	res.json({
		informe
	})
}

//Funciones de editar informacion
exports.editarElementos = (req, res) => {
	let tipo = req.params.tipo
	let idUnico = req.body.idUnico
	let datos = req.body.datos
	let estado = true

	switch (tipo) {
		case "Tercero":
			let tercero = listaTercero.get(idUnico)
			estado = tercero.actualizar(datos)
			break;
		case "Balance":
			let balance = listaBalance.get(idUnico)
			estado = balance.actualizar(datos)
			break;
		case "Movimiento":
			let movimiento = listaMov.get(idUnico)
			estado = movimiento.actualizar(datos)
			break;
		default:
			estado = false
			break;
	}

	res.json({
		estado
	})
}
//Funciones de eliminar informacion
exports.eliminarTercero = (req, res) => {
	let tercero = req.query.idUnico
	listaTercero.delete(tercero)
	res.json({
		val: true
	})
}
exports.eliminarBalance = (req, res) => {
	let balance = req.query.idUnico
	listaBalance.delete(parseInt(balance))
	res.json({
		val: true
	})
}
exports.eliminarMovimiento = (req, res) => {
	let movimiento = req.query.idUnico
	listaMov.delete(parseInt(movimiento))
	res.json({
		val: true
	})
}