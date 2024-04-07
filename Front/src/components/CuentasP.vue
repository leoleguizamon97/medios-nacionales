<template>
	<div>
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Cuentas</a>
				</div>
				<form name="cuentas" class="d-flex" role="search" @submit.prevent="">
					<button class="btn btn-outline-secondary me-1" @click="pedirCuentas()">
						<i class="bi bi-cloud-download"></i>
					</button>
					<input class="form-control" type="search" placeholder="Buscar" name="buscarCuentas" @input="buscar">
				</form>
			</div>
		</div>
		<div class="card my-1">
			<div class="alert text-center" role="alert" v-if="cuentas.length == 0">
				<div class="spinner-border my-3" role="status"></div>
			</div>
			<table class="table table-sm table-striped" v-else>
				<thead>
					<tr class="text-center">
						<th class="col-2" scope="col">Numero de cuenta</th>
						<th class="col-9" scope="col">Nombre de cuenta</th>
						<th class="col-1" scope="col">Editar</th>
					</tr>
				</thead>
				<tbody class="table-group-divider">
					<tr v-for="cuenta in cuentas" :key="cuenta.cuenta">
						<th scope="row" class="">{{ cuenta.cuenta }}</th>
						<td>
							<input class="form-control" type="text" :value="cuenta.nombre" :id="cuenta.cuenta + 'cu'">
						</td>
						<td class="text-center">
							<button class="btn btn-outline-primary me-1 w-50" title="Corregir"
								@click="editar(cuenta.cuenta)">
								<i class="bi bi-pencil-square"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import datos from "@/dataManagment";
export default {
	methods: {
		async pedirCuentas() {
			let temp = await datos.pedirCuentas()
			this.cuentas = temp.data.cuentas
			this.cuentasCompletas = temp.data.cuentas
		},
		buscar() {
			let valor = document.forms['cuentas'].elements['buscarCuentas'].value
			if (/^[0-9]+$/.test(valor)) {
				this.cuentas = this.cuentasCompletas.filter(cuenta => cuenta.cuenta.startsWith(valor))
			} else {
				this.cuentas = this.cuentasCompletas.filter(cuenta => cuenta.nombre.toLowerCase().includes(valor.toLowerCase()))
			}
		},
		async editar(id){
			let linea = id + ' ' + document.getElementById(id+'cu').value.toUpperCase()
			console.log(id,linea)
			let resultado = await datos.corregirErrores(id+'c',linea)
			if(!resultado.estado) alert('No se pudo editar la cuenta. ERROR:'+resultado.estado)
		}
	},
	data() {
		return {
			cuentas: [],
			cuentasCompletas: [],
		}
	}
};
</script>
<style></style>