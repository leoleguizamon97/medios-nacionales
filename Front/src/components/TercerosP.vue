<template>
	<div>
		<div class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<div>
					<a class="navbar-brand" href="#">Terceros</a>
				</div>
				<form name="terceros" class="d-flex" role="search" @submit.prevent="">
					<button class="btn btn-outline-secondary me-1" @click="pedirTerceros()">
						<i class="bi bi-cloud-download"></i>
					</button>
					<input class="form-control" type="search" placeholder="Buscar" name="buscarTerceros" @input="buscar()">
				</form>
			</div>
		</div>
		<FichaTercerosN />
	</div>
</template>
<script>
import FichaTercerosN from '@/components/Elementos/FichaTercerosN.vue';
import datos from "@/dataManagment";
export default {
	components: {
		FichaTercerosN
	},
	methods: {
		async pedirTerceros(){
			let temp = await datos.pedirTerceros()
			console.log(temp);
		},
		buscar(){
			console.log('Awantaaaa');
		}
	},
	data() {
		return {
			terceros: [],
			tercerosCompletos: []
		}
	}
}
</script>
<style></style>