<template>
	<section>
		<section data-auto-animate>
			<highlightjs language="c" :autodetect="false" :code="CODE_OPEN" />
			<highlightjs language="plaintext" :autodetect="false" :code="OUTPUT_OPEN" />
		</section>
		<section data-auto-animate>
			<h3>Imagine You're a System Developer</h3>
			<highlightjs language="c" :autodetect="false" :code="CODE_OPEN" />
			<div>How to use <span class="mono">open()</span> and <span class="mono">printf()</span>?</div>
		</section>
		<section>
			<highlightjs language="plaintext" :autodetect="false" code="man 3 printf" />
			<div class="flex justify-center">
				<a href="https://man7.org/linux/man-pages/man3/printf.3.html">
					<img src="../assets/images/man-printf(3).png" />
				</a>
			</div>
		</section>
		<section>
			<highlightjs language="plaintext" :autodetect="false" code="man 2 open" />
			<div class="flex justify-center">
				<a href="https://man7.org/linux/man-pages/man2/open.2.html">
					<img src="../assets/images/man-open(2).png" />
				</a>
			</div>
		</section>
		<section>
			<highlightjs language="plaintext" :autodetect="false" code="man 4 null" />
			<div class="flex justify-center">
				<a href="https://man7.org/linux/man-pages/man4/null.4.html">
					<img src="../assets/images/man-null(4).png" />
				</a>
			</div>
		</section>
		<section>
			<h3>Common Man Page Sections</h3>
			<table>
				<tr>
					<th>No.</th>
					<th>Description</th>
				</tr>
				<tr>
					<td>1</td>
					<td>General commands</td>
				</tr>
				<tr>
					<td>2</td>
					<td>System calls</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Library functions, e.g. the C standard library</td>
				</tr>
				<tr>
					<td>8</td>
					<td>System administration commands and daemons</td>
				</tr>
			</table>
		</section>
		<section>
			<div>Now let's take a look at this code again</div>
			<highlightjs language="c" :autodetect="false" :code="CODE_OPEN" />
		</section>
		<section data-auto-animate>
			<h3>POSIX</h3>
			<div>Portable Operating System Interface</div>
		</section>
		<section data-auto-animate>
			<h3>POSIX</h3>
			<ul>
				<li class="fragment">It's a family of standards specified by IEEE.</li>
				<li class="fragment">It defined APIs for Unix-like operating systems.</li>
				<li class="fragment">Not all operating systems claim full compliance with POSIX standards.</li>
				<li class="fragment">But it allows developers to write applications that could run on any POSIX-compliant system without significant modifications.</li>
			</ul>
		</section>
	</section>
</template>

<script setup lang="ts">
import CODE_OPEN from "../assets/code/fd.c?raw";

const OUTPUT_OPEN = `$ ./a.out
The file discriptor is 3`;
</script>

<style scoped>
</style>

