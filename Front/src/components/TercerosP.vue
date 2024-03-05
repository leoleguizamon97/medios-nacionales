<template>
	<div>
		<div class="d-flex">
			<div class="card w-75 p-1">
				<div class="p-1 bg-body-tertiary rounded-1 mb-1">
					<label for="terceros-path" class="form-label">Terceros:</label>
					<form class="d-flex" id="formTerceros" @submit.prevent="principal">
						<input class="form-control" type="file" id="terceros-path" ref="terceros"
							placeholder="terceros.txt" required @change="guardarPathTerceros">
						<button type="submit" class="btn btn-primary ms-1" title="Cargar Terceros"
							@click="cargarArchivo('terceros', this.archivoTerceros)">
							<i class="bi bi-check2-circle m-1"></i>
						</button>
					</form>
				</div>
				<div class="p-1 bg-body-tertiary rounded-1 mb-1">
					<label for="balance-path" class="form-label">Balance de prueba:</label>
					<form class="d-flex" id="formBalance" @submit.prevent="principal">
						<input class="form-control" type="file" id="balance-path" ref="balance"
							placeholder="balance.txt" required @change="guardarPathBalance">
						<button type="submit" class="btn btn-primary ms-1" title="Cargar Balance"
							@click="cargarArchivo('balance', this.archivoBalance)">
							<i class="bi bi-check2-circle m-1"></i>
						</button>
					</form>
				</div>
				<div class="p-1 bg-body-tertiary rounded-1">
					<label for="movTer-path" class="form-label">Movimiento de Terceros:</label>
					<form id="formMovTer" class="d-flex" @submit.prevent="principal">
						<input class="form-control" type="file" id="movTer-path" ref="movTer" placeholder="movTer.txt"
							required @change="guardarPathMov">
						<button type="submit" class="btn btn-primary ms-1" title="Cargar Movimiento"
							@click="cargarArchivo('movimientos', this.archivoMovTer)">
							<i class="bi bi-check2-circle m-1"></i>
						</button>
					</form>
				</div>
			</div>
			<div class="card w-25 p-1 ms-1">
				<h6 class="text-center">Carga los archivos solicitados</h6>
				<div id='avisoArchTerceros' class="alert alert-secondary mb-1 p-2 text-center" role="alert">
					Terceros
				</div>
				<div id='avisoArchBalance' class="alert alert-secondary mb-1 p-2 text-center" role="alert">
					Balance
				</div>
				<div id='avisoArchMov' class="alert alert-secondary p-2 text-center" role="alert">
					Movimientos
				</div>
				<div class="d-flex">
					<button class="btn btn-success w-25 ms-1 w-50" title="Cargar">
						<i class="bi bi-cloud-upload m-1"></i>
					</button>
					<button class="btn btn-outline-warning w-25 ms-1 w-25" title="Limpiar" @click="limpiar()">
						<i class="bi bi-stars m-1"></i>
					</button>
					<button class="btn btn-outline-danger w-25 ms-1 w-25" title="Borrar DB">
						<i class="bi bi-exclamation-octagon-fill m-1"></i>
					</button>
				</div>
			</div>
		</div>
		<div class="card my-1">
			<div class="w-100 my-1">
				<h6 class="text-center">Verificacion Errores</h6>
			</div>
			<div class="alert text-center" role="alert" v-if="errores.length == 0">
				¡Sin errores! :D
			</div>
			<table class="table table-sm table-striped" v-else>
				<thead>
					<tr class="text-center">
						<th class="col" scope="col">#</th>
						<th class="col" scope="col">Archivo</th>
						<th class="col-9" scope="col">Error</th>
						<th class="col-1" scope="col">Acción</th>
					</tr>
				</thead>
				<tbody class="table-group-divider">
					<tr v-for="error in errores" :key="error.id">
						<th scope="row" class="text-center align-middle">{{ error.id }}</th>
						<td class="text-center p-auto align-middle">{{ error.archivo }}</td>
						<td>
							<div>
								{{ error.error }}
							</div>
							<input class="form-control" type="text" :value="error.contenido">
						</td>
						<td class="align-middle p-1">
							<div class="d-flex">
								<button class="btn btn-outline-primary me-1 w-50" title="Corregir">
									<i class="bi bi-pencil-square"></i>
								</button>
								<button class="btn btn-outline-danger w-50" title="Eliminar" @click="eliminarError(error.id)">
									<i class="bi bi-x-circle"></i>
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

</template>

