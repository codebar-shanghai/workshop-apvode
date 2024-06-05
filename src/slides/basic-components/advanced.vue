<template>
	<section data-auto-animate>
		<h3>Counter</h3>
		<div class="flex justify-between">
			<img data-src="../../assets/images/BFoCM-component-4-bit-counter.svg" />
			<div>
				<highlightjs language="javascript" :autodetect="false" :code="CODE_COUNTER" />
			</div>
		</div>
	</section>
	<section data-auto-animate>
		<h3>Counter</h3>
		<table class="mono text-center text-lg">
			<tr>
				<td>Input0</td>
				<!-- 0 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1">0</td>
				<!-- 1 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<!-- 2 -->
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<!-- 3 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<!-- 4 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5">1</td>
			</tr>
			<tr>
				<td>Input1</td>
				<!-- 0 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1">0</td>
				<!-- 1 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<!-- 2 -->
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<!-- 3 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<!-- 4 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5">1</td>
			</tr>
			<tr>
				<td>Input2</td>
				<!-- 0 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1">0</td>
				<!-- 1 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<!-- 2 -->
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<!-- 3 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<!-- 4 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5">1</td>
			</tr>
			<tr>
				<td>Input3</td>
				<!-- 0 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1">0</td>
				<!-- 1 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">1</td>
				<!-- 2 -->
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<!-- 3 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">0</td>
				<!-- 4 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5">1</td>
			</tr>
			<tr class="bg-zinc-100 text-zinc-800">
				<td>Count</td>
				<!-- 0 -->
				<td class="fragment bg-zinc-100 text-fuchsia-800" data-fragment-index="1">0</td>
				<!-- 1 -->
				<td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="2">1</td>
				<td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="2">1</td>
				<td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="2">1</td>
				<td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="2">1</td>
				<!-- 2 -->
				<td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3">2</td>
				<td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3">2</td>
				<td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3">2</td>
				<td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3">2</td>
				<td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3">2</td>
				<td class="fragment bg-zinc-100 text-lime-800" data-fragment-index="3">2</td>
				<!-- 3 -->
				<td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="4">3</td>
				<td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="4">3</td>
				<td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="4">3</td>
				<td class="fragment bg-zinc-100 text-indigo-800" data-fragment-index="4">3</td>
				<!-- 4 -->
				<td class="fragment bg-zinc-100 text-fuchsia-800" data-fragment-index="5">4</td>
			</tr>
			<tr>
				<td>Output0</td>
				<!-- 0 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1">0</td>
				<!-- 1 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">1</td>
				<!-- 2 -->
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<!-- 3 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<!-- 4 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5">0</td>
			</tr>
			<tr>
				<td>Output1</td>
				<!-- 0 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1">0</td>
				<!-- 1 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<!-- 2 -->
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">1</td>
				<!-- 3 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">1</td>
				<!-- 4 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5">0</td>
			</tr>
			<tr>
				<td>Output2</td>
				<!-- 0 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="1">0</td>
				<!-- 1 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="2">0</td>
				<!-- 2 -->
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<td class="fragment bg-lime-100 text-lime-800" data-fragment-index="3">0</td>
				<!-- 3 -->
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">0</td>
				<td class="fragment bg-indigo-100 text-indigo-800" data-fragment-index="4">0</td>
				<!-- 4 -->
				<td class="fragment bg-fuchsia-200 text-fuchsia-800" data-fragment-index="5">1</td>
			</tr>
		</table>
		<a href="https://drendog.github.io/Logic-Circuit-Simulator/" target="_blank">Logic Circuit Simulator</a>
	</section>
	<CounterSimulatorLoader
		section_id="section-counter-output-2"
		subtitle="Output2"
		:LCJson="LCJsonOutput2"
		canvas_height="260"
		canvas_width="420"
	/>
	<CounterSimulatorLoader
		section_id="section-counter-output-0"
		subtitle="Output0"
		:LCJson="LCJsonOutput0"
		canvas_height="260"
		canvas_width="420"
	/>
	<CounterSimulatorLoader
		section_id="section-counter-output-1"
		subtitle="Output1"
		:LCJson="LCJsonOutput1"
		canvas_height="420"
		canvas_width="660"
	/>
	<section data-auto-animate>
		<h3>Counter</h3>
		<div class="flex justify-center">
			<a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank">
				<img data-src="../../assets/images/TC-counting.png" />
			</a>
		</div>
	</section>
	<section>
		<h3>Decoder</h3>
		<div class="flex justify-center">
			<a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank">
				<img data-src="../../assets/images/TC-decoder.png" />
			</a>
		</div>
	</section>
	<section>
		<h3>ALU (Arithmetic Logic Unit)</h3>
		<div class="flex justify-center">
			<a href="https://store.steampowered.com/app/1444480/Turing_Complete/" target="_blank">
				<img data-src="../../assets/images/TC-ALU.png" class="scale-75 m-0" />
			</a>
		</div>
	</section>
	<section>
		<h3>Hardware Design in Real World</h3>
		<div class="flex justify-between">
			<highlightjs language="verilog" :autodetect="false" :code="CODE_HA_VHDL" />
		</div>
		<ul class="text-3xl">
			<li>Use high-level languages like Verilog or VHDL to describe the behavior of the circuit.</li>
			<li>Use synthesis tools to generate a detailed, optimized map of the logic gates and their interconnections. (performance, area, power consumption, ...)</li>
		</ul>
	</section>
</template>

<style scoped>
.reveal h3 {
	margin-bottom: 10px;
}
.reveal img {
	margin-top: 0px;
	margin-bottom: 0px;
}
</style>

<script setup lang="ts">
import CODE_COUNTER from "../../assets/code/counter.js?raw";
import CODE_HA_VHDL from "../../assets/code/half_adder.v?raw";

import LCJsonOutput0 from "../../assets/circuits/counter-o0.json";
import LCJsonOutput1 from "../../assets/circuits/counter-o1.json";
import LCJsonOutput2 from "../../assets/circuits/counter-o2.json";

import CounterSimulatorLoader from "./counter-simulator-loader.vue";
</script>

