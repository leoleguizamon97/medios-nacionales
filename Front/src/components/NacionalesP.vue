<template>
	<div class="card h-100">
		<div class="d-flex h-100 p-1 align-content-center">
			<div class="h-100 overflow-y-auto overflow-x-hidden me-1" style="min-width: 60px;">
				<div class="nav nav-underline flex-column gap-1" id="medNal-tab" aria-orientation="vertical">
					<button class="nav-link p-1 mx-1 active" id="medNal-1001-tab" data-bs-toggle="pill" data-bs-target="#medNal-1001" type="button" aria-controls="medNal-1001" aria-selected="false">1001</button>
					<button class="nav-link p-1 mx-1" id="medNal-1003-tab" data-bs-toggle="pill" data-bs-target="#medNal-1003" type="button" aria-controls="medNal-1003" aria-selected="false">1003</button>
					<button class="nav-link p-1 mx-1" id="medNal-1004-tab" data-bs-toggle="pill" data-bs-target="#medNal-1004" type="button" aria-controls="medNal-1004" aria-selected="false">1004</button>
					<button class="nav-link p-1 mx-1" id="medNal-1005-tab" data-bs-toggle="pill" data-bs-target="#medNal-1005" type="button" aria-controls="medNal-1005" aria-selected="false">1005</button>
					<button class="nav-link p-1 mx-1" id="medNal-1006-tab" data-bs-toggle="pill" data-bs-target="#medNal-1006" type="button" aria-controls="medNal-1006" aria-selected="false">1006</button>
					<button class="nav-link p-1 mx-1" id="medNal-1007-tab" data-bs-toggle="pill" data-bs-target="#medNal-1007" type="button" aria-controls="medNal-1007" aria-selected="false">1007</button>
					<button class="nav-link p-1 mx-1" id="medNal-1008-tab" data-bs-toggle="pill" data-bs-target="#medNal-1008" type="button" aria-controls="medNal-1008" aria-selected="false">1008</button>
					<button class="nav-link p-1 mx-1" id="medNal-1009-tab" data-bs-toggle="pill" data-bs-target="#medNal-1009" type="button" aria-controls="medNal-1009" aria-selected="false">1009</button>
					<button class="nav-link p-1 mx-1" id="medNal-1010-tab" data-bs-toggle="pill" data-bs-target="#medNal-1010" type="button" aria-controls="medNal-1010" aria-selected="false">1010</button>
					<button class="nav-link p-1 mx-1" id="medNal-1011-tab" data-bs-toggle="pill" data-bs-target="#medNal-1011" type="button" aria-controls="medNal-1011" aria-selected="false">1011</button>
					<button class="nav-link p-1 mx-1" id="medNal-1012-tab" data-bs-toggle="pill" data-bs-target="#medNal-1012" type="button" aria-controls="medNal-1012" aria-selected="false">1012</button>
				</div>
			</div>
			<div class="card h-100 tab-content flex-fill" id="medNal-tabContent">
				<div class="h-100 tab-pane fade show active" id="medNal-1001" role="tabpanel" aria-labelledby="medNal-1001-tab" tabindex="1"><articuloNacional :articuloConfig="n1001" key='n1001'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1003" role="tabpanel" aria-labelledby="medNal-1003-tab" tabindex="3"><articuloNacional :articuloConfig="n1003" key='n1003'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1004" role="tabpanel" aria-labelledby="medNal-1004-tab" tabindex="4"><articuloNacional :articuloConfig="n1004" key='n1004'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1005" role="tabpanel" aria-labelledby="medNal-1005-tab" tabindex="5"><articuloNacional :articuloConfig="n1005" key='n1005'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1006" role="tabpanel" aria-labelledby="medNal-1006-tab" tabindex="6"><articuloNacional :articuloConfig="n1006" key='n1006'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1007" role="tabpanel" aria-labelledby="medNal-1007-tab" tabindex="7"><articuloNacional :articuloConfig="n1007" key='n1007'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1008" role="tabpanel" aria-labelledby="medNal-1008-tab" tabindex="8"><articuloNacional :articuloConfig="n1008" key='n1008'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1009" role="tabpanel" aria-labelledby="medNal-1009-tab" tabindex="9"><articuloNacional :articuloConfig="n1009" key='n1009'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1010" role="tabpanel" aria-labelledby="medNal-1010-tab" tabindex="10"><articuloNacional :articuloConfig="n1010" key='n1010'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1011" role="tabpanel" aria-labelledby="medNal-1011-tab" tabindex="11"><articuloNacional :articuloConfig="n1011" key='n1011'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1012" role="tabpanel" aria-labelledby="medNal-1012-tab" tabindex="12"><articuloNacional :articuloConfig="n1012" key='n1012'/></div>
				<div class="h-100 tab-pane fade" id="medNal-1012" role="tabpanel" aria-labelledby="medNal-1012-tab" tabindex="12"><articuloNacional :articuloConfig="n2276" key='n2276'/></div>
			</div>
		</div>
	</div>
</template>

<script>
import articuloNacional from './Articulos/ArticuloNacional.vue';
import datosArticulos from '../Configuracion.json'

export default {
	components: {
		articuloNacional,
	},
	data() {
		return {
			n1001: datosArticulos.Nacionales.n1001,
			n1003: datosArticulos.Nacionales.n1003,
			n1004: datosArticulos.Nacionales.n1004,
			n1005: datosArticulos.Nacionales.n1005,
			n1006: datosArticulos.Nacionales.n1006,
			n1007: datosArticulos.Nacionales.n1007,
			n1008: datosArticulos.Nacionales.n1008,
			n1009: datosArticulos.Nacionales.n1009,
			n1010: datosArticulos.Nacionales.n1010,
			n1011: datosArticulos.Nacionales.n1011,
			n1012: datosArticulos.Nacionales.n1012,
			n2276: datosArticulos.Nacionales.n2276,
		}
	},
}
</script>

<style></style>