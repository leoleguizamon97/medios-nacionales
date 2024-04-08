<template>
	<CabeceraN />
	<div class="card flex-fill m-1 p-1 overflow-hidden">
		<div class="d-flex justify-content-center align-items-center h-100" v-if="estado == 0">
			<div class="spinner-border text-primary spinner-border-sm" style="height:  250px; width: 250px;">
			</div>
		</div>
		<div id="Contenido" class="d-flex flex-column h-100" v-else>
			<MenuP/>
			<ContenidoP />
		</div>
	</div>
	<PieN />

</template>

<script>
import CabeceraN from '@/components/Elementos/CabeceraN.vue'
import PieN from '@/components/Elementos/PieN.vue'
import MenuP from '@/components/Elementos/MenuN.vue'
import ContenidoP from '@/components/ContenidoP.vue'
export default {
	components: {
		CabeceraN,
		PieN,
		MenuP,
		ContenidoP,
	},
	methods: {
	},
	data() {
		return {
			estado: 1
		}
	},
}
</script>

<style lang="scss" scoped></style>