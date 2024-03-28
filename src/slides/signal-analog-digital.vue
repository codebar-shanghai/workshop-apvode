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
import { echarts } from "../plugins/echarts";

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

let chartAnalog:   echarts.ECharts | null;
let chartDigitalI: echarts.ECharts | null;
let chartDigitalR: echarts.ECharts | null;

let inited = false;

function delete_charts() {
	if (chartAnalog)   chartAnalog.dispose();
	if (chartDigitalI) chartDigitalI.dispose();
	if (chartDigitalR) chartDigitalR.dispose();

	chartAnalog   = null;
	chartDigitalI = null;
	chartDigitalR = null;

	inited = false;
}

function init_charts() {
	delete_charts();

	inited = true;

	chartAnalog = echarts.init(refChartAnalog.value!, dark_mode.value ? 'dark' : '');
	chartAnalog.setOption({
		title: {
			text: 'Analog (ideal)'
		},
		xAxis: {
			name: 't',
		},
		yAxis: {
			name: 'V',
		},
		series: [
			{
				type: 'line',
				data: [
					[0,0],
					[1,5],
				],
			},
		],
	});

	chartDigitalI = echarts.init(refChartDigitalI.value!, dark_mode.value ? 'dark' : '');
	chartDigitalI.setOption({
		title: {
			text: 'Digital (ideal)'
		},
		xAxis: {
			name: 't',
		},
		yAxis: {
			name: 'V',
		},
		series: [
			{
				type: 'line',
				data: [
					[0,0],
					[1,0],
					[1,5],
					[2,5],
				],
			},
		],
	});

	chartDigitalR = echarts.init(refChartDigitalR.value!, dark_mode.value ? 'dark' : '');
	chartDigitalR.setOption({
		title: {
			text: 'Real'
		},
		xAxis: {
			name: 't',
		},
		yAxis: {
			name: 'V',
		},
		series: [
			{
				type: 'line',
				data: [
					[0,0],
					[0.25, 1.5],
					[0.5, 1],
					[0.75, 1.5],
					[1, 5],
					[1.25, 4.8],
					[1.5, 3],
					[1.75, 4],
					[2, 4.5],
				],
			},
		],
	});
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

