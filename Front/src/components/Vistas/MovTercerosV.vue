<template>
	<div class="h-100 d-flex flex-column overflow-hidden">
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Movimientos de tercero</a>
				</div>
				<div class="d-flex justify-content-center align-items-center mx-1">
					<button class="btn" @click="sumarPagina(false)"><i class="bi bi-dash"></i></button>
					<input type="number" @change="actualizarPagina()" class="form-control" style="width: 70px;" value="0" id="movContador" :title="'Numero de paginas: '+ (paginasTotal+1)">
					<button class="btn" @click="sumarPagina(true)"><i class="bi bi-plus"></i></button>
				</div>
				<div class="d-flex align-content-center">
					<button type="button" class="btn btn-outline-secondary me-1	" data-bs-toggle="button" @click="soloErroneos()"><i class="bi bi-bug"></i></button>
					<button class="btn btn-outline-secondary me-1" title="Descargar movTerceros" @click="pedirmovTerceros()" id="btnPedirmovTerceros">
						<i class="bi bi-cloud-download"></i>
					</button>
					<form name="movTerceros" class="d-flex" role="search" @submit.prevent="">
						<input class="form-control" type="number" placeholder="Buscar" name="buscarmovTerceros" @input="buscar()">
					</form>
				</div>
			</div>
		</div>
		<div class="card mt-1 flex-fill d-flex flex-column overflow-hidden">
			<h4 v-if="inicial" class="text-center align-content-center flex-fill">Descargue primero los movTerceros</h4>
			<div v-else-if="cargando" class="text-center align-content-center flex-fill">
				<div class="spinner-border" role="status"></div>
			</div>
			<h4 v-else-if="movTerceros.length == 0" class="text-center align-content-center flex-fill">Sin resultados</h4>
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
						<tr v-for="bal in movTerceroMostrar" :key="bal.idmovTercero">
							<th class="align-middle text-nowrap" scope="row">
								<input type="text" class="form-control-plaintext text-center" id="idValance" :value="bal.idBalance" style="width: 70px;">
							</th>
							<td class="align-middle text-center text-nowrap">
								<div v-if="bal.error==''" id="estado" class="text-success rounded text-center vertical"><i class="bi bi-check2-square"></i></div>
								<div v-else id="estado" class="text-warning-emphasis rounded text-center" :title="bal.error"><i class="bi bi-exclamation-triangle"></i></div>
							</td>
							<th class="align-middle text-nowrap" scope="row">
								<input type="text" class="text-end m-0 form-control flex-fill" style="width: min-content;" id="idCuenta" :value="bal.idCuenta">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="text" class="text-end m-0 form-control flex-fill" style="width: min-content;" id="idTercero" :value="bal.idTercero">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end m-0 form-control flex-fill" style="width: min-content;" id="saldoInicial" :value="parseFloat( bal.saldoInicial)">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end m-0 form-control flex-fill" style="width: min-content;" id="debito" :value="parseFloat( bal.debito)">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end m-0 form-control flex-fill" style="width: min-content;" id="credito" :value="parseFloat( bal.credito)">
							</th>
							<th class="align-middle text-nowrap" scope="row">
								<input type="number" class="text-end m-0 form-control flex-fill" style="width: min-content;" id="neto" :value="parseFloat( bal.neto)">
							</th>
							<td class="align-middle text-center text-nowrap">
								<button class="btn btn-outline-primary me-1 " title="Corregir" @click="editar(bal.movTercero)">
									<i class="bi bi-pencil-square"></i>
								</button>
								<button class="btn btn-outline-danger " title="Eliminar" @click="eliminar(bal.movTercero)">
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
		async pedirmovTerceros() {
			this.cargando = true
			this.inicial = false
			this.movTerceros = []
			this.movTercerosCompletos = []
			let temp = await datos.pedirMov()
			this.movTercerosCompletos = temp.data.mov
			this.movTerceros = this.movTercerosCompletos
			this.movTerceroMostrar = this.movTerceros.slice(0,50)
			this.paginaAcual = 0
			this.calcularPaginas(this.movTerceros.length)
			this.cargando = false
		},
		calcularPaginas(){
			this.paginasTotal = parseInt(this.movTerceros.length/50)
			this.paginaAcual = 0
			document.getElementById('movContador').value = 1
			this.mostrarPaginas()
		},
		mostrarPaginas(){
			let inicio = this.paginaAcual * 50
			this.movTerceroMostrar = this.movTerceros.slice(inicio,inicio+50)
		},
		buscar() {
			let valor = document.forms['movTerceros'].elements['buscarmovTerceros'].value
			
			if(valor == ''){
				this.movTerceros = this.movTercerosCompletos
				this.calcularPaginas()
				return
			}
			if (/^[0-9]+$/.test(valor)) {
				this.movTerceros = this.movTercerosCompletos.filter( movTercero => movTercero.idCuenta.startsWith(valor) || movTercero.idTercero.startsWith(valor))
			}
			this.calcularPaginas()
		},
		editar() {
			console.log('AwantaaaaEd');
		},
		eliminar() {
			console.log('AwantaaaaDel');
		},
		actualizarPagina(){
			this.paginaAcual = document.getElementById('movContador').value -1
			this.mostrarPaginas()
		},
		sumarPagina(arg){
			if (arg){
				if(this.paginaAcual < this.paginasTotal) this.paginaAcual++;
			}else{
				if(this.paginaAcual >= 1) this.paginaAcual--;
			}
			document.getElementById('movContador').value = this.paginaAcual +1
			this.mostrarPaginas()
		},
		soloErroneos() {
			if (this.verErrores){
				this.verErrores = false
				document.forms['movTerceros'].elements['buscarmovTerceros'].disabled= true
				document.getElementById('btnPedirmovTerceros').disabled = true
				this.movTerceros = this.movTercerosCompletos.filter(tercero => tercero.error != '')
				this.calcularPaginas(this.movTerceros.length)
			} else {
				this.verErrores = true
				document.forms['movTerceros'].elements['buscarmovTerceros'].disabled= false
				document.getElementById('btnPedirmovTerceros').disabled = false
				this.buscar()
			}
		},
	},
	data() {
		return {
			movTerceros: [],
			movTerceroMostrar: [],
			movTercerosCompletos: [],
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