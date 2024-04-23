<template>
	<div class="h-100 d-flex flex-column overflow-hidden">
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Balance de prueba</a>
				</div>
				<div class="d-flex justify-content-center align-items-center mx-1">
					<button class="btn" @click="sumarPagina(false)"><i class="bi bi-dash"></i></button>
					<input type="number" @change="actualizarPagina()" class="form-control" style="width: 70px;" value="0" id="balContador" :title="'Numero de paginas: '+ (paginasTotal+1)">
					<button class="btn" @click="sumarPagina(true)"><i class="bi bi-plus"></i></button>
				</div>
				<div class="d-flex align-content-center">
					<button type="button" class="btn btn-outline-secondary me-1	" data-bs-toggle="button" @click="soloErroneos()"><i class="bi bi-bug"></i></button>
					<button class="btn btn-outline-secondary me-1" title="Descargar balances" @click="pedirbalances()" id="btnPedirbalances">
						<i class="bi bi-cloud-download"></i>
					</button>
					<form name="balances" class="d-flex" role="search" @submit.prevent="">
						<input class="form-control" type="number" placeholder="Buscar" name="buscarbalances" @input="buscar()">
					</form>
				</div>
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
						<tr v-for="bal in balanceMostrar" :key="bal.idbalance" :id="bal.idBalance+'fbal'">
							<th class="align-middle text-nowrap" scope="row">
								<input type="text" class="form-control-plaintext text-center" id="idValance" :value="bal.idBalance" style="width: 70px;">
							</th>
							<td class="align-middle text-center text-nowrap">
								<div v-if="bal.error==''" id="estado" class="text-success rounded text-center vertical"><i class="bi bi-check2-square"></i></div>
								<div v-else id="estado" class="text-warning-emphasis rounded text-center" :title="bal.error"><i class="bi bi-exclamation-triangle"></i></div>
							</td>
							<th class="text-nowrap" scope="row">
								<input type="text" class="ps-5 form-control-plaintext" id="idCuenta" :value="bal.idCuenta" style="min-width: 120px;">
							</th>
							<th class="text-nowrap" scope="row">
								<input type="text" class="px-3 text-end form-control" id="idTercero" :value="bal.idTercero" style="min-width: 135px;">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end form-control" style="min-width: 145px;" id="saldoInicial" :value="bal.saldoInicial">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end form-control" style="min-width: 145px;" id="debito" :value="bal.debito">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end form-control" style="min-width: 145px;" id="credito" :value="bal.credito">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end form-control" style="min-width: 145px;" id="neto" :value="bal.neto">
							</th>
							<td class="align-middle text-center text-nowrap">
								<button class="btn btn-outline-primary me-1 " title="Corregir" @click="editar(bal.idBalance)">
									<i class="bi bi-pencil-square"></i>
								</button>
								<button class="btn btn-outline-danger " title="Eliminar" @click="eliminar(bal.idBalance)">
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
			this.balances = this.balancesCompletos
			this.balanceMostrar = this.balances.slice(0,50)
			this.paginaAcual = 0
			this.calcularPaginas(this.balances.length)
			this.cargando = false
		},
		calcularPaginas(){
			this.paginasTotal = parseInt(this.balances.length/50)
			this.paginaAcual = 0
			document.getElementById('balContador').value = 1
			this.mostrarPaginas()
		},
		mostrarPaginas(){
			let inicio = this.paginaAcual * 50
			this.balanceMostrar = this.balances.slice(inicio,inicio+50)
		},
		buscar() {
			let valor = document.forms['balances'].elements['buscarbalances'].value
			
			if(valor == ''){
				this.balances = this.balancesCompletos
				this.calcularPaginas()
				return
			}
			if (/^[0-9]+$/.test(valor)) {
				this.balances = this.balancesCompletos.filter( balance => balance.idCuenta.startsWith(valor) || balance.idTercero.startsWith(valor))
			}
			this.calcularPaginas()
		},
		async editar(idUnico) {
			let balanceEditar = document.getElementById(idUnico + 'fbal');
			let data = {
				idTercero: balanceEditar.querySelector("#idTercero").value.trim(),
				saldoInicial : balanceEditar.querySelector('#saldoInicial').value.trim(),
				debito : balanceEditar.querySelector('#debito').value.trim(),
				credito : balanceEditar.querySelector('#credito').value.trim(),
				neto : balanceEditar.querySelector('#neto').value.trim(),
			}
			let temp = await datos.editarElementos(idUnico, "Balance", data);
			console.log(temp);
			if (temp) {
				alert('Linea de balance ' + idUnico + ' editada correctamente')
			} else {
				alert('Error editando linea de balance: ' + idUnico)
			}
		},
		async eliminar(idUnico) {
			const balanceEliminar = document.getElementById(idUnico+'fbal');
			if (balanceEliminar) {
  				// Eliminar el div
				let temp = await datos.eliminarBalance(idUnico)
				if(!temp){
					alert('Error eliminando balance: '+idUnico)
				}
  				balanceEliminar.remove();
				let eliminando = this.balancesCompletos.findIndex(balance => balance.idBalance == idUnico)
				this.balancesCompletos.splice(eliminando,0)
				console.log(eliminando);
			} else {
  				console.log('El balance que intentas eliminar no existe.');
			}
		},
		actualizarPagina(){
			this.paginaAcual = document.getElementById('balContador').value -1
			this.mostrarPaginas()
		},
		sumarPagina(arg){
			if (arg){
				if(this.paginaAcual < this.paginasTotal) this.paginaAcual++;
			}else{
				if(this.paginaAcual >= 1) this.paginaAcual--;
			}
			document.getElementById('balContador').value = this.paginaAcual +1
			this.mostrarPaginas()
		},
		soloErroneos() {
			if (this.verErrores){
				this.verErrores = false
				document.forms['balances'].elements['buscarbalances'].disabled= true
				document.getElementById('btnPedirbalances').disabled = true
				this.balances = this.balancesCompletos.filter(tercero => tercero.error != '')
				this.calcularPaginas(this.balances.length)
			} else {
				this.verErrores = true
				document.forms['balances'].elements['buscarbalances'].disabled= false
				document.getElementById('btnPedirbalances').disabled = false
				this.buscar()
			}
		},
	},
	data() {
		return {
			balances: [],
			balanceMostrar: [],
			balancesCompletos: [],
			inicial: true,
			cargando: false,
			paginasTotal: 0,
			paginaAcual:0,
			verErrores: true,
		}
	}
}
</script>
<style></style>