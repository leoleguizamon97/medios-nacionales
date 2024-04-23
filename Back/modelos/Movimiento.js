module.exports = class Movimiento {
	constructor(id, cuenta, tercero, nitEmpresa, año, campos) {
		this.error = '';
		this.id = id;
		this.idCuenta = cuenta;
		this.idTercero = tercero;
		this.idEmpresa = nitEmpresa;
		this.año = año;
		this.guardarCampos(campos);
	}

	guardarCampos(campos) {
		this.debito = parseInt(campos[4].replace(/\,/g, ''));
		this.credito = parseInt(campos[5].replace(/\,/g, ''));
			this.neto = parseInt(campos[6].replace(/\,/g, ''));
		this.concepto = campos[3];
		this.fecha = campos[1];
		this.documento = campos[2];
	}
}
