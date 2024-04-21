<template>
	<div class="h-100 d-flex flex-column overflow-hidden">
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Nacionales: {{ articuloConfig.Titulo }}</a>
				</div>
				<form :name="'n' + articuloConfig.Titulo" class="d-flex" role="search" @submit.prevent="">
					<button class="btn btn-outline-secondary me-1" :title="'Imprimir ' + articuloConfig.Titulo"
						@click="imprimir()">
						<i class="bi bi-file-earmark-arrow-down"></i>
					</button>
					<button class="btn btn-outline-secondary me-1" :title="'Sincronizar ' + articuloConfig.Titulo"
						@click="pedirArticulo()">
						<i class="bi bi-arrow-repeat"></i>
					</button>
					<input class="form-control" type="search" :placeholder="'Buscar en ' + articuloConfig.Titulo"
						:name="'buscarn' + articuloConfig.Titulo" @input="buscar()">
				</form>
			</div>
		</div>
		<div class="card mt-1 flex-fill d-flex flex-column table-responsive">
			<div class="text-center align-content-center flex-fill" v-if="articuloCompletos.length == 0 && inicial">
				<h4 v-if="inicial">Sincronice primero el articulo {{ articuloConfig.Titulo }}</h4>
				<div v-else class="spinner-border" role="status"></div>
			</div>
			<h4 class="text-center align-content-center h-100" v-else-if="articulo.length == 0">Sin resultados</h4>
			<div class="flex-fill overflow-auto" v-else>
				<table class="table table-striped-columns">
					<thead class="sticky-top">
						<tr class="text-center gap-3">
							<th class="px-2 text-center text-nowrap" scope="col">ID</th>
							<th class="px-2 text-center text-nowrap" scope="col"
								v-for="title in articuloConfig.Encabezados" :key="title">
								{{ title }}
							</th>
							<th class="text-center text-nowrap" scope="col">Editar</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="linea in articulo" :key="linea.i">
							<th class="align-middle" scope="row">
								{{ linea.i }}
							</th>
							<td class="text-nowrap align-middle text-center">VFOR PENDIENTE ACA {{ linea.aaa }} </td>
							<td class="align-middle text-center">
								<div class="d-flex">
									<button class="btn btn-outline-primary me-1 " title="Corregir" @click="editar()">
										<i class="bi bi-pencil-square"></i>
									</button>
									<button class="btn btn-outline-danger " title="Eliminar" @click="eliminar()">
										<i class="bi bi-x-circle"></i>
									</button>
								</div>
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
		async pedirArticulo() {
			this.articulo = []
			this.articuloCompletos = []
			this.inicial = false
			let temp = await datos.pedirArticulo(this.articuloConfig)
			this.articuloCompletos = temp.data.informe
			this.articulo = this.articuloCompletos
		},
		buscar() {
			console.log('Awantaaaa');
		},
		eliminar() {
			console.log('AwantaaaaDel');
		},
		imprimir() {
			console.log('AwantaaaaPrint');
		}
	},
	data() {
		return {
			articulo: [],
			articuloCompletos: [],
			inicial: true,
		}
	},
	props: {
		articuloConfig: {
			"Titulo": "",
			"Encabezados": [],
			"Cuentas": []
		}
	},
}
</script>
<style></style>