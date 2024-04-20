<template>
	<div class="card p-1 bg-body-tertiary">
		<div class="d-flex">
			<div id="tipoTercero" class="w-25 border-end border-2 border-secondary pe-1" style="min-width: 250px;">
				<div class="d-flex">
					<div v-if="ter.error==''" id="estado" class="text-success rounded text-center vertical"><i class="bi bi-check2-square"></i></div>
					<div v-else id="estado" class="text-warning-emphasis rounded text-center" :title="ter.error"><i class="bi bi-exclamation-triangle"></i></div>
					<input id="idTercero" class="form-control-plaintext flex-fill text-center" placeholder="" type="text" :value="ter.id" title="ID Tercero" disabled>
					<input id="dvTercero" class="form-control-plaintext text-center" placeholder="-" type="text" :value="ter.dv" title="Digito Verificacion" style="width: 30px;" disabled>
				</div>
				<div class="d-flex">
					<select id="tipoDocumento" class="form-select form-select-sm flex-fill me-1" title="Tipo de documento">
						<option class="" selected>{{ ter.tipoDocumento }}</option>
						<option v-for="(key, doc) in tiposDocumentos" :key="key" :value="key">
							{{ doc + " " + key }}
						</option>
					</select>
					<select id="tipoPersona" class="form-select form-select-sm" style="width: 95px;" v-model="tipoPer" title="Tipo de persona">
						<option value="NATURAL">Natural</option>
						<option value="JURIDICA">Juridica</option>
					</select>
				</div>
				<div class="d-flex mt-1">
					<input id="actEconomica" type="text" placeholder="CodActEc" class="text-center flex-fill form-control" :value="ter.actEconomica" style="width: 80px" title="Actividad economica (Codigo)">
					<input id="idMunicipio" type="text" placeholder="CodDpto" class="text-center flex-fill form-control mx-1" :value="ter.idMunicipio" style="width: 72px" title="Codigo de departamento+Ciudad">
					<input id="idPais" type="text" placeholder="CodPais" class="text-center flex-fill form-control" :value="ter.idPais" style="width: 72px" title="Codigo de Departamento + Municipio">
				</div>
			</div>
			<div id="infoTercero" class="ms-1 flex-fill w-75">
				<div class="d-flex">
					<input type="text" class="w-100 text-center form-control" placeholder="Razon social" :value="ter.nombreCompleto"  title="Razon Social">
				</div>
				<div class="d-flex my-1">
					<input type="text" class="flex-fill text-center form-control me-1" id="nombre1" placeholder="Nombre 1" :value="ter.nombre1">
					<input type="text" class="flex-fill text-center form-control me-1" id="nombre2" placeholder="Nombre 2" :value="ter.nombre2">
					<input type="text" class="flex-fill text-center form-control me-1" id="apellido1" placeholder="Apellido 1" :value="ter.apellido1">
					<input type="text" class="flex-fill text-center form-control" id="apellido2" placeholder="Apellido 2" :value="ter.apellido2">
				</div>
				<div class="d-flex">
					<input type="text" class="flex-fill text-center form-control me-1" id="direccion" placeholder="Direccion" :value="ter.direccion">
					<input type="text" class="flex-fill text-center form-control me-1" id="correo" placeholder="Correo" :value="ter.correo">
					<input type="text" class="flex-fill text-center form-control me-1" id="telefono" placeholder="Telefono" :value="ter.telefono">
					<input type="text" class="flex-fill text-center form-control" id="celular" placeholder="Celular" :value="ter.celular">
				</div>
			</div>
		</div>
	</div>
</template>
<script>

import configuracion from '../../Configuracion.json'
export default {
	data() {
		return {
			tiposDocumentos: configuracion.TiposDocumentos,
			tipoPer : this.ter.tipoPersona
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