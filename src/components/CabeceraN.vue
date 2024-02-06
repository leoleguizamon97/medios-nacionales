<template>
	<nav id="cabecera" class="navbar sticky-top bg-body-tertiary p-1">
		<div class="container-fluid p-0">
			<a class="navbar-brand p-0">
				<img src="@/assets/rosa.webp" alt="A" width="35" height="35" class="rounded-5 p-0">
				Powered by: Abakus Accounting
			</a>
			<div type="btn" class="btn border-0" v-on:click=cambiartema(this.luz)>
				<i v-if=luz class="bi bi-sun"></i>
				<i v-else class="bi bi-moon"></i>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	methods: {
		cambiartema(arg) {
			this.luz = !arg
			if (this.luz) {
				console.log('luz');
				document.documentElement.setAttribute('data-bs-theme', 'ligth')
			} else {
				console.log('oscuro');
				document.documentElement.setAttribute('data-bs-theme', 'dark')
			}
		}
	},
	data() {
		return {
			luz: false
		}
	}
}
</script>
<style></style>