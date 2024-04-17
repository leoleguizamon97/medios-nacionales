<template>
	<div class="h-100 d-flex flex-column overflow-hidden">
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Cuentas</a>
				</div>
				<form name="cuentas" class="d-flex" role="search" @submit.prevent="">
					<button class="btn btn-outline-secondary me-1" title="Descargar Cuentas" @click="pedirCuentas()">
						<i class="bi bi-cloud-download"></i>
					</button>
					<input class="form-control" type="search" placeholder="Buscar" name="buscarCuentas" @input="buscar">
				</form>
			</div>
		</div>
		<div class="card mt-1 flex-fill d-flex flex-column overflow-hidden">
			<table>
				<thead class="border-bottom border-secondary">
					<tr class="text-center">
						<th class="col-2" scope="col">Numero de cuenta</th>
						<th class="col-9" scope="col">Nombre de cuenta</th>
						<th class="col-1 pe-4" scope="col">Editar</th>
					</tr>
				</thead>
			</table>
			<h4 v-if="inicial" class="text-center align-content-center flex-fill">Descargue primero las cuentas</h4>
			<div v-else-if="cargando" class="text-center align-content-center flex-fill"><div class="spinner-border" role="status" ></div></div>
			<h4 v-else-if="cuentas.length == 0" class="text-center align-content-center h-100">Sin resultados</h4>
			<div v-else class="flex-fill overflow-auto" >
				<table class="table table-sm table-striped">
					<tbody>
						<tr v-for="cuenta in cuentas" :key="cuenta.cuenta">
							<th class="col-2 align-middle" scope="row">{{ cuenta.cuenta }}</th>
							<td class="col9 align-middle">
								<input class="form-control" type="text" :value="cuenta.nombre" :id="cuenta.cuenta + 'cu'">
							</td>
							<td class="col-1 align-middle text-center">
								<button class="btn btn-outline-primary" title="Corregir"
									@click="editar(cuenta.cuenta)">
									<i class="bi bi-pencil-square"></i>
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
		async pedirCuentas() {
			this.cargando = true
			this.inicial = false
			this.cuentas = []
			this.cuentasCompletas = []
			let temp = await datos.pedirCuentas()
			this.cuentas = temp.data.cuentas
			this.cuentasCompletas = temp.data.cuentas
			this.cargando = false
		},
		buscar() {
			let valor = document.forms['cuentas'].elements['buscarCuentas'].value
			if (/^[0-9]+$/.test(valor)) {
				this.cuentas = this.cuentasCompletas.filter(cuenta => cuenta.cuenta.startsWith(valor))
			} else {
				this.cuentas = this.cuentasCompletas.filter(cuenta => cuenta.nombre.toLowerCase().includes(valor.toLowerCase()))
			}
		},
		async editar(id) {
			let linea = id + ' ' + document.getElementById(id + 'cu').value.toUpperCase()
			console.log(id, linea)
			let resultado = await datos.corregirErrores(id + 'c', linea)
			if (!resultado.estado) alert('No se pudo editar la cuenta. ERROR:' + resultado.estado)
		}
	},
	data() {
		return {
			cuentas: [],
			cuentasCompletas: [],
			inicial: true,
			cargando: false,
		}
	}
};
</script>
<style></style>