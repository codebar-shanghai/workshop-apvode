<template>
	<section data-auto-animate :id="section_id">
		<h3>Counter</h3>
		<h4>{{subtitle}}</h4>
		<div class="w-full flex justify-center">
			<div ref="refDivSimulator" :style="simulatorStyleObject"></div>
		</div>
	</section>
</template>

<script setup lang="ts">
import {
	onMounted,
	onUnmounted,
	reactive,
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

const props = defineProps({
	section_id: String,
	subtitle: String,
	LCJson: Object,
	canvas_width: {
		type: [Number, String],
		default: 500,
	},
	canvas_height: {
		type: [Number, String],
		default: 500,
	}
});

const simulatorStyleObject = reactive({
	width: `${props.canvas_width}px`,
	height: `${props.canvas_height}px`,
});

const refDivSimulator: Ref<HTMLDivElement | null> = ref(null);
let simulator: Simulator | null;

function load_simulator() {
	if (simulator == null) {
		simulator = new Simulator(refDivSimulator.value!, props.LCJson as LCConfig);
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
		id: props.section_id!,
		constructor: load_simulator,
		destructor: unload_simulator,
	});
});

onUnmounted(() => {
	deregister_resource(props.section_id!);
});
</script>

