<script setup lang="ts">
import NandGate from "./gates/nand.vue";
import Gate from "./gates/gate.vue";

import NOTGATE from "../assets/circuits/NOT.json";
import ANDGATE from "../assets/circuits/AND.json";
import ORGATE  from "../assets/circuits/OR.json";
import NORGATE from "../assets/circuits/NOR.json";
import XORGATE from "../assets/circuits/XOR.json";

import TruthTable from "./gates/truth-table.vue";

import ProblemStack2 from "../components/problem-stack-2.vue";
</script>

<template>
	<section>
		<section>
			<h3>Boolean Algebra</h3>
			<ul>
				<li>AND: <code>1 AND 0 = 0</code></li>
				<li>OR: <code>1 OR 0 = 1</code></li>
				<li>...</li>
			</ul>
		</section>
		<NandGate />
		<Gate
			section_id="section-not-gate"
			:LCJson="NOTGATE"
			canvas_height="160"
			canvas_width="340"
		>
			<template #header>NOT</template>
			<template #symbol>
				<img class="bg-white scale-150" data-src="../lib/LCSReader/images/NOT.svg" />
			</template>
			<template #tftable>
				<table class="text-lg text-center">
					<thead>
						<tr>
							<th>Input</th>
							<th>Output</th>
						</tr>
					</thead>
					<tbody>
						<tr class="fragment" data-fragment-index="1">
							<td>0</td>
							<td>1</td>
						</tr>
						<tr class="fragment" data-fragment-index="2">
							<td>1</td>
							<td>0</td>
						</tr>
					</tbody>
				</table>
			</template>
		</Gate>
		<Gate
			section_id="section-and-gate"
			:LCJson="ANDGATE"
			canvas_height="140"
			canvas_width="420"
		>
			<template #header>AND</template>
			<template #symbol>
				<img class="bg-white scale-150" data-src="../lib/LCSReader/images/AND.svg" />
			</template>
			<template #tftable>
				<TruthTable method="and" />
			</template>
		</Gate>
		<Gate
			section_id="section-or-gate"
			:LCJson="ORGATE"
			canvas_height="140"
			canvas_width="380"
		>
			<template #header>OR</template>
			<template #symbol>
				<img class="bg-white scale-150" data-src="../lib/LCSReader/images/OR.svg" />
			</template>
			<template #tftable>
				<TruthTable method="or" />
			</template>
		</Gate>
		<Gate
			section_id="section-nor-gate"
			:LCJson="NORGATE"
			canvas_height="140"
			canvas_width="380"
		>
			<template #header>NOR</template>
			<template #symbol>
				<img class="bg-white scale-150" data-src="../lib/LCSReader/images/NOR.svg" />
			</template>
			<template #tftable>
				<TruthTable method="nor" />
			</template>
		</Gate>
		<Gate
			section_id="section-xor-gate"
			:LCJson="XORGATE"
			canvas_height="220"
			canvas_width="480"
		>
			<template #header>XOR</template>
			<template #symbol>
				<img class="bg-white scale-150" data-src="../lib/LCSReader/images/XOR.svg" />
			</template>
			<template #tftable>
				<TruthTable method="xor" />
			</template>
		</Gate>
		<section>
			<h3>Summary of Logic Gates</h3>
			<div class="flex">
				<ProblemStack2 class="text-lg" />
				<a href="https://exclusivearchitecture.com/03-technical-articles-IC-02-03-logic-level.html" target="_blank">
					<img data-src="../assets/images/Overview_All_Gates_Updated_01.png">
				</a>
			</div>
		</section>
		<section>
			<h3>Universal Gates: NOR & NAND</h3>
			<div class="flex items-center">
				<div>
					<a href="https://en.wikipedia.org/wiki/Apollo_Guidance_Computer" target="_blank">
						<img data-src="../assets/images/Aldrin_Apollo_11.jpg">
					</a>
				</div>
				<div>
					<ul style="font-size: 32px">
						<li>It's possible to implement a computer with NOR or NAND gates only. Read more about <a href="https://en.wikipedia.org/wiki/NOR_logic" target="_blank">NOR logic</a> and <a href="https://en.wikipedia.org/wiki/NAND_logic" target="_blank">NAND logic</a> on Wikipedia.</li>
						<li>The Apollo Guidance Computers (1966-1975) were implemented with NOR gate only.</li>
					</ul>
				</div>
			</div>
		</section>
	</section>
</template>

<style scoped>
</style>

