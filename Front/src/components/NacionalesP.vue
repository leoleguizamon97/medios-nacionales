<template>
	<div class="card h-100">
		<div class="d-flex h-100 p-1 align-content-center">
			<div class="h-100 overflow-y-auto overflow-x-hidden me-1">
				<div class="nav nav-underline flex-column gap-1" id="medNal-tab" aria-orientation="vertical">
					<button class="nav-link p-1 mx-1 active" id="medNal-1001-tab" data-bs-toggle="pill" data-bs-target="#medNal-1001" type="button" aria-controls="medNal-1001" aria-selected="false">1001</button>
					<button class="nav-link p-1 mx-1" id="medNal-1002-tab" data-bs-toggle="pill" data-bs-target="#medNal-1002" type="button" aria-controls="medNal-1002" aria-selected="false">1002</button>
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
				<div class="tab-pane fade show active" id="medNal-1001" role="tabpanel" aria-labelledby="medNal-1001-tab" tabindex="1"><n1001/></div>
				<div class="tab-pane fade" id="medNal-1003" role="tabpanel" aria-labelledby="medNal-1003-tab" tabindex="3"><n1003/></div>
				<div class="tab-pane fade" id="medNal-1004" role="tabpanel" aria-labelledby="medNal-1004-tab" tabindex="4"><n1004/></div>
				<div class="tab-pane fade" id="medNal-1005" role="tabpanel" aria-labelledby="medNal-1005-tab" tabindex="5"><n1005/></div>
				<div class="tab-pane fade" id="medNal-1006" role="tabpanel" aria-labelledby="medNal-1006-tab" tabindex="6"><n1006/></div>
				<div class="tab-pane fade" id="medNal-1007" role="tabpanel" aria-labelledby="medNal-1007-tab" tabindex="7"><n1007/></div>
				<div class="tab-pane fade" id="medNal-1008" role="tabpanel" aria-labelledby="medNal-1008-tab" tabindex="8"><n1008/></div>
				<div class="tab-pane fade" id="medNal-1009" role="tabpanel" aria-labelledby="medNal-1009-tab" tabindex="9"><n1009/></div>
				<div class="tab-pane fade" id="medNal-1010" role="tabpanel" aria-labelledby="medNal-1010-tab" tabindex="10"><n1010/></div>
				<div class="tab-pane fade" id="medNal-1011" role="tabpanel" aria-labelledby="medNal-1011-tab" tabindex="11"><n1011/></div>
				<div class="tab-pane fade" id="medNal-1012" role="tabpanel" aria-labelledby="medNal-1012-tab" tabindex="12"><n1012/></div>
				<div class="tab-pane fade" id="medNal-1012" role="tabpanel" aria-labelledby="medNal-1012-tab" tabindex="12"><n2276/></div>
			</div>
		</div>
	</div>
</template>

<script>
import n1001 from './Articulos/n-1001.vue';
import n1003 from './Articulos/n-1003.vue';
import n1004 from './Articulos/n-1004.vue';
import n1005 from './Articulos/n-1005.vue';
import n1006 from './Articulos/n-1006.vue';
import n1007 from './Articulos/n-1007.vue';
import n1008 from './Articulos/n-1008.vue';
import n1009 from './Articulos/n-1009.vue';
import n1010 from './Articulos/n-1010.vue';
import n1011 from './Articulos/n-1011.vue';
import n1012 from './Articulos/n-1012.vue';
import n2276 from './Articulos/n-2276.vue';

export default {
	components: {
		n1001,
		n1003,
		n1004,
		n1005,
		n1006,
		n1007,
		n1008,
		n1009,
		n1010,
		n1011,
		n1012,
		n2276,
	},
}
</script>

<style></style>