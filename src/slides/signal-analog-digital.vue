<script setup lang="ts">
import {
	inject,
	onMounted,
	onUnmounted,
	ref,
	watch,
} from "vue";
import type {
	Ref,
} from "vue";

import {
	KonvaChart,
	create_chart,
} from "../lib/LineChart";

import {
	register_resource,
	deregister_resource,
} from "../lib/ResourceManager";

// We know that this is defined in the root component,
// and we won't use this component alone. XXX
const dark_mode = inject<Ref<boolean>>("dark_mode")!;

const section_id = "signal-analog-digital";

const refChartAnalog:   Ref<HTMLDivElement | null> = ref(null);
const refChartDigitalI: Ref<HTMLDivElement | null> = ref(null);
const refChartDigitalR: Ref<HTMLDivElement | null> = ref(null);

let chartAnalog:   KonvaChart | null;
let chartDigitalI: KonvaChart | null;
let chartDigitalR: KonvaChart | null;

let inited = false;

function delete_charts() {
	if (chartAnalog)   chartAnalog.stage.destroy();
	if (chartDigitalI) chartDigitalI.stage.destroy();
	if (chartDigitalR) chartDigitalR.stage.destroy();

	chartAnalog   = null;
	chartDigitalI = null;
	chartDigitalR = null;

	inited = false;
}

function init_charts() {
	delete_charts();

	inited = true;

	chartAnalog   = create_chart(refChartAnalog.value!);
	chartDigitalI = create_chart(refChartDigitalI.value!);
	chartDigitalR = create_chart(refChartDigitalR.value!);

	chartAnalog.line([
		[0,0],
		[1,1],
	]);

	chartDigitalI.line([
		[0,0],
		[0.5,0],
		[0.5,1],
		[1,1],
	]);

	chartDigitalR.line([
		[0,0],
		[1/8, 1.5/5],
		[2/8, 1/5],
		[3/8, 1.5/5],
		[4/8, 5/5],
		[5/8, 4.8/5],
		[6/8, 3/5],
		[7/8, 4/5],
		[8/8, 4.5/5],
	]);
}

onMounted(() => {
	register_resource({
		id: section_id,
		constructor: init_charts,
		destructor: delete_charts,
	});
});

onUnmounted(() => {
	deregister_resource(section_id);
});

watch(dark_mode, async () => {
	if (!inited) return;

	init_charts();
});
</script>

<template>
	<section :id="section_id">
		<h3>Signal: Analog vs Digital</h3>
		<div class="bfocm-column-3">
			<div class="fragment">
				<div class="bfocm-chart" ref="refChartAnalog"></div>
			</div>
			<div class="fragment">
				<div class="bfocm-chart" ref="refChartDigitalR"></div>
			</div>
			<div class="fragment">
				<div class="bfocm-chart" ref="refChartDigitalI"></div>
			</div>
		</div>
		<p class="fragment">Noise resistance, data compression, error detection and correction, cost efficiency...</p>
	</section>
</template>

<style scoped>
.bfocm-column-3 {
	display: flex;
	justify-content: space-between;
}

.bfocm-column-3 > div {
	width: 33%;
}

.bfocm-chart {
	height: 300px;
	width: 100%;
}
</style>

