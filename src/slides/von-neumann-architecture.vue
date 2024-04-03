<template>
	<section>
		<section data-auto-animate data-auto-animate-id="one">
			<h3>Main Memory</h3>
			<h3>(Random Access Memory)</h3>
			<ul>
				<li class="fragment">Registers are inside processors, built with logic gates just like ALUs and other components.</li>
				<li class="fragment">Registers are super fast, but can only be used to store a small number of data elements.</li>
				<li class="fragment">Main memory is an array of bits, organized in <span class="mono it">W</span> words of <span class="mono it">N</span> bits each.</li>
				<li class="fragment">Typically <span class="mono it">W</span> is power of 2 (<span class="mono">W = 2<sup>k</sup></span>), e.g. W = 8 (k = 3 address bits), N = 32 bits per word.</li>
				<li class="fragment">Can read from and write to individual words.</li>
				<li class="fragment">Many possible implementations.</li>
			</ul>
		</section>
		<section data-auto-animate data-auto-animate-id="one">
			<h3>Main Memory</h3>
			<h3>(Random Access Memory)</h3>
			<table>
				<tr>
					<th>Addr.</th>
					<th>Value</th>
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
					<td class="mono">...</td>
				</tr>
				<tr>
					<td class="mono">...</td>
					<td class="mono">...</td>
				</tr>
				<tr>
					<td class="mono">111</td>
					<td class="mono">10000100&nbsp;01001111&nbsp;11100100&nbsp;00001000</td>
				</tr>
			</table>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h3>Registers vs Memory</h3>
			<ul>
				<li>Typically variables live in memory.</li>
				<li>Registers hold temporary values or values that we need to use repeatedly.</li>
				<li>ALU operations work on registers only.</li>
				<li>To operate with memory variables:
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
			<div class="column-2">
				<div>
					<ul>
						<li class="mono">0x1000: n</li>
						<li class="mono">0x1004: r</li>
						<li class="mono">0x1008: x</li>
						<li class="mono">0x100C: y</li>
					</ul>
				</div>
				<div>
					<div>
						<highlightjs language="cpp" :code="CODE_1" />
						<highlightjs language="plaintext" :code="CODE_2" />
					</div>
				</div>
			</div>
		</section>
		<section data-auto-animate data-auto-animate-id="three">
			<h3>von Neumann Computer</h3>
			<div class="column-2">
			<div>
			<ul>
				<li>Also called stored-program computer</li>
				<li>Express program as a sequence of <span class="strong">coded instructions</span></li>
				<li>Memory holds both data and instructions</li>
				<li>CPU fetches, interprets, and executes successive instructions of the program</li>
			</ul>
			</div>
				<div>
			<img src="../assets/images/BFoCM-von-neumann-computer.svg">
			</div>
			</div>
		</section>
		<section data-auto-animate data-auto-animate-id="three">
			<h3>von Neumann Computer</h3>
			<img src="../assets/images/BFoCM-von-neumann-computer-anatomy.svg">
			<ul>
				<li><span class="strong">Instructions</span> coded as binary data</li>
				<li><span class="strong">Program Counter</span>, or PC, a special register, stores the address of the instruction to be executed</li>
				<li>Decode the instruction, and generate control signals for datapath</li>
			</ul>
		</section>
		<section data-auto-animate data-auto-animate-id="three">
			<h3>von Neumann Computer</h3>
			<div>Instructions are the fundamental unite of work.</div>
			<div>Each instruction specifies:
				<ul>
					<li>an operation (also called <span class="strong">opcode</span>) to be performed,</li>
					<li>source and destination <span class="strong">operands</span>.</li>
				</ul>
			</div>
			<div>By default, the next PC is current PC + size of current instruction, unless the instruction says otherwise. <span class="fragment"><span class="strong">guess?</span></span></div>
			<div>
				<img src="../assets/images/BFoCM-von-neumann-computer-loop.svg">
			</div>
		</section>
		<section>
			<h3>Assembly Language</h3>
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
const CODE_1 = `int x, y;
y = x - 37;`;

const CODE_2 = `R1 <- Mem[0x1008]
R1 <- R1 - 37`;
</script>

<style scoped>
.column-2 {
	display: flex;
	justify-content: space-around;
}

.column-2 > div {
	width: 45%;
}

.it {
	font-style: italic;
}

table th {
	text-align: center;
}

.strong {
	color: red;
	font-weight: bold;
}
</style>

