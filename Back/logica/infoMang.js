let mov = [];

//Datos de la empresa
let año = 2023;
let nombreEmpresa = 'Empresa de Prueba';
let nitEmpresa = '123456789';
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
		this.id = campos[0];
		this.dv = campos[1];
		this.clase = campos[2];
		this.nombreCompleto = campos[3];
		this.direccion = campos[4];
		this.telefono = campos[5];
		this.fax = campos[6];
		this.ciudad = campos[7];
		this.nombreCiudad = campos[8];
		this.apartado = campos[9];
		this.email = campos[10];
		this.apellido1 = campos[11];
		this.apellido2 = campos[12];
		this.nombre1 = campos[13];
		this.nombre2 = campos[14];
		this.naturaleza = campos[15];
		this.actEconomica = campos[16];
		this.codArea = campos[17];
		this.celular = campos[18];
	}
	verificarNombre() {
		if (this.naturaleza != 'NATURAL') {
			this.nombreCompleto = this.nombreCompleto.toUpperCase();
			return;
		}
		if (this.nombreCompleto == '') {
			//this.error = 'Aviso';
			this.nombreCompleto = this.apellido1 + ' ' + this.apellido2 + ' ' + this.nombre1 + ' ' + this.nombre2;
		}
		if (this.apellido1 == '' && this.apellido2 == '' && this.nombre1 == '' && this.nombre2 == '') {
			//this.error = 'Aviso';
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
		if (this.id.length == 9 && this.id[0] == '9' && this.naturaleza == 'NATURAL') {
			this.error = 'Error: Posible empresa como persona natural';
		}
	}
}

class Balance {
	constructor(campos) {
		this.error = '';
	}
}

//Carga de informacion
exports.cargarTerceros = (req, res) => {
	let estado = true;
	let terceros = req.body;
	let errores = [];

	terceros.pop();
	console.log('Cargando ' + terceros.length + ' terceros');

	//filtrar informacion
	terceros.forEach(linea => {
		let tercero = new Tercero(linea);
		listaTercero.set(tercero.id, tercero);
		//tercero.cargar();
		if (tercero.error != '') {
			let idError = errores.length + 'T';
			let error = new Error(idError, 'Terceros', tercero.error, linea);
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

	console.log('Cargando ' + balances.length + ' balances');

	let id = 1;
	let cuentaPrincipal = '';

	let cDescartadas = 0;
	//Filtrar informacion
	balances.forEach(linea => {
		//Limpiar linea
		linea = linea.replace(/\x00/g, '');
		linea = linea.replace(/(")\1+/g, '$1');
		//Separar campos
		let campos = linea.split('"');

		//Eliminar espacios al inicio y final de los campos
		for (let i = 0; i < campos.length; i++) {
			campos[i] = campos[i].trim();
			this.id = i;
		}
		//Decidir si es cuenta o balance
		if (campos.length == 7) {			//Es una cuenta
			//Elimina espacios en blanco y tabulaciones
			let temp = campos[1].replace(/\s+/g, ' ')

			//Divide la cadena en nombre y cuenta
			let sep = temp.indexOf(' ');
			if (sep == -1) {					//Error en cuenta
				if (/^[0-9]+$/.test(temp)) {
					let error = new Error(id++ + 'B', 'Balance', 'Error: Cuenta sin nombre', linea);
					errores.push(error);
				} else {
					let error = new Error(id++ + 'B', 'Balance', 'Error: desconocido', linea);
					errores.push(error);
				}
			} else {							//Creacion de cuenta
				let numCuenta = temp.substring(0, sep);
				let nombreCuenta = temp.substring(sep + 1, temp.length);
				//Crear cuenta
				if (/^[0-9]+$/.test(numCuenta)) {
					let cuenta = new Cuenta(numCuenta, nombreCuenta);
					listaCuenta.set(cuenta.cuenta, cuenta);
					cuentaPrincipal = cuenta.cuenta;
				} else {						//Es un encabezado
					cDescartadas++;
				}
			}
		} else if (campos.length == 8) {	//Es un balance
			//Crear balance
			if (campos[1] == 'CUENTA') {		//Es un encabezado
				cDescartadas++;
			} else {
				let balance = new Balance(cuentaPrincipal, campos);
				listaBalance.set(id++, balance);
				//balance.cargar();
				if (balance.error != '') {
					let idError = balance.id + 'B';
					let error = new Error(idError, 'Balance', balance.error, linea);
					errores.push(error);
				}
			}
		} else {							//Es un encabezado
			cDescartadas++;
		}
	});
	//Reporte de errores
	console.log('Lineas descartadas : ' + cDescartadas);
	console.log('Errores encontrados: ' + errores.length);
	res.json({
		estado: estado,
		errores: errores,
	});
}
exports.cargarMov = (req, res) => {
	
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