<template>
	<div class="tab-pane" id="home" tabindex="0">		
		<div class="nav nav-underline justify-content-center" id="v-pills-tab" role="tablist">
			<button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" aria-controls="v-pills-home" title="Inicio"><i class="bi bi-house-gear-fill"></i></button>
			<button class="nav-link " id="v-pills-Terceros-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Terceros" type="button" aria-controls="v-pills-Terceros" title="Terceros"><i class="bi bi-person-circle"></i></button>
			<button class="nav-link " id="v-pills-Cuentas-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Cuentas" type="button" aria-controls="v-pills-Cuentas" title="Cuentas"><i class="bi bi-bar-chart-steps"></i></button>
			<button class="nav-link " id="v-pills-Balance-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Balance" type="button" aria-controls="v-pills-Balance" title="Balance de prueba"><i class="bi bi-file-bar-graph"></i></button>
			<button class="nav-link " id="v-pills-MovTerceros-tab" data-bs-toggle="pill" data-bs-target="#v-pills-MovTerceros" type="button" aria-controls="v-pills-MovTerceros" title="Mov Terceros"><i class="bi bi-file-earmark-person"></i></button>
			<div class="w-25"></div>
			<button class="nav-link " id="v-pills-Nacionales-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Nacionales" type="button" aria-controls="v-pills-Nacionales"><i class="bi bi-globe-americas"></i> Nacionales</button>
			<button class="nav-link " id="v-pills-Distritales-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Distritales" type="button" aria-controls="v-pills-Distritales"><i class="bi bi-buildings"></i> Distritales</button>
			<button class="nav-link " id="v-pills-Otros-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Otros" type="button" aria-controls="v-pills-Otros"><i class="bi bi-gear"></i> Otros</button>
		</div>
	</div>
</template>
<script>

export default {
	props: {
		propName: {
			type: Number,
			default: 0
		},
	},
};
</script>
<style></style>