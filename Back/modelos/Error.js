module.exports = class Error {
	constructor(id, archivo, error, contenido) {
		this.id = id;
		this.archivo = archivo;
		this.error = error;
		this.contenido = contenido;
	}
}