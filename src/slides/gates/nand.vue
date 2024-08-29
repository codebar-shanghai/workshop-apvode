<template>
	<section :id="section_id">
		<h3>The NAND Gate</h3>
		<div class="flex">
			<div class="w-1/2 flex justify-center">
				<img data-src="../../assets/images/CMOS_NAND.svg" />
			</div>
			<div class="flex flex-col items-center w-1/2 justify-evenly">
				<div class="w-full flex justify-center items-center bg-white">
					<img data-src="../../assets/images/NAND_ANSI_Labelled.svg" />
				</div>
				<table class="text-lg text-center" style="margin:initial">
					<thead>
						<tr>
							<th>Input A</th>
							<th>Input B</th>
							<th>Output Q</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>0</td><td>0</td><td>1</td>
						</tr>
						<tr>
							<td>0</td><td>1</td><td>1</td>
						</tr>
						<tr>
							<td>1</td><td>0</td><td>1</td>
						</tr>
						<tr>
							<td>1</td><td>1</td><td>0</td>
						</tr>
					</tbody>
				</table>
				<div ref="refDivSimulator" class="nand-gate-container"></div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import {
	onMounted,
	onUnmounted,
	ref,
} from "vue";
import type {
	Ref,
} from "vue";

import { Simulator } from "../../lib/LCSReader/index";
import LCJson from "../../assets/circuits/NAND.json";

import {
	register_resource,
	deregister_resource,
} from "../../lib/ResourceManager";

const section_id = ref("section-nand");
const refDivSimulator: Ref<HTMLDivElement | null> = ref(null);
let simulator: Simulator | null;

function load_simulator() {
	if (simulator == null) {
		simulator = new Simulator(refDivSimulator.value!, LCJson);
	}
}

function unload_simulator() {
	if (simulator) {
		simulator.destroy();
		simulator = null;
	}
}

onMounted(() => {
	register_resource({
		id: section_id.value,
		constructor: load_simulator,
		destructor: unload_simulator,
	});
});

onUnmounted(() => {
	deregister_resource(section_id.value);
});

</script>

<style scoped>
.container {
	display: flex;
	flex-direction: row;
}
.column-2 {
	width: 66%;
}

.nand-gate-container {
	width: 280px;
	height: 120px;
}
</style>

