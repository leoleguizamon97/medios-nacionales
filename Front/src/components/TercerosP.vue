<template>
	<div class="">
		<form id="formulario" @submit.prevent="principal">
			<div class="card m-2 ">
				<div class="card-header">
					<div class="d-flex align-items-center justify-content-between">
						<label style="margin: 0px 15px;" for="año">Creacion de medios {{ msg }}</label>
						<input ref="año" type="number" name="año" id="año" class="form-control"
							style="margin: 5px 0px; width: 10%; min-width: 100px;" placeholder="Año" defaultValue="2022"
							inputmode="numeric" required>
					</div>
				</div>
				<div class="card-body">
					<h5 class="card-title text-center">Instrucciones</h5>
					<p class="card-text">Cargue los documentos en formato txt o csv. Tanto terceros como balance de prueba</p>
					<div class="w-100">
						<label for="terceros-path" class="form-label">Terceros:</label>
						<input class="form-control" type="file" id="terceros-path" ref="terceros" placeholder="terceros.txt"
							required @change="guardarPathTerceros">
						<label for="balance-path" class="form-label">Balance de prueba:</label>
						<input class="form-control" type="file" id="balance-path" ref="balance" placeholder="balance.txt"
							required @change="guardarPathBalance">
					</div>
					<div class="w-100 m-1" style="text-align: center;">Articulos</div>
					<div class="btn-group m-1 nav" role="group" aria-label="articulos">
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base2" name="btnradio" id="btnradio1" @click="setArticulo(2)">
						<label class="btn btn-outline-secondary" for="btnradio1">Art 2</label>
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base3" name="btnradio" id="btnradio2" @click="setArticulo(3)" disabled>
						<label class="btn btn-outline-secondary" for="btnradio2">Art 3</label>
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base4" name="btnradio" id="btnradio3" @click="setArticulo(4)">
						<label class="btn btn-outline-secondary" for="btnradio3">Art 4</label>
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base6" name="btnradio" id="btnradio4" @click="setArticulo(6)">
						<label class="btn btn-outline-secondary" for="btnradio4">Art 6</label>
					</div>
					<div id="Bases" class="tab-content">
						<div class="tab-pane fade" id="base2" aria-labelledby="btnradio1" tabindex="1">
							<bases2 msg="otros" />
						</div>
						<div class="tab-pane fade" id="base4" aria-labelledby="btnradio2" tabindex="2">
							<bases4 msg="236801" />
						</div>
						<div class="tab-pane fade" id="base6" aria-labelledby="btnradio3" tabindex="3">
							<bases6 msg="135518" />
						</div>
					</div>
					<div class="d-flex my-2">
						<button type="submit" class="btn btn-primary w-50" title="Ejecutar">
							Ejecutar
							<i class="bi bi-check2-circle m-1"></i>
						</button>
						<button type="button" class="btn btn-warning w-25 mx-2" title="descargar" @click="vigente()">
							<i class="bi bi-download m-1"></i>
						</button>
						<button type="reset" class="btn btn-danger w-25" title="Limpiar" @click="this.error = false">
							<i class="bi bi-stars m-1"></i>
						</button>
					</div>
					<p class="text-danger-emphasis bg-danger-subtle border border-danger-subtle" v-show="error"
						style="text-align: center;">Hubo un error cargando el archivo. ¿Seguro que lo seleccionaste?</p>
				</div>
			</div>
		</form>
		<form id="formulario" @submit.prevent="principal">
			<div class="card m-2 ">
				<div class="card-header">
					<div class="d-flex align-items-center justify-content-between">
						<label style="margin: 0px 15px;" for="año">Creacion de medios {{ msg }}</label>
						<input ref="año" type="number" name="año" id="año" class="form-control"
							style="margin: 5px 0px; width: 10%; min-width: 100px;" placeholder="Año" defaultValue="2022"
							inputmode="numeric" required>
					</div>
				</div>
				<div class="card-body">
					<h5 class="card-title text-center">Instrucciones</h5>
					<p class="card-text">Cargue los documentos en formato txt o csv. Tanto terceros como balance de prueba</p>
					<div class="w-100">
						<label for="terceros-path" class="form-label">Terceros:</label>
						<input class="form-control" type="file" id="terceros-path" ref="terceros" placeholder="terceros.txt"
							required @change="guardarPathTerceros">
						<label for="balance-path" class="form-label">Balance de prueba:</label>
						<input class="form-control" type="file" id="balance-path" ref="balance" placeholder="balance.txt"
							required @change="guardarPathBalance">
					</div>
					<div class="w-100 m-1" style="text-align: center;">Articulos</div>
					<div class="btn-group m-1 nav" role="group" aria-label="articulos">
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base2" name="btnradio" id="btnradio1" @click="setArticulo(2)">
						<label class="btn btn-outline-secondary" for="btnradio1">Art 2</label>
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base3" name="btnradio" id="btnradio2" @click="setArticulo(3)" disabled>
						<label class="btn btn-outline-secondary" for="btnradio2">Art 3</label>
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base4" name="btnradio" id="btnradio3" @click="setArticulo(4)">
						<label class="btn btn-outline-secondary" for="btnradio3">Art 4</label>
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base6" name="btnradio" id="btnradio4" @click="setArticulo(6)">
						<label class="btn btn-outline-secondary" for="btnradio4">Art 6</label>
					</div>
					<div id="Bases" class="tab-content">
						<div class="tab-pane fade" id="base2" aria-labelledby="btnradio1" tabindex="1">
							<bases2 msg="otros" />
						</div>
						<div class="tab-pane fade" id="base4" aria-labelledby="btnradio2" tabindex="2">
							<bases4 msg="236801" />
						</div>
						<div class="tab-pane fade" id="base6" aria-labelledby="btnradio3" tabindex="3">
							<bases6 msg="135518" />
						</div>
					</div>
					<div class="d-flex my-2">
						<button type="submit" class="btn btn-primary w-50" title="Ejecutar">
							Ejecutar
							<i class="bi bi-check2-circle m-1"></i>
						</button>
						<button type="button" class="btn btn-warning w-25 mx-2" title="descargar" @click="vigente()">
							<i class="bi bi-download m-1"></i>
						</button>
						<button type="reset" class="btn btn-danger w-25" title="Limpiar" @click="this.error = false">
							<i class="bi bi-stars m-1"></i>
						</button>
					</div>
					<p class="text-danger-emphasis bg-danger-subtle border border-danger-subtle" v-show="error"
						style="text-align: center;">Hubo un error cargando el archivo. ¿Seguro que lo seleccionaste?</p>
				</div>
			</div>
		</form>
		<form id="formulario" @submit.prevent="principal">
			<div class="card m-2 ">
				<div class="card-header">
					<div class="d-flex align-items-center justify-content-between">
						<label style="margin: 0px 15px;" for="año">Creacion de medios {{ msg }}</label>
						<input ref="año" type="number" name="año" id="año" class="form-control"
							style="margin: 5px 0px; width: 10%; min-width: 100px;" placeholder="Año" defaultValue="2022"
							inputmode="numeric" required>
					</div>
				</div>
				<div class="card-body">
					<h5 class="card-title text-center">Instrucciones</h5>
					<p class="card-text">Cargue los documentos en formato txt o csv. Tanto terceros como balance de prueba</p>
					<div class="w-100">
						<label for="terceros-path" class="form-label">Terceros:</label>
						<input class="form-control" type="file" id="terceros-path" ref="terceros" placeholder="terceros.txt"
							required @change="guardarPathTerceros">
						<label for="balance-path" class="form-label">Balance de prueba:</label>
						<input class="form-control" type="file" id="balance-path" ref="balance" placeholder="balance.txt"
							required @change="guardarPathBalance">
					</div>
					<div class="w-100 m-1" style="text-align: center;">Articulos</div>
					<div class="btn-group m-1 nav" role="group" aria-label="articulos">
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base2" name="btnradio" id="btnradio1" @click="setArticulo(2)">
						<label class="btn btn-outline-secondary" for="btnradio1">Art 2</label>
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base3" name="btnradio" id="btnradio2" @click="setArticulo(3)" disabled>
						<label class="btn btn-outline-secondary" for="btnradio2">Art 3</label>
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base4" name="btnradio" id="btnradio3" @click="setArticulo(4)">
						<label class="btn btn-outline-secondary" for="btnradio3">Art 4</label>
						<input required type="radio" class="nav-link btn-check form-check-input" data-bs-toggle="tab"
							data-bs-target="#base6" name="btnradio" id="btnradio4" @click="setArticulo(6)">
						<label class="btn btn-outline-secondary" for="btnradio4">Art 6</label>
					</div>
					<div id="Bases" class="tab-content">
						<div class="tab-pane fade" id="base2" aria-labelledby="btnradio1" tabindex="1">
							<bases2 msg="otros" />
						</div>
						<div class="tab-pane fade" id="base4" aria-labelledby="btnradio2" tabindex="2">
							<bases4 msg="236801" />
						</div>
						<div class="tab-pane fade" id="base6" aria-labelledby="btnradio3" tabindex="3">
							<bases6 msg="135518" />
						</div>
					</div>
					<div class="d-flex my-2">
						<button type="submit" class="btn btn-primary w-50" title="Ejecutar">
							Ejecutar
							<i class="bi bi-check2-circle m-1"></i>
						</button>
						<button type="button" class="btn btn-warning w-25 mx-2" title="descargar" @click="vigente()">
							<i class="bi bi-download m-1"></i>
						</button>
						<button type="reset" class="btn btn-danger w-25" title="Limpiar" @click="this.error = false">
							<i class="bi bi-stars m-1"></i>
						</button>
					</div>
					<p class="text-danger-emphasis bg-danger-subtle border border-danger-subtle" v-show="error"
						style="text-align: center;">Hubo un error cargando el archivo. ¿Seguro que lo seleccionaste?</p>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {

}
</script>

<style></style>