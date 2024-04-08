<template>
	<div class="tab-content flex-fill overflow-hidden" id="v-pills-tabContent">
		<div class="h-100 tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0"><Inicio /></div>
		<div class="h-100 tab-pane fade" id="v-pills-Terceros" role="tabpanel" aria-labelledby="v-pills-home-Terceros" tabindex="1"><Terceros /></div>
		<div class="h-100 tab-pane fade" id="v-pills-Cuentas" role="tabpanel" aria-labelledby="v-pills-home-Cuentas" tabindex="2"><Cuentas /></div>
		<div class="h-100 tab-pane fade" id="v-pills-Balance" role="tabpanel" aria-labelledby="v-pills-home-Balance" tabindex="3"><Balance /></div>
		<div class="h-100 tab-pane fade" id="v-pills-MovTerceros" role="tabpanel" aria-labelledby="v-pills-home-MovTerceros" tabindex="3"><MovTerceros /></div>
		<div class="h-100 tab-pane fade" id="v-pills-Nacionales" role="tabpanel" aria-labelledby="v-pills-Nacionales-tab" tabindex="4"><NacionalesP/></div>
		<div class="h-100 tab-pane fade" id="v-pills-Distritales" role="tabpanel" aria-labelledby="v-pills-Distritales-tab" tabindex="5"><DistritalesP/></div>
		<div class="h-100 tab-pane fade" id="v-pills-Otros" role="tabpanel" aria-labelledby="v-pills-Otros-tab" tabindex="6">OTROS</div>
	</div>
</template>

<script>
import Inicio from './InicioP.vue';
import Terceros from './TercerosP.vue'
import Cuentas from './CuentasP.vue'
import Balance from './BalanceP.vue'
import MovTerceros from './MovTercerosP.vue'
import NacionalesP from './NacionalesP.vue';
import DistritalesP from '@/components/DistritalesP.vue';

export default {
	components: {
		Inicio,
		Terceros,
		Cuentas,
		Balance,
		MovTerceros,
		NacionalesP,
		DistritalesP
	}
}
</script>

<style></style>