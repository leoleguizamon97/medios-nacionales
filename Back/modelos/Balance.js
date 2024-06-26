module.exports = class Balance {
	constructor(cuenta, campos, nitEmpresa, año) {
		this.error = '';
		this.idCuenta = cuenta;
		this.año = año;
		this.saldoInicial = parseInt(campos[3].replace(/\,/g, ''));
		this.debito = parseInt(campos[4].replace(/\,/g, ''));
		this.credito = parseInt(campos[5].replace(/\,/g, ''));
		this.neto = parseInt(campos[6].replace(/\,/g, ''));
		this.idTercero = campos[2].replace(/\,/g, '');
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
				return
			} else if (temp[1].length != 1) {
				this.error = 'Error: DV de tercero incorrecto';
				return
			}
		}
		this.error = ''
		return
	}
	actualizar(datos){
		this.saldoInicial = parseInt(datos.saldoInicial)
		this.debito = parseInt(datos.debito)
		this.credito = parseInt(datos.credito)
		this.neto = parseInt(datos.neto)
		this.idTercero = datos.idTercero
		this.verErrores()
		if(this.error != ''){
			return false
		}
		return true
	}
}