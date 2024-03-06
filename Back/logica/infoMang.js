let balance = [];
let mov = [];

//Listas
let listaTerceros = new Map();
let listaBalance = new Map();
let listaMov = new Map();

//Clases
class Error {
	constructor(id, archivo, error, contenido) {
		this.id = id;
		this.archivo = archivo;
		this.error = error;
		this.contenido = contenido;
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

		//Eliminar \r
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

//Carga de informacion
exports.cargarTerceros = (req, res) => {
	let terceros = req.body;
	terceros.pop();
	let errores = [];
	console.log('Terceros: ' + terceros.length);
	//filtrar informacion
	terceros.forEach(linea => {
		let tercero = new Tercero(linea);
		listaTerceros.set(tercero.id, tercero);
		//tercero.cargar();
		if (tercero.error != '') {
			let idError = errores.length + 'T';
			let error = new Error(idError, 'Terceros', tercero.error, linea);
			errores.push(error);
		}
	});
	console.log('Errores: ' + errores.length);
	res.json({
		estado: true,
		errores: errores,
	});
}
exports.cargarBalance = (req, res) => {
	balance = req.body;
	console.log('Balance: ' + balance.length);
	res.json({
		estado: true,
		errores: [
			{
				id: 1 + 'B',
				archivo: "Balance",
				error: "Error de prueba 1",
				contenido: "Contenido de prueba 1"
			},
			{
				id: 2 + 'B',
				archivo: "Balance",
				error: "Error de prueba 2",
				contenido: "Contenido de prueba 2"
			},
			{
				id: 3 + 'B',
				archivo: "Balance",
				error: "Error de prueba 3",
				contenido: "Contenido de prueba 3"
			},
		],
	});
}
exports.cargarMov = (req, res) => {
	mov = req.body;
	console.log('Movimiento: ' + mov.length);
	res.json({
		estado: true,
		errores: [
			{
				id: 1 + 'M',
				archivo: "Movimientos",
				error: "Error de prueba 1",
				contenido: "Contenido de prueba 1"
			},
			{
				id: 2 + 'M',
				archivo: "Movimientos",
				error: "Error de prueba 2",
				contenido: "Contenido de prueba 2"
			},
			{
				id: 3 + 'M',
				archivo: "Movimientos",
				error: "Error de prueba 3",
				contenido: "Contenido de prueba 3"
			},
		],
	});
}

//DB Eliminar
exports.eliminarDB = (req, res) => {
	listaTerceros.clear();
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