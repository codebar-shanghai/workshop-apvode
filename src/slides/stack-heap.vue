<template>
	<section>
		<section>
			<div>With C you don't have to deal with registers or instructions.</div>
			<div class="fragment">But you still need to take care of memory.</div>
			<div class="fragment">Let's get hands dirty.</div>
		</section>
		<section>
			<h3>Address of Variable</h3>
			<highlightjs language="c" :autodetect="false" :code="CODE_ADDR_VAR_STACK" />
			<highlightjs language="plaintext" :autodetect="false" :code="OUTPUT_ADDR_VAR_STACK" />
		</section>
		<section>
			<h3>Hi, Pointer</h3>
			<div class="flex">
				<div class="w-1/2">
					<highlightjs language="c" :autodetect="false" :code="CODE_POINTER" />
				</div>
				<div class="w-1/2">
					<highlightjs language="plaintext" :autodetect="false" :code="OUTPUT_POINTER" />
				</div>
			</div>
		</section>
		<section data-auto-animate>
			<h3>Hi, Array</h3>
			<div class="flex">
				<div class="w-1/2">
					<highlightjs language="c" :autodetect="false" :code="CODE_ARRAY" />
				</div>
				<div class="w-1/2">
					<highlightjs language="plaintext" :autodetect="false" :code="OUTPUT_ARRAY" />
				</div>
			</div>
		</section>
		<section data-auto-animate>
			<h3>Hi, Array</h3>
			<div class="flex">
				<div class="w-1/2">
					<highlightjs language="c" :autodetect="false" :code="CODE_ARRAY_UNINIT" />
				</div>
				<div class="w-1/2">
					<highlightjs language="plaintext" :autodetect="false" :code="OUTPUT_ARRAY_UNINIT" />
				</div>
			</div>
		</section>
		<section>
			<h3>Allocate and Free Dynamic Memory</h3>
			<highlightjs language="c" :autodetect="false" :code="CODE_ADDR_VAR_HEAP" />
			<highlightjs language="plaintext" :autodetect="false" :code="OUTPUT_ADDR_VAR_HEAP" />
		</section>
		<section data-auto-animate>
			<h3>Let's Make It SPICER</h3>
			<highlightjs language="c" :autodetect="false" :code="CODE_ADDR_VAR_REC" />
		</section>
		<section data-auto-animate>
			<h3>Let's Make It SPICER</h3>
			<highlightjs language="plaintext" :autodetect="false" :code="OUTPUT_ADDR_VAR_REC" />
		</section>
		<section data-auto-animate>
			<h3>Hi Stack</h3>
			<div class="flex justify-center">
				<img data-src="../assets/images/premium_photo-1679255807252-3c568399dfc2.avif" />
			</div>
		</section>
		<section data-auto-animate>
			<h3>Hi Stack</h3>
			<div>Tower of Hanoi</div>
			<div class="flex justify-center">
				<img data-src="../assets/images/Tower_of_Hanoi.jpeg" />
			</div>
			<div class="fragment">First-In-Last-Out (or Last-In-First-Out)</div>
		</section>
		<section data-auto-animate>
			<h3>Memory Hierarchy</h3>
			<img data-src="../assets/images/BFoCM-memory-hierarchy.png" />
		</section>
		<section data-auto-animate>
			<h3>Memory Hierarchy</h3>
			<table class="memory-hierarchy">
				<tr>
					<td style="text-align: right">0.5ns</td>
					<td>L1 Cache</td>
					<td class="fragment" data-fragment-index="1">0.5s</td>
				</tr>
				<tr>
					<td>7ns</td>
					<td>L2 Cache</td>
					<td class="fragment" data-fragment-index="1">7s</td>
				</tr>
				<tr>
					<td>100ns</td>
					<td>DRAM</td>
					<td class="fragment" data-fragment-index="1">100s</td>
				</tr>
				<tr>
					<td>150µs</td>
					<td>SSD</td>
					<td class="fragment" data-fragment-index="1">1.7 days</td>
				</tr>
				<tr>
					<td>10ms</td>
					<td>HDD</td>
					<td class="fragment" data-fragment-index="1">16.5 weeks</td>
				</tr>
			</table>
		</section>
		<section>
			<h3>Stack</h3>
			<ul style="font-size: 30px">
				<li class="fragment">When a function is called, a block is reserved on the top of stack for local variables and some bookkeeping data.</li>
				<li class="fragment">When that function returns, the block becomes unused and can be reused for another function call.</li>
				<li class="fragment">In most computer architectures, there is a special register known as the <span class="text-red-500">stack pointer</span> register.</li>
				<li class="fragment">The most recently used data (i.e. the data on the top of the stack) is likely to be the data needed next, it tends to stay in the CPU cache.</li>
			</ul>
		</section>
		<section>
			<h3>Heap</h3>
			<ul style="font-size: 30px">
				<li class="fragment">Is another region of memory managed by the operating system for dynamic memory allocation. (<code>`malloc()` / `calloc()` / `realloc()`</code>)</li>
				<li class="fragment">The compiler needs to know how much memory to allocate in a function, so you can't declare an array of unknown size on the stack.</li>
				<li class="fragment">Sometime you also need to use a space to keep data for longer time the function in which it's created.</li>
				<li class="fragment">Don't forget to call <code>`free()`</code>, otherwise it would cause memory leak.</li>
			</ul>
		</section>
		<section>
			<h3>Now You May Have a Guess</h3>
			<h3>of Stack Overflow</h3>
		</section>
	</section>
</template>

<script setup lang="ts">
import CODE_ADDR_VAR_HEAP  from "../assets/code/addr_var_heap.c?raw";
import CODE_ADDR_VAR_STACK from "../assets/code/addr_var_stack.c?raw";
import CODE_ADDR_VAR_REC   from "../assets/code/addr_var_recursive.c?raw";
import CODE_ARRAY          from "../assets/code/array.c?raw";
import CODE_ARRAY_UNINIT   from "../assets/code/array_uninitialized.c?raw";
import CODE_POINTER        from "../assets/code/pointer.c?raw";

import OUTPUT_ADDR_VAR_HEAP  from "../assets/code/output_addr_var_heap.txt?raw";
import OUTPUT_ADDR_VAR_REC   from "../assets/code/output_addr_var_rec.txt?raw";
import OUTPUT_ADDR_VAR_STACK from "../assets/code/output_addr_var_stack.txt?raw";
import OUTPUT_ARRAY          from "../assets/code/output_array.txt?raw";
import OUTPUT_ARRAY_UNINIT   from "../assets/code/output_array_uninit.txt?raw";
import OUTPUT_POINTER        from "../assets/code/output_pointer.txt?raw";
import {
	onMounted,
} from "vue";
import {
	component_loaded,
} from "../lib/ResourceManager.ts";

onMounted(() => {
	component_loaded();
});
</script>

<style scoped>
table.memory-hierarchy tr td {
	text-align: center;
}
table.memory-hierarchy tr td:first-child {
	text-align: right;
}
table.memory-hierarchy tr td:last-child {
	text-align: left;
}
</style>

