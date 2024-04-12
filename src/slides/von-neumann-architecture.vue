<template>
	<section>
		<section data-auto-animate data-auto-animate-id="one">
			<h3>Main Memory</h3>
			<h4>(Random Access Memory)</h4>
			<ul class="text-3xl">
				<li class="fragment">Registers are inside processors, built with logic gates just like ALUs and other components.</li>
				<li class="fragment">Registers are super fast, but can only be used to store a small number of data elements.</li>
				<li class="fragment">Main memory is an array of bits, organized in <span class="mono italic">W</span> words of <span class="mono italic">N</span> bits each.</li>
				<li class="fragment">Typically <span class="mono italic">W</span> is power of 2 (<span class="mono">W = 2<sup>k</sup></span>), e.g. W = 8 (k = 3 address bits), N = 32 bits per word.</li>
				<li class="fragment">Can read from and write to individual words.</li>
				<li class="fragment">Many possible implementations.</li>
			</ul>
		</section>
		<section data-auto-animate data-auto-animate-id="one">
			<h3>Main Memory</h3>
			<h4>(Random Access Memory)</h4>
			<table class="text-3xl">
				<tr>
					<th class="text-center">Addr.</th>
					<th class="text-center">Value</th>
				</tr>
				<tr>
					<td class="mono">000</td>
					<td class="mono">11001001&nbsp;01010001&nbsp;10001111&nbsp;01110011</td>
				</tr>
				<tr>
					<td class="mono">001</td>
					<td class="mono">01011000&nbsp;01110001&nbsp;10101101&nbsp;11010001</td>
				</tr>
				<tr>
					<td class="mono">010</td>
					<td class="mono text-center">...</td>
				</tr>
				<tr>
					<td class="mono">...</td>
					<td class="mono text-center">...</td>
				</tr>
				<tr>
					<td class="mono">111</td>
					<td class="mono">10000100&nbsp;01001111&nbsp;11100100&nbsp;00001000</td>
				</tr>
			</table>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h3>Registers vs Memory</h3>
			<ul class="text-3xl">
				<li class="fragment">Typically variables live in memory.</li>
				<li class="fragment">Registers hold temporary values or values that we need to use repeatedly.</li>
				<li class="fragment">ALU operations work on registers only.</li>
				<li class="fragment">To operate with memory variables:
					<ul>
						<li>Load them into a register.</li>
						<li>Compute on them.</li>
						<li>Store the results back to memory.</li>
					</ul>
				</li>
			</ul>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h3>Registers vs Memory</h3>
			<div class="flex justify-center items-center">
				<div class="w-1/2">
					<ul>
						<li class="mono">0x1000: n</li>
						<li class="mono">0x1004: r</li>
						<li class="mono">0x1008: x</li>
						<li class="mono">0x100C: y</li>
					</ul>
				</div>
				<div class="w-1/2">
					<div class="fragment">
						<highlightjs language="c" :autodetect="false" :code="CODE_1" />
					</div>
					<div class="fragment">
						<highlightjs language="plaintext" :autodetect="false" :code="CODE_2" />
					</div>
				</div>
			</div>
		</section>
		<section data-auto-animate data-auto-animate-id="three">
			<h3>von Neumann Computer</h3>
			<div class="flex items-center">
				<div>
					<ul class="text-3xl">
						<li class="fragment">Also called stored-program computer</li>
						<li class="fragment">Express program as a sequence of <span class="strong">coded instructions</span></li>
						<li class="fragment">Memory holds both data and instructions</li>
						<li class="fragment">CPU fetches, interprets, and executes successive instructions of the program</li>
					</ul>
				</div>
				<div class="fragment" @click="open_modal">
					<img ref="vNCImg" src="../assets/images/BFoCM-von-neumann-computer.svg" />
				</div>
			</div>
		</section>
		<section data-auto-animate data-auto-animate-id="three">
			<h3>von Neumann Computer</h3>
			<div class="flex flex-col items-center">
				<img src="../assets/images/BFoCM-von-neumann-computer-anatomy.svg">
				<ul class="text-3xl">
					<li class="fragment"><span class="strong">Instructions</span> coded as binary data</li>
					<li class="fragment"><span class="strong">Program Counter</span>, or PC, a special register, stores the address of the instruction to be executed</li>
					<li class="fragment">Decode the instruction, and generate control signals for datapath</li>
				</ul>
			</div>
		</section>
		<section data-auto-animate data-auto-animate-id="three">
			<h3>von Neumann Computer</h3>
			<div class="flex justify-center">
				<img src="../assets/images/BFoCM-von-neumann-computer-loop.svg">
			</div>
			<div class="text-3xl text-left">
				<div class="fragment mt-6">Instructions are the fundamental unit of work.</div>
				<div class="fragment mt-6">Each instruction specifies:
					<ul>
						<li>an operation (also called <span class="strong">opcode</span>) to be performed,</li>
						<li>source and destination <span class="strong">operands</span>.</li>
					</ul>
				</div>
				<div class="fragment mt-6">By default, the next PC is current PC + size of current instruction, unless the instruction says otherwise. <span class="fragment"><span class="strong">guess?</span></span></div>
			</div>
		</section>
		<section>
			<h3>Your Own Programmable Machine</h3>
			<ul>
				<li class="fragment">Now you can design your own CPU with logic gates. <span class="fragment">Theoretically.</span></li>
				<li class="fragment">And you can write programs to run on your own CPU. <span class="fragment">In Binary.</span></li>
				<li class="fragment">However it's too tedious to write programs directly in binary.</li>
				<li class="fragment">So assembly language was created, it looks like <code>add x1, x2, x3</code> and then would be translated by the <span class="strong">assemblers</span> into binary code.</li>
			</ul>
		</section>
	</section>
</template>

<script setup lang="ts">
import {
	inject,
	Ref,
	ref,
} from "vue";

const CODE_1 = `int x, y;
y = x - 37;`;

const CODE_2 = `R1 <- Mem[0x1008]
R1 <- R1 - 37`;

interface ModalFunctions {
	open_common_modal: (content: string) => void;
}
const x = inject<ModalFunctions>("open_common_modal");

const vNCImg: Ref<HTMLImageElement | null> = ref(null);

function open_modal() {
	x!.open_common_modal(vNCImg.value!.outerHTML);
}
</script>

<style scoped>
table .text-center {
	text-align: center;
}

.strong {
	color: red;
	font-weight: bold;
}
</style>