<script>
import datos from '../dataManagment.js'
export default {
	methods: {
		avisoArchivos(archivo, tipo) {
			//Selecciona el alerta correspondiente
			let alerta;
			if (archivo == 'terceros') {
				alerta = document.getElementById('avisoArchTerceros');
			} else if (archivo == 'balance') {
				alerta = document.getElementById('avisoArchBalance');
			} else if (archivo == 'movimientos') {
				alerta = document.getElementById('avisoArchMov');
			}

			//Remueve el tipo de alerta que tenga
			alerta.classList.remove('alert-danger', 'alert-warning', 'alert-secondary', 'alert-success');

			//Agrega el tipo de alerta que se le indique
			if (tipo == 'error') {
				alerta.classList.add('alert-danger');
				alerta.innerHTML = 'Error al cargar el archivo ' + archivo;
				return;
			} else if (tipo == 'warning') {
				alerta.classList.add('alert-warning');
				alerta.innerHTML = 'Carga primero el archivo de ' + archivo;
				return;
			} else if (tipo == 'success') {
				alerta.classList.add('alert-success');
				alerta.innerHTML = 'Archivo de ' + archivo + ' cargado';
				return;
			} else if (tipo == 'secondary') {
				alerta.classList.add('alert-secondary');
				alerta.innerHTML = 'Archivo de ' + archivo + ' seleccionado';
				return;
			} else if (tipo == 'reset') {
				alerta.classList.add('alert-secondary');
				alerta.innerHTML = archivo.charAt(0).toUpperCase() + archivo.slice(1);
				return;
			} else {
				//Muestra un error si no se le indica un tipo de alerta
				window.alert('No se ha indicado un tipo de alerta');
				return;
			}
		},
		guardarPathTerceros(evento) {
			this.archivoTerceros = evento.target.files[0];
			this.avisoArchivos('terceros', 'secondary');
		},
		guardarPathBalance(evento) {
			this.archivoBalance = evento.target.files[0];
			this.avisoArchivos('balance', 'secondary');
		},
		guardarPathMov(evento) {
			this.archivoMovTer = evento.target.files[0];
			this.avisoArchivos('movimientos', 'secondary');
		},
		cargarArchivo(tipo, archivo) {
			//Verifica si ya se cargo un archivo
			if (archivo == null) {
				this.avisoArchivos(tipo, 'warning');
				return;
			}
			//Elimina los errores anteriores
			this.eliminarErrores(tipo);
			//Limpia el arreglo y lo carga con el contenido del archivo
			var arreglo = [];
			const lector = new FileReader();
			lector.readAsText(archivo);
			//Carga el archivo
			lector.onload = async () => {
				const lineas = lector.result.split('\n')
				console.log(lineas.length + '<- Cantidad de lineas' + ' ' + tipo + ' ' + archivo.name);
				lineas.forEach(linea => {
					arreglo.push(linea)
				})
				//Guarda el arreglo en el tipo de archivo correspondiente
				if (tipo == 'terceros') {
					this.terceros = arreglo;
					//Manda el archivo a back, y gestiona su respuesta
					let respuesta = await datos.cargarTerceros(arreglo);
					if (respuesta.estado == true) {
						this.avisoArchivos('terceros', 'success');
					}else{
						this.avisoArchivos('terceros', 'error');
					}
				} else if (tipo == 'balance') {
					this.balance = arreglo;
					let respuesta = await datos.cargarBalance(arreglo);
					if (respuesta.estado == true) {
						this.avisoArchivos('balance', 'success');
						this.agregarErrores(respuesta.errores);
					}else{
						this.avisoArchivos('balance', 'error');
					}
				} else if (tipo == 'movimientos') {
					this.movimientos = arreglo;
					let respuesta = await datos.cargarMov(arreglo);
					console.log(respuesta);
					if (respuesta.estado == true) {
						this.avisoArchivos('movimientos', 'success');
						this.agregarErrores(respuesta.errores);
					}else{
						this.avisoArchivos('movimientos', 'error');
					}
				}
			}
		},
		limpiar() {
			this.archivoTerceros = null;
			this.archivoBalance = null;
			this.archivoMovTer = null;
			this.terceros = [];
			this.balance = [];
			this.movimientos = [];
			this.errores = [];
			this.avisoArchivos('terceros', 'reset');
			this.avisoArchivos('balance', 'reset');
			this.avisoArchivos('movimientos', 'reset');
			document.getElementById('terceros-path').value = '';
			document.getElementById('balance-path').value = '';
			document.getElementById('movTer-path').value = '';
		},
		agregarErrores(errores) {
			errores.forEach(error => {
				this.errores.push(error);
			});
		},
		eliminarError(id) {
			this.errores = this.errores.filter(error => error.id != id);
		},
		eliminarErrores(archivo) {
			this.errores = this.errores.filter(error => error.archivo != (archivo.charAt(0).toUpperCase() + archivo.slice(1)));
		},
	},
	data() {
		return {
			//Archivos a cargar
			archivoTerceros: null,
			arhivoBalance: null,
			archivoMovTer: null,
			//Datos de los archivos
			terceros: [],
			balance: [],
			movimientos: [],
			errores: []

		}
	}
}
</script>

<style></style>