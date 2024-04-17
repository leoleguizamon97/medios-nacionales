module.exports = class Cuenta {
	constructor(cuenta, nombre, nitEmpresa) {
		this.cuenta = cuenta;
		this.nombre = nombre;
		this.empresa = nitEmpresa;
		this.error = '';
	}
}