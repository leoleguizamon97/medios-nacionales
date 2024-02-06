<template>
	<CabeceraN />
	<div class=" h-100 d-flex flex-column overflow-auto" style="margin-bottom:25px;">
		<div id="Contenido" class="flex-grow-1 d-flex">
			<div class="d-flex align-items-center ">
				<MenuP />
			</div>
			<div class="tab-content flex-grow-1 border rounded-2 p-1 my-1" id="v-pills-tabContent">
				<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"
					tabindex="0">
					Este es el contenido
				</div>
				<div class="tab-pane fade" id="v-pills-1001" role="tabpanel" aria-labelledby="v-pills-1001-tab"
					tabindex="0">
					1001</div>
				<div class="tab-pane fade" id="v-pills-1002" role="tabpanel" aria-labelledby="v-pills-1002-tab"
					tabindex="0">
					1002</div>
				<div class="tab-pane fade" id="v-pills-1003" role="tabpanel" aria-labelledby="v-pills-1003-tab"
					tabindex="0">
					1003</div>
				<div class="tab-pane fade" id="v-pills-1004" role="tabpanel" aria-labelledby="v-pills-1004-tab"
					tabindex="0">
					1004</div>
				<div class="tab-pane fade" id="v-pills-1005" role="tabpanel" aria-labelledby="v-pills-1005-tab"
					tabindex="0">
					1005</div>
				<div class="tab-pane fade" id="v-pills-1006" role="tabpanel" aria-labelledby="v-pills-1006-tab"
					tabindex="0">
					1006</div>
				<div class="tab-pane fade" id="v-pills-1007" role="tabpanel" aria-labelledby="v-pills-1007-tab"
					tabindex="0">
					1007</div>
				<div class="tab-pane fade" id="v-pills-1008" role="tabpanel" aria-labelledby="v-pills-1008-tab"
					tabindex="0">
					1008</div>
				<div class="tab-pane fade" id="v-pills-1009" role="tabpanel" aria-labelledby="v-pills-1009-tab"
					tabindex="0">
					1009</div>
				<div class="tab-pane fade" id="v-pills-1010" role="tabpanel" aria-labelledby="v-pills-1010-tab"
					tabindex="0">
					1010</div>
				<div class="tab-pane fade" id="v-pills-1011" role="tabpanel" aria-labelledby="v-pills-1011-tab"
					tabindex="0">
					1011</div>
				<div class="tab-pane fade" id="v-pills-1012" role="tabpanel" aria-labelledby="v-pills-1012-tab"
					tabindex="0">
					1012</div>

			</div>
		</div>
	</div>
	<div id="footer" class="nav justify-content-center bg-body-tertiary fixed-bottom">
		<a class="nav-tabContent navbar-brand" href="https://github.com/leoleguizamon97" target="_blank">
			<img class="rounded" alt="ALLG" src="./assets/rosa.webp" width="15" height="15">
			anlleguizamongu
		</a>
	</div>
</template>
<script>
import MenuP from '@/components/MenuP.vue'
import CabeceraN from '@/components/CabeceraN.vue'
export default {
	name: 'App',
	components: {
		MenuP,
		CabeceraN,
	},
}
</script>
<style></style>