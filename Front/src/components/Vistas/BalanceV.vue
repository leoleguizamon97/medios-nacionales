<template>
	<div class="h-100 d-flex flex-column overflow-hidden">
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Balance de prueba</a>
				</div>
				<div class="d-flex justify-content-center align-items-center mx-1">
					<input class="form-check-input" type="checkbox" value="" id="CheckErroneos" @click="soloErroneos()">
					<label class="ms-1 form-check-label text-nowrap" for="CheckErroneos">
						Solo errores
					</label>
				</div>
				<div>
					
				</div>
				<form name="balances" class="d-flex" role="search" @submit.prevent="">
					<button class="btn btn-outline-secondary me-1" title="Descargar balances" @click="pedirbalances()">
						<i class="bi bi-cloud-download"></i>
					</button>
					<input class="form-control" type="search" placeholder="Buscar" name="buscarbalances" @input="buscar()">
				</form>
			</div>
		</div>
		<div class="card mt-1 flex-fill d-flex flex-column overflow-hidden">
			<h4 v-if="inicial" class="text-center align-content-center flex-fill">Descargue primero los balances</h4>
			<div v-else-if="cargando" class="text-center align-content-center flex-fill">
				<div class="spinner-border" role="status"></div>
			</div>
			<h4 v-else-if="balances.length == 0" class="text-center align-content-center flex-fill">Sin resultados</h4>
			<div v-else class="flex-fill overflow-auto table-responsive">
				<table class="table table-sm table-striped">
					<thead class="border-bottom border-secondary sticky-top">
						<tr class="text-center text-nowrap">
							<th class="" scope="col">ID</th>
							<th class="" scope="col">Estado</th>
							<th class="" scope="col">Cuenta</th>
							<th class="" scope="col">ID Tercero</th>
							<th class="" scope="col">Saldo inicial</th>
							<th class="" scope="col">Debito</th>
							<th class="" scope="col">Credito</th>
							<th class="" scope="col">Neto</th>
							<th class="" scope="col">Editar</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="bal in balances" :key="bal.idbalance">
							<th class="align-middle text-nowrap" scope="row" style="width:50px;">
								<input type="text" class="form-control-plaintext text-center" id="idValance" :value="bal.idBalance">
							</th>
							<td class="align-middle text-center text-nowrap">
								<div v-if="bal.error==''" id="estado" class="text-success rounded text-center vertical"><i class="bi bi-check2-square"></i></div>
								<div v-else id="estado" class="text-warning-emphasis rounded text-center" :title="bal.error"><i class="bi bi-exclamation-triangle"></i></div>
							</td>
							<th class="align-middle text-nowrap" scope="row">
								<input type="text" class="text-end m-0 pe-2 form-control flex-fill" style="width: min-content;" id="idCuenta" :value="bal.idCuenta">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="text" class="text-end m-0 pe-2 form-control flex-fill" style="width: min-content;" id="idTercero" :value="bal.idTercero">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end m-0 pe-2 form-control flex-fill" style="width: min-content;" id="saldoInicial" :value="parseFloat( bal.saldoInicial)">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end m-0 pe-2 form-control flex-fill" style="width: min-content;" id="debito" :value="parseFloat( bal.debito)">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end m-0 pe-2 form-control flex-fill" style="width: min-content;" id="credito" :value="parseFloat( bal.credito)">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end m-0 pe-2 form-control flex-fill" style="width: min-content;" id="neto" :value="parseFloat( bal.neto)">
							</th>
							<td class="align-middle text-center text-nowrap">
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
import datos from "@/dataManagment";
export default {
	methods: {
		async pedirbalances() {
			this.cargando = true
			this.inicial = false
			this.balances = []
			this.balancesCompletos = []
			let temp = await datos.pedirBalance()
			this.balancesCompletos = temp.data.balance
			this.balances = this.balancesCompletos.slice(0,50)
			this.calcularPaginas()
			this.cargando = false
		},
		calcularPaginas(){
			let unidades = this.balancesCompletos.length
			this.paginasTotal = parseInt(unidades/50)
			console.log(this.paginasTotal);
		},
		calcularPagParcial(){
			let unidades = this.balances.length
			this.paginasParcial = parseInt(unidades/50)
			console.log(this.paginasParcial);
		},
		buscar() {
			console.log('Awantaaaa');
		},
		editar() {
			console.log('AwantaaaaEd');
		},
		eliminar() {
			console.log('AwantaaaaDel');
		},
	},
	data() {
		return {
			balances: [],
			balancesCompletos: [],
			inicial: true,
			cargando: false,
			paginasTotal: 0,
			paginasParcial: 0,
			paginaAcual:1
		}
	}
}
</script>
<style></style>