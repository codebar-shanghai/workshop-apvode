<script setup lang="ts">
import NandGate from "./gates/nand.vue";
import Gate from "./gates/gate.vue";

import NOTGATE from "../assets/circuits/NOT.json";
import ANDGATE from "../assets/circuits/AND.json";
import ORGATE  from "../assets/circuits/OR.json";
import NORGATE from "../assets/circuits/NOR.json";
import XORGATE from "../assets/circuits/XOR.json";

import TruthTable from "./gates/truth-table.vue";

import ProblemStack2 from "./problem-stack-2.vue";
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
		>
			<template #header>NOT</template>
			<template #tftable>
			</template>
		</Gate>
		<Gate
			section_id="section-and-gate"
			:LCJson="ANDGATE"
		>
			<template #header>AND</template>
			<template #tftable>
				<TruthTable method="and" />
			</template>
		</Gate>
		<Gate
			section_id="section-or-gate"
			:LCJson="ORGATE"
		>
			<template #header>OR</template>
			<template #tftable>
				<TruthTable method="or" />
			</template>
		</Gate>
		<Gate
			section_id="section-nor-gate"
			:LCJson="NORGATE"
		>
			<template #header>NOR</template>
			<template #tftable>
				<TruthTable method="nor" />
			</template>
		</Gate>
		<Gate
			section_id="section-xor-gate"
			:LCJson="XORGATE"
		>
			<template #header>XOR</template>
			<template #tftable>
				<TruthTable method="xor" />
			</template>
		</Gate>
		<section>
			<h3>Summary of Logic Gates</h3>
			<div class="column-2">
				<ProblemStack2 />
				<a href="https://exclusivearchitecture.com/03-technical-articles-IC-02-03-logic-level.html" target="_blank">
					<img src="../assets/images/Overview_All_Gates_Updated_01.png">
				</a>
			</div>
		</section>
		<section>
			<h3>Universal Gates: NOR & NAND</h3>
			<div class="column-2">
				<div>
					<a href="https://en.wikipedia.org/wiki/Apollo_Guidance_Computer" target="_blank">
						<img src="../assets/images/Aldrin_Apollo_11.jpg">
					</a>
				</div>
				<div>
					<ul>
						<li>It's possible to implement a computer with NOR or NAND gates only. Read more about <a href="https://en.wikipedia.org/wiki/NOR_logic" target="_blank">NOR logic</a> and <a href="https://en.wikipedia.org/wiki/NAND_logic" target="_blank">NAND logic</a> on Wikipedia.</li>
						<li>The Apollo Guidance Computers (1966-1975) were implemented with NOR gate only.</li>
					</ul>
				</div>
			</div>
		</section>
	</section>
</template>

<style scoped>
.column-2 {
	display: flex;
}
</style>

