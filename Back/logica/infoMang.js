//Datos de la empresa
let año = 2023;
let nombreEmpresa = 'Empresa de Prueba';
let nitEmpresa = '79285488';
let dvEmpresa = '0';

//Listas
let listaTercero = new Map();
let listaBalance = new Map();
let listaMov = new Map();
let listaCuenta = new Map();

//Clases
class Error {
	constructor(id, archivo, error, contenido) {
		this.id = id;
		this.archivo = archivo;
		this.error = error;
		this.contenido = contenido;
	}
}

class Cuenta {
	constructor(cuenta, nombre) {
		this.cuenta = cuenta;
		this.nombre = nombre;
	}
}

class Tercero {
	constructor(cadena) {
		let campos = cadena.split(';');
		//Limpiar campos

		//Eliminar espacios al inicio y final de los campos
		for (let i = 0; i < campos.length; i++) {
			campos[i] = campos[i].trim();
		}

		//Eliminar espacios de ID
		campos[0] = campos[0].replace(/\s/g, '');

		//Eliminar \r de celular
		campos[18] = campos[18].replace(/\r/g, '');

		//Guardar campos
		this.guardarCampos(campos);

		// Verificar nombres
		this.verificarNombre();

		// Verificar errores
		this.verErrores();

	}
	guardarCampos(campos) {
		this.error = '';
		this.idTercero = campos[0];
		this.dv = campos[1];
		this.tipoDocumento = campos[2];
		this.tipoPersona = campos[15];
		this.nombre1 = campos[13];
		this.nombre2 = campos[14];
		this.apellido1 = campos[11];
		this.apellido2 = campos[12];
		this.idMunicipio = campos[7];
		this.direccion = campos[4];
		this.correo = campos[10];
		this.celular = campos[18];
		this.esEmpresa = this.esEmpresa();
		if(this.esEmpresa) console.log(this.esEmpresa + ' ' + this.idTercero + ' ' + nitEmpresa);
		//No necesarios
		this.nombreCompleto = campos[3];
		this.telefono = campos[5];
		this.fax = campos[6];
		this.nombreCiudad = campos[8];
		this.apartado = campos[9];
		this.actEconomica = campos[16];
		this.codArea = campos[17];
	}
	verificarNombre() {
		if (this.tipoPersona != 'NATURAL') {
			this.nombreCompleto = this.nombreCompleto.toUpperCase();
			return;
		}
		if (this.nombreCompleto == '') {
			this.nombreCompleto = this.apellido1 + ' ' + this.apellido2 + ' ' + this.nombre1 + ' ' + this.nombre2;
		}
		if (this.apellido1 == '' && this.apellido2 == '' && this.nombre1 == '' && this.nombre2 == '') {
			let nombre = this.nombreCompleto.split(' ');
			if (nombre.length == 1) {
				this.nombre1 = nombre[0];
			} else if (nombre.length == 2) {
				this.apellido1 = nombre[0];
				this.nombre1 = nombre[1];
			} else if (nombre.length == 3) {
				this.apellido1 = nombre[0];
				this.apellido2 = nombre[1];
				this.nombre1 = nombre[2];
			} else if (nombre.length == 4) {
				this.apellido1 = nombre[0];
				this.apellido2 = nombre[1];
				this.nombre1 = nombre[2];
				this.nombre2 = nombre[3];
			} else {
				this.error = 'Error: Nombre incompleto o mal suministrado';
			}
		}
	}
	verErrores() {
		//Empresas con id de natural
		if (this.idTercero.length == 9 && this.idTercero[0] == '9' && this.naturaleza == 'NATURAL') {
			this.error = 'Error: Posible empresa como persona natural';
		}
	}
	esEmpresa() {
		return this.idTercero == nitEmpresa && this.dv == dvEmpresa;
	}
}

