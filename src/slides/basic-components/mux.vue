<template>
	<section data-auto-animate>
		<h3>Mux (Multiplexer)</h3>
		<img src="../../assets/images/BFoCM-mux.svg">
	</section>
	<section data-auto-animate :id="section_id">
		<h3>2-bit Mux</h3>
		<div ref="refDivSimulator"></div>
	</section>
	<section data-auto-animate>
		<h3>4-bit Mux</h3>
		<img src="../../assets/images/BFoCM-4-bit-mux.svg">
	</section>
</template>

<script setup lang="ts">
import {
	onMounted,
	onUnmounted,
	ref,
	Ref,
} from "vue";

import {
	register_resource,
	deregister_resource,
} from "../../lib/ResourceManager";

import type {
	LCConfig,
} from "../../lib/LCSReader/FileManager";
import { Simulator } from "../../lib/LCSReader/index";

import LCJson from "../../assets/circuits/mux.json";

const section_id = "section-mux";
const refDivSimulator: Ref<HTMLDivElement | null> = ref(null);
let simulator: Simulator | null;

function load_simulator() {
	if (simulator == null) {
		simulator = new Simulator(refDivSimulator.value!, LCJson as LCConfig);
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
		id: section_id,
		constructor: load_simulator,
		destructor: unload_simulator,
	});
});

onUnmounted(() => {
	deregister_resource(section_id);
});
</script>

