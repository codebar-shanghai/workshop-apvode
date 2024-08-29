<template>
	<section>
		<h3>We can also build circuits to store data</h3>
	</section>
	<section>
		<div class="flex justify-center">
			<img data-src="../../assets/images/BFoCM-2-inverters-back-to-back.svg" />
		</div>
		<table class="fragment" data-fragment-index="1">
			<tr>
				<td>A</td>
				<td>B</td>
				<td>C</td>
			</tr>
			<tr class="fragment" data-fragment-index="2">
				<td>0</td>
				<td>1</td>
				<td>0</td>
			</tr>
			<tr class="fragment" data-fragment-index="3">
				<td>1</td>
				<td>0</td>
				<td>1</td>
			</tr>
		</table>
	</section>
	<section>
		<h3 class="fragment">D Latch</h3>
		<div class="flex justify-center">
			<img data-src="../../assets/images/BFoCM-D-Latch.svg" />
		</div>
		<div class="fragment text-2xl">
			When the signal of E (enable) is active, the Q output will match the D (data) input, otherwise Q remains at its last state.
		</div>
	</section>
	<section>
		<h3 class="fragment">S-R Latch</h3>
		<div class="flex justify-center">
			<img data-src="../../assets/images/BFoCM-S-R-Latch.svg" />
		</div>
		<ul class="fragment text-2xl">
			<li>S (Set): The Set input is used to set the output Q to 1. When a high signal (1) is applied to the S input, the latch sets the Q output to 1, regardless of the previous state of the latch.</li>
			<li>R (Reset): The Reset input is used to reset the output Q to 0. When a high signal (1) is applied to the R input, the latch resets the Q output to 0.</li>
			<li>If both S and R are high at the same time, it creates an undefined or unstable state.</li>
		</ul>
	</section>
	<section>
		<h3 class="fragment" data-fragment-index="1">4-bit Register</h3>
		<div class="flex justify-center">
			<img data-src="../../assets/images/BFoCM-4-bit-register.svg" class="scale-150 fragment custom" data-fragment-index="1"/>
		</div>
	</section>
</template>

<style scoped>
.fragment.scale-150.visible {
	transform: initial;
}
</style>

