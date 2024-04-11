<template>
	<section :id="section_id">
		<h3>
			<slot name="header"></slot>
		</h3>
		<div class="w-full flex justify-center">
			<div ref="refDivSimulator" :style="simulatorStyleObject"></div>
		</div>
		<div>
			<slot name="tftable"></slot>
		</div>
	</section>
</template>

<script setup lang="ts">
import {
	onMounted,
	onUnmounted,
	reactive,
	ref,
} from "vue";

import type {
	Ref,
} from "vue";

import type {
	LCConfig,
} from "../../lib/LCSReader/FileManager";
import { Simulator } from "../../lib/LCSReader/index";

import {
	register_resource,
	deregister_resource,
} from "../../lib/ResourceManager";

const refDivSimulator: Ref<HTMLDivElement | null> = ref(null);
let simulator: Simulator | null;

const props = defineProps({
	section_id: String,
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

