module.exports = class Balance {
	constructor(cuenta, campos, nitEmpresa, año) {
		this.error = '';
		this.idCuenta = cuenta;
		this.año = año;
		this.saldoInicial = parseFloat(campos[3].replace(/\./g, ''));
		this.debito = parseFloat(campos[4].replace(/\./g, ''));
		this.credito = parseFloat(campos[5].replace(/\./g, ''));
		this.neto = parseFloat(campos[6].replace(/\./g, ''));
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