class Balance {
	constructor(cuenta, campos) {
		this.error = '';
		this.idCuenta = cuenta;
		this.año = año;
		this.saldoInicial = campos[3].replace(/\./g, '');
		this.debito = campos[4].replace(/\./g, '');
		this.credito = campos[5].replace(/\./g, '');
		this.idTercero = campos[2].replace(/\./g, '');
		this.idEmpresa = nitEmpresa;
		this.verErrores();
	}
	verErrores() {
		//Verificar idTercero
		let temp = this.idTercero.split('-');
		if (temp.length == 1) {
			//Ta bueno
		} else {
			if (temp.length != 2) {
				this.error = 'Error: Formato de tercero incorrecto';
			} else if (temp[1].length != 1) {
				this.error = 'Error: DV de tercero incorrecto';
			}
		}
	}
}
//Funciones para terceros
function crearTercero(linea, id) {
	let error = 'null';
	if (linea.split(';').length == 19) {
		let tercero = new Tercero(linea);
		listaTercero.set(tercero.id, tercero);
		if (tercero.error != '') {
			error = new Error(id + 'T', 'Terceros', tercero.error, linea);
		}
	} else {
		error = new Error(id + 'T', 'Terceros', 'Error: Formato incorrecto', linea);
	}
	return error;
}

//Funciones para balance de prueba
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
function crearCuenta(linea, id) {
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
		let numCuenta = temp.substring(0, sep);
		//Crear cuenta
		if (/^[0-9]+$/.test(numCuenta)) {
			let cuenta = new Cuenta(numCuenta, nombreCuenta);
			listaCuenta.set(cuenta.cuenta, cuenta);
			cuentaPrincipal = cuenta.cuenta;
		} else {						//Es un encabezado
			descartado = 1;
		}
		return ['null', descartado];
	}
}
function crearBalance(cuentaPrincipal,linea,id) {
	let error = 'null';
	let campos = linea.split('"');

	if(campos.length != 8){
		error = new Error(id, 'Balance', 'Formato incorrecto', linea);
	} else {
		let balance = new Balance(cuentaPrincipal, campos);
		listaBalance.set(id, balance);
		
		if (balance.error != '') {
			let idError = id + 'B';
			error = new Error(idError, 'Balance', balance.error, linea);
		}
	}

	return error;
}

//Carga de informacion*
exports.cargarTerceros = (req, res) => {
	let estado = true;
	let terceros = req.body;
	let errores = [];

	terceros.pop();
	console.log('Cargando ' + terceros.length + ' terceros');

	//filtrar informacion
	terceros.forEach(linea => {
		let error = crearTercero(linea, errores.length);
		if (error != 'null') {
			errores.push(error);
		}
	});
	console.log('Errores encontrados: ' + errores.length);
	res.json({
		estado: estado,
		errores: errores,
	});
}
exports.cargarBalance = (req, res) => {
	let estado = true;
	let balances = req.body;
	let errores = [];

	console.log('Cargando ' + balances.length + ' lineas de balances/cuentas');

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
			}
			cDescartadas += temp[1];
		} else if (campos.length == 8) {	//Es un balance
			//Crear balance
			if (campos[1] == 'CUENTA') {	//Es un encabezado
				cDescartadas++;
			} else {
				let temp = crearBalance(cuentaPrincipal,linea,idBalance++);
				if (temp != 'null') {
					errores.push(temp);
				}
			}
		} else {							//Es un encabezado
			cDescartadas++;
		}
	});
	//Reporte de errores
	console.log('Lineas descartadas : ' + cDescartadas);
	console.log('Cuentas creadas : ' + listaCuenta.size);
	console.log('Balances creados : ' + listaBalance.size);

	console.log('Errores encontrados: ' + errores.length);
	res.json({
		estado: estado,
		errores: errores,
	});
}
exports.cargarMov = (req, res) => {
	let estado = true;
	let movimientos = req.body;
	let errores = [];

	console.log('Cargando ' + movimientos.length + ' movimientos');

	//filtrar informacion
	movimientos.forEach(linea => {
		let mov = new Movimiento(linea);
		listaMov.set(mov.id, mov);
		//mov.cargar();
		if (mov.error != '') {
			let idError = errores.length + 'M';
			let error = new Error(idError, 'Movimientos', mov.error, linea);
			errores.push(error);
		}
	});
	console.log('Errores encontrados: ' + errores.length);
	res.json({
		estado: estado,
		errores: errores,
	});
}

//DB Eliminar
exports.eliminarDB = (req, res) => {
	listaTercero.clear();
	listaBalance.clear();
	listaMov.clear();

	console.log('DB eliminada!');
	res.json({
		estado: true,
	});
}

//Correcion de errores
exports.corregirErrores = (req, res) => {
	console.log(req.params.tipo);
	console.log(req.body);
	res.json({
		estado: true,
	});
}