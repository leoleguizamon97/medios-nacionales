<template>
	<CabeceraN />
	<div class=" h-100 d-flex flex-column overflow-auto" style="margin-bottom:25px;">
		<div id="Contenido" class="flex-grow-1 d-flex">
			<div class="d-flex align-items-center ">
				<MenuP />
			</div>
			<div class="flex-grow-1 border rounded-2 p-1 my-1">
				<ContenidoP />
			</div>
		</div>
	</div>
	<PieN />
</template>
<script>
import MenuP from '@/components/MenuP.vue'
import CabeceraN from '@/components/CabeceraN.vue'
import ContenidoP from '@/components/ContenidoP.vue'
import PieN from '@/components/PieN.vue'
export default {
	name: 'App',
	components: {
		MenuP,
		CabeceraN,
		ContenidoP,
		PieN
	},
}
</script>
<style></style>