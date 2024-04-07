<template>
	<div class="tab-content mb-4" id="v-pills-tabContent">
		<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
			<Inicio /></div>
		<div class="tab-pane fade" id="v-pills-Terceros" role="tabpanel" aria-labelledby="v-pills-home-Terceros" tabindex="1">
			<Terceros /></div>
		<div class="tab-pane fade" id="v-pills-Cuentas" role="tabpanel" aria-labelledby="v-pills-home-Cuentas" tabindex="2">
			<Cuentas /></div>
		<div class="tab-pane fade" id="v-pills-Balance" role="tabpanel" aria-labelledby="v-pills-home-Balance" tabindex="3">
			<Balance /></div>
		<div class="tab-pane fadew" id="v-pills-MovTerceros" role="tabpanel" aria-labelledby="v-pills-home-MovTerceros" tabindex="3">
			<MovTerceros /></div>
		<div class="tab-pane fade" id="v-pills-1001" role="tabpanel" aria-labelledby="v-pills-1001-tab" tabindex="4">
			1001</div>
		<div class="tab-pane fade" id="v-pills-1002" role="tabpanel" aria-labelledby="v-pills-1002-tab" tabindex="5">
			1002</div>
		<div class="tab-pane fade" id="v-pills-1003" role="tabpanel" aria-labelledby="v-pills-1003-tab" tabindex="6">
			1003</div>
		<div class="tab-pane fade" id="v-pills-1004" role="tabpanel" aria-labelledby="v-pills-1004-tab" tabindex="7">
			1004</div>
		<div class="tab-pane fade" id="v-pills-1005" role="tabpanel" aria-labelledby="v-pills-1005-tab" tabindex="8">
			1005</div>
		<div class="tab-pane fade" id="v-pills-1006" role="tabpanel" aria-labelledby="v-pills-1006-tab" tabindex="9">
			1006</div>
		<div class="tab-pane fade" id="v-pills-1007" role="tabpanel" aria-labelledby="v-pills-1007-tab" tabindex="10">
			1007</div>
		<div class="tab-pane fade" id="v-pills-1008" role="tabpanel" aria-labelledby="v-pills-1008-tab" tabindex="11">
			1008</div>
		<div class="tab-pane fade" id="v-pills-1009" role="tabpanel" aria-labelledby="v-pills-1009-tab" tabindex="12">
			1009</div>
		<div class="tab-pane fade" id="v-pills-1010" role="tabpanel" aria-labelledby="v-pills-1010-tab" tabindex="13">
			1010</div>
		<div class="tab-pane fade" id="v-pills-1011" role="tabpanel" aria-labelledby="v-pills-1011-tab" tabindex="14">
			1011</div>
		<div class="tab-pane fade" id="v-pills-1012" role="tabpanel" aria-labelledby="v-pills-1012-tab" tabindex="15">
			1012</div>
	</div>
</template>

<script>
import Inicio from '@/components/InicioP.vue';
import Terceros from '@/components/TercerosP.vue'
import Cuentas from '@/components/CuentasP.vue'
import Balance from '@/components/BalanceP.vue'
import MovTerceros from '@/components/MovTercerosP.vue'

export default {
	components: {
		Inicio: Inicio,
		Terceros: Terceros,
		Cuentas: Cuentas,
		Balance: Balance,
		MovTerceros: MovTerceros
	}
}
</script>

<style></style>