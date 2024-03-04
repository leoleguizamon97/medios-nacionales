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
						<th class="col-1" scope="col">Corregir</th>
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
								<button class="btn btn-outline-danger w-50" title="Eliminar">
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
			} else if(tipo == 'reset') {
				alerta.classList.add('alert-secondary');
				alerta.innerHTML = archivo.charAt(0).toUpperCase() + archivo.slice(1);
				return;
			}

			return;
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
			//Limpia el arreglo y lo carga con el contenido del archivo
			var arreglo = [];
			return new Promise((resolve, reject) => {
				const lector = new FileReader();
				lector.readAsText(archivo);
				lector.onload = () => {
					const lineas = lector.result.split('\n')
					console.log(lineas.length + '<- Cantidad de lineas' + ' ' + tipo + ' ' + archivo.name);
					lineas.forEach(linea => {
						arreglo.push(linea)
					})
					//Guarda el arreglo en el tipo de archivo correspondiente
					if (tipo == 'terceros') {
						this.terceros = arreglo;
					} else if (tipo == 'balance') {
						this.balance = arreglo;
					} else if (tipo == 'movimientos') {
						this.movimientos = arreglo;
					}
					resolve('Cargado')
				}
				//Si hay un error al cargar el archivo
				lector.onerror = reject
			});
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
			errores: [
				// {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Contenido de la linea  lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pha',
				// 	contenido: 'Contenido de la linea  lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 100,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// }, {
				// 	id: 1,
				// 	archivo: 'Terceros',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 2,
				// 	archivo: 'Balance',
				// 	error: 'Error en la linea 1',
				// 	contenido: 'Contenido de la linea 1'
				// },
				// {
				// 	id: 3,
				// 	archivo: 'Movimientos',
				// 	error: 'loremp ',
				// 	contenido: 'Contenido de la linea 1'
				// },
			]

		}
	}
}
</script>

<style></style>