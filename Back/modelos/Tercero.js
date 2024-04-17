module.exports = class Tercero {
	constructor(cadena, nitEmpresa, dvEmpresa) {
		let campos = cadena.split(';');

		//Eliminar espacios al inicio y final de los campos
		for (let i = 0; i < campos.length; i++) {
			campos[i] = campos[i].trim();
		}

		//Eliminar espacios de ID
		campos[0] = campos[0].replace(/\s/g, '');

		//Eliminar \r de celular
		campos[18] = campos[18].replace(/\r/g, '');

		//Guardar campos
		this.guardarCampos(campos, nitEmpresa, dvEmpresa);

		// Verificar nombres
		this.verificarNombre();

		// Verificar errores
		this.verErrores();

	}
	guardarCampos(campos, nitEmpresa, dvEmpresa) {
		this.error = '';
		this.id = campos[0];
		this.dv = campos[1];
		this.idUnico = this.id +'-'+ this.dv
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
		this.esEmpresa = this.esEmpresa(nitEmpresa, dvEmpresa);
		if (this.esEmpresa) console.log(this.esEmpresa + ' ' + this.id + ' ' + nitEmpresa);
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
				this.error = 'Error menor: Nombre incompleto o mal suministrado';
			}
		}
	}
	verErrores() {
		//Empresas con id de natural
		if (this.id.length == 9 && this.id[0] == '9' && this.naturaleza == 'NATURAL') {
			this.error = 'Error menor: Posible empresa como persona natural';
		}
	}
	esEmpresa(nitEmpresa, dvEmpresa) {
		return this.id == nitEmpresa && this.dv == dvEmpresa;
	}
}