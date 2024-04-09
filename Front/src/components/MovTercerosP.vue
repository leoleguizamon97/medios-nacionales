<template>
	<div class="h-100 d-flex flex-column overflow-hidden">
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Movimientos de Terceros</a>
				</div>
				<form name="movTerceros" class="d-flex" role="search" @submit.prevent="">
					<button class="btn btn-outline-secondary me-1" title="Descargar Movimiento de Terceros" @click="pedirMovTerceros()">
						<i class="bi bi-cloud-download"></i>
					</button>
					<input class="form-control" type="search" placeholder="Buscar" name="Buscar Movimiento de Terceros"
						@input="buscar()">
				</form>
			</div>
		</div>
		<div class="card mt-1 flex-fill d-flex flex-column overflow-hidden">
			<table>
				<thead class="border-bottom border-secondary">
					<tr class="text-center">
						<th class="col-1" scope="col">ID</th>
						<th class="col-10" scope="col">Ficha de movTerceros</th>
						<th class="col-1 pe-4" scope="col">Editar</th>
					</tr>
				</thead>
			</table>
			<div class="text-center align-content-center flex-fill" v-if="movTercerosCompletos.length == 0">
				<h4 v-if="inicial">Descargue primero los Movimientos de tercero</h4>
				<div v-else class="spinner-border" role="status"></div>
			</div>
			<h4 class="text-center align-content-center h-100" v-else-if="movTerceros.length == 0">Sin resultados</h4>
			<div class="flex-fill overflow-auto" v-else>
				<table class="table table-sm table-striped">
					<tbody>
						<tr v-for="mov in movTerceros" :key="mov.idmovTercero">
							<th>
								{{mov.id}}
							</th>
							<td class="col-11 align-middle" scope="row">
								<FichaMovTercerosN :mov />
							</td>
							<td class="col-1 align-middle text-center">
								<button class="btn btn-outline-primary me-1 " title="Corregir" @click="editar(mov.movTercero)">
									<i class="bi bi-pencil-square"></i>
								</button>
								<button class="btn btn-outline-danger " title="Eliminar" @click="eliminar(mov.movTercero)">
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
import FichaMovTercerosN from './Elementos/FichaMovTercerosN.vue';
import datos from "../dataManagment";
export default {
	components: {
		FichaMovTercerosN
	},
	methods: {
		async pedirMovTerceros() {
			this.movTerceros = []
			this.movTercerosCompletos = []
			this.inicial = false
			let temp = await datos.pedirMov()
			this.movTercerosCompletos = temp.data.mov
			this.movTerceros = temp.data.mov
			console.log(temp.data.mov);
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
			movTerceros: [],
			movTercerosCompletos: [],
			inicial: true,
		}
	}
}
</script>
<style></style>