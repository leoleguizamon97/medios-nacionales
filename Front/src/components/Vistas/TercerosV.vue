<template>
	<div class="h-100 d-flex flex-column overflow-hidden">
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Terceros</a>
				</div>
				<div class="d-flex justify-content-center align-items-center mx-1">
					<input class="form-check-input" type="checkbox" value="" id="CheckErroneos" @click="soloErroneos()">
					<label class="ms-1 form-check-label text-nowrap" for="CheckErroneos">
						Ver solo erroneos
					</label>
				</div>
				<form name="terceros" class="d-flex" role="search" @submit.prevent="">
					<button class="btn btn-outline-secondary me-1" title="Descargar terceros" @click="pedirTerceros()" name="btnBuscar">
						<i class="bi bi-cloud-download"></i>
					</button>
					<input class="form-control" type="search" placeholder="Buscar" name="buscarTerceros"
						@input="buscar()">
				</form>
			</div>
		</div>
		<div class="card mt-1 flex-fill d-flex flex-column overflow-hidden">
			<table>
				<thead class="border-bottom border-secondary">
					<tr class="text-center">
						<th class="col-11" scope="col">Ficha de tercero</th>
						<th class="col-1 pe-4" scope="col">Editar</th>
					</tr>
				</thead>
			</table>
			<h4 v-if="inicial" class="text-center align-content-center flex-fill">Descargue primero los terceros</h4>
			<div v-else-if="cargando" class="text-center align-content-center flex-fill">
				<div class="spinner-border" role="status"></div>
			</div>
			<h4 v-else-if="terceros.length == 0" class="text-center align-content-center h-100">Sin resultados</h4>
			<div v-else class="flex-fill overflow-auto">
				<table class="table table-sm table-borderless">
					<tbody>
						<tr v-for="ter in terceros" :key="ter.idUnico" :id="ter.idUnico+'fila'">
							<th class="col-11 align-middle" scope="row">
								<FichaTercerosN :ter :id="ter.idUnico+'f'"/>
							</th>
							<td class="col-1 align-middle text-center" :id="ter.idUnico+'btn'">
								<button class="btn btn-outline-primary me-1 " title="Corregir" @click="editar(ter.idUnico)">
									<i class="bi bi-pencil-square"></i>
								</button>
								<button class="btn btn-outline-danger " title="Eliminar" @click="eliminar(ter.idUnico)">
									<i class="bi bi-x-circle"></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

	</div>
</template>
<script>
import FichaTercerosN from '../Elementos/FichaTercerosN.vue';
import datos from "@/dataManagment";
export default {
	components: {
		FichaTercerosN
	},
	methods: {
		async pedirTerceros() {
			this.cargando = true
			this.inicial = false
			this.terceros = []
			this.tercerosCompletos = []
			let temp = await datos.pedirTerceros()
			this.tercerosCompletos = temp.data.terceros
			this.terceros = this.tercerosCompletos
			this.cargando = false
		},
		buscar() {
			let valor = document.forms['terceros'].elements['buscarTerceros'].value
			if (/^[0-9]+$/.test(valor)) {
				this.terceros = this.tercerosCompletos.filter(tercero => tercero.id.startsWith(valor))
			} else {
				this.terceros = this.tercerosCompletos.filter(tercero => tercero.nombreCompleto.toLowerCase().includes(valor.toLowerCase()))
			}
		},
		soloErroneos() {
			if (this.verErrores){
				this.verErrores = false
				document.forms['terceros'].elements['buscarTerceros'].disabled= true
				document.forms['terceros'].elements['btnBuscar'].disabled= true
				this.terceros = this.tercerosCompletos.filter(tercero => tercero.error != '')
			} else {
				this.verErrores = true
				document.forms['terceros'].elements['buscarTerceros'].disabled= false
				document.forms['terceros'].elements['btnBuscar'].disabled= false
				this.terceros = this.tercerosCompletos
			}
		},
		editar() {
			console.log('AwantaaaaEd');
		},
		async eliminar(idUnico) {
			const terceroEliminar = document.getElementById(idUnico+'fila');
			if (terceroEliminar) {
  				// Eliminar el div
				let temp = await datos.eliminarTercero(idUnico)
				if(!temp){
					alert('Error eliminando tercero: '+idUnico)
				}
  				terceroEliminar.remove();
			} else {
  				console.log('El tercero que intentas eliminar no existe.');
			}
		},
	},
	data() {
		return {
			terceros: [],
			tercerosCompletos: [],
			inicial: true,
			cargando: false,
			verErrores: true,
		}
	}
}
</script>
<style></style>