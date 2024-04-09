<template>
	<div class="h-100 d-flex flex-column overflow-hidden">
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Terceros</a>
				</div>
				<form name="terceros" class="d-flex" role="search" @submit.prevent="">
					<button class="btn btn-outline-secondary me-1" title="Descargar terceros" @click="pedirTerceros()">
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
			<div class="text-center align-content-center flex-fill" v-if="tercerosCompletos.length == 0">
				<h4 v-if="inicial">Descargue primero los terceros</h4>
				<div v-else class="spinner-border" role="status"></div>
			</div>
			<h4 class="text-center align-content-center h-100" v-else-if="terceros.length == 0">Sin resultados</h4>
			<div class="flex-fill overflow-auto" v-else>
				<table class="table table-sm table-striped">
					<tbody>
						<tr v-for="ter in terceros" :key="ter.idTercero">
							<th class="col-11 align-middle" scope="row">
								<FichaTercerosN :ter />
							</th>
							<td class="col-1 align-middle text-center">
								<button class="btn btn-outline-primary me-1 " title="Corregir" @click="editar(ter.tercero)">
									<i class="bi bi-pencil-square"></i>
								</button>
								<button class="btn btn-outline-danger " title="Eliminar" @click="eliminar(ter.tercero)">
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
import FichaTercerosN from './Elementos/FichaTercerosN.vue';
import datos from "../dataManagment";
export default {
	components: {
		FichaTercerosN
	},
	methods: {
		async pedirTerceros() {
			this.terceros = []
			this.tercerosCompletos = []
			this.inicial = false
			let temp = await datos.pedirTerceros()
			this.tercerosCompletos = temp.data.terceros
			this.terceros = this.tercerosCompletos
		},
		buscar() {
			console.log('Awantaaaa');
		},
		editar(){
			console.log('AwantaaaaEd');
		},
		eliminar(){
			console.log('AwantaaaaDel');
		},
	},
	data() {
		return {
			terceros: [],
			tercerosCompletos: [],
			inicial: true,
			i: 0
		}
	}
}
</script>
<style></style>