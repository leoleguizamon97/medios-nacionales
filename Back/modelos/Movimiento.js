module.exports = class Movimiento {
	constructor(cuentaLinea, campos, nitEmpresa, año) {
		this.error = '';
		this.guardarCampos(campos);
		this.idCuenta = cuentaLinea;
		this.idEmpresa = nitEmpresa;
		this.año = año;
	}

	guardarCampos(campos) {
		this.debito = campos[4].replace(/\./g, '');
		this.credito = campos[5].replace(/\./g, '');
		this.neto = campos[6].replace(/\./g, '');
		this.concepto = campos[3];
		this.fecha = campos[1];
		this.documento = campos[2];
	}
}
