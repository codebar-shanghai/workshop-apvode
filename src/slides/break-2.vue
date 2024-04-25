<template>
	<section>
		<h3>Break</h3>
		<div class="column-2">
			<div>
				<ProblemStack5 />
			</div>
			<div>
				<ul>
					<li>ISA</li>
					<li>UNIX and C</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import ProblemStack5 from "../components/problem-stack-5.vue";
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

<style scoped>
.column-2 {
	display: flex;
}

.column-2 > div {
	width: 50%;
}

.column-2 table {
	font-size: 28px;
}
</style>

