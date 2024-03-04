<template>
	<div>
		<CabeceraN />
		<div id="Contenido" class="">
			<MenuP />
			<div class="m-1 p-1">
				<ContenidoP />
			</div>
		</div>
		<PieN />
	</div>
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