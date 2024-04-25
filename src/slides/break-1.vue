<template>
	<section>
		<h3>Break</h3>
		<ul>
			<li>Signals, logic gates</li>
			<li>von Neumann architecture</li>
			<li class="fragment">Computers in early days</li>
			<li class="fragment">Operating system</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import {
	onMounted,
} from "vue";
import {
	component_loaded,
} from "../lib/ResourceManager.ts";

onMounted(() => {
	component_loaded();
});
</script>

