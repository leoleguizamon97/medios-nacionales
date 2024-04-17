<template>
	<div class="h-100 d-flex flex-column overflow-hidden">
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Balance de prueba</a>
				</div>
				<form name="balances" class="d-flex" role="search" @submit.prevent="">
					<button class="btn btn-outline-secondary me-1" title="Descargar balances" @click="pedirbalances()">
						<i class="bi bi-cloud-download"></i>
					</button>
					<input class="form-control" type="search" placeholder="Buscar" name="buscarbalances"
						@input="buscar()">
				</form>
			</div>
		</div>
		<div class="card mt-1 flex-fill d-flex flex-column overflow-hidden">
			<table>
				<thead class="border-bottom border-secondary">
					<tr class="text-center">
						<th class="col-11" scope="col">Ficha de balance</th>
						<th class="col-1 pe-4" scope="col">Editar</th>
					</tr>
				</thead>
			</table>
			<h4 v-if="inicial" class="text-center align-content-center flex-fill" >Descargue primero los balances</h4>
			<div v-else-if="cargando" class="text-center align-content-center flex-fill"><div class="spinner-border" role="status" ></div></div>
			<h4  v-else-if="balances.length == 0" class="text-center align-content-center flex-fill" >Sin resultados</h4>
			<div v-else class="flex-fill overflow-auto" >
				<table class="table table-sm table-striped">
					<tbody>
						<tr v-for="bal in balances" :key="bal.idbalance">
							<th class="col-11 align-middle" scope="row">
								<FichabalancesN :bal />
							</th>
							<td class="col-1 align-middle text-center">
								<button class="btn btn-outline-primary me-1 " title="Corregir" @click="editar(bal.balance)">
									<i class="bi bi-pencil-square"></i>
								</button>
								<button class="btn btn-outline-danger " title="Eliminar" @click="eliminar(bal.balance)">
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
import FichabalancesN from '../Elementos/FichaBalancesN.vue';
import datos from "@/dataManagment";
export default {
	components: {
		FichabalancesN
	},
	methods: {
		async pedirbalances() {
			this.cargando = true
			this.inicial = false
			this.balances = []
			this.balancesCompletos = []
			let temp = await datos.pedirBalance()
			this.balancesCompletos = temp.data.balance
			this.balances = this.balancesCompletos
			this.cargando = false
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
			balances: [],
			balancesCompletos: [],
			inicial: true,
			cargando: false,
		}
	}
}
</script>
<style></style>