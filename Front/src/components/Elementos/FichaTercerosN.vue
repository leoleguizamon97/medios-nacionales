<template>
	<div class="bg-danger card p-1">
		<div class="d-flex">
			<div id="tipoTercero" class="card bg-black w-25 me-1">
				<label for="idTercero" class="form-label">ID/NIT</label>
				<div class="d-flex">
					<input id="idTercero" class="form-control me-1" type="text" :value="ter.idTercero">
					<input class="form-control" type="text" :value="ter.dv" style="width: 40px;">
					
				</div>
			</div>
			<div id="infoTercero" class="card bg-black w-75">

			</div>
		</div>
	</div>
</template>
<script>
/*
	idTercero:
	dv:
	tipoDocumento:
	tipoPersona:
	nombre1:
	nombre2:
	apellido1:
	apellido2:
	idMunicipio:
	direccion:
	correo:
	celular:
	esEmpresa:
	nombreCompleto:
	telefono:
	fax:
	nombreCiudad:
	apartado:
	actEconomica:
	codArea:
*/
export default {
	data() {
		return {
		}
	},
	props: {
		ter: {
			type: {},
			default: ''
		},
	},
};
</script>
<style></style>