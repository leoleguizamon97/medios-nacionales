<template>
	<div class="card h-100">
		<div class="d-flex h-100 p-1">
			<div class="h-100 overflow-y-auto overflow-x-hidden me-1">
				<div class="nav nav-underline flex-column" id="mDist-tab" aria-orientation="vertical">
					<button class="nav-link p-1 mx-1 active" id="mDist-art1-tab" data-bs-toggle="pill" data-bs-target="#mDist-art1" type="button" aria-controls="mDist-art1" aria-selected="false">Art1</button>
					<button class="nav-link p-1 mx-1" id="mDist-art2-tab" data-bs-toggle="pill" data-bs-target="#mDist-art2" type="button" aria-controls="mDist-art2" aria-selected="false">Art2</button>
					<button class="nav-link p-1 mx-1" id="mDist-art3-tab" data-bs-toggle="pill" data-bs-target="#mDist-art3" type="button" aria-controls="mDist-art3" aria-selected="false">Art3</button>
					<button class="nav-link p-1 mx-1" id="mDist-art4-tab" data-bs-toggle="pill" data-bs-target="#mDist-art4" type="button" aria-controls="mDist-art4" aria-selected="false">Art4</button>
					<button class="nav-link p-1 mx-1" id="mDist-art5-tab" data-bs-toggle="pill" data-bs-target="#mDist-art5" type="button" aria-controls="mDist-art5" aria-selected="false">Art5</button>
				</div>
			</div>
			<div class="card h-100 tab-content flex-fill" id="mDist-tabContent">
				<div class="tab-pane fade show active" id="mDist-art1" role="tabpanel" aria-labelledby="mDist-art1-tab" tabindex="1">Art1</div>
				<div class="tab-pane fade" id="mDist-art2" role="tabpanel" aria-labelledby="mDist-art2-tab" tabindex="2">Art2</div>
				<div class="tab-pane fade" id="mDist-art3" role="tabpanel" aria-labelledby="mDist-art3-tab" tabindex="3">Art3</div>
				<div class="tab-pane fade" id="mDist-art4" role="tabpanel" aria-labelledby="mDist-art4-tab" tabindex="4">Art4</div>
				<div class="tab-pane fade" id="mDist-art5" role="tabpanel" aria-labelledby="mDist-art5-tab" tabindex="5">Art5</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {

}
</script>

<style></style>