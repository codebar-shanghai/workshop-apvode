<template>
	<section>
		<section>
			<h3>Now, let's build a few components</h3>
		</section>
		<Addition />
		<HalfAdder />
		<FullAdder />
		<Mux />
		<Register />
		<Advanced />
	</section>
</template>

<script setup lang="ts">
import Addition from "./basic-components/addition.vue";
import HalfAdder from "./basic-components/half-adder.vue";
import FullAdder from "./basic-components/full-adder.vue";
import Mux from "./basic-components/mux.vue";
import Register from "./basic-components/register.vue";
import Advanced from "./basic-components/advanced.vue";
</script>

