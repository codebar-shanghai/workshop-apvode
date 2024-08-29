<template>
	<section>
		<section>
			<h2>A Programmer's View of the Digital Evolution</h2>
		</section>
		<section>
			<h3>Quick Survey: When Were You Born</h3>
			<ul>
				<li class="fragment">~1981</li>
				<li class="fragment">1980~1984</li>
				<li class="fragment">1985~1989</li>
				<li class="fragment">1990~1994</li>
				<li class="fragment">1995~1999</li>
				<li class="fragment">2000s~</li>
			</ul>
		</section>
		<section>
			<h3>When You Try to Learn Programming</h3>
			<ul>
				<li class="fragment">Weird syntaxes and code structures</li>
				<li class="fragment">Strange concepts like stack / heap / threads</li>
				<li class="fragment">What could be done with a programming language</li>
				<li class="fragment">How to improve programming skills</li>
				<li class="fragment">How to learn other languages fast</li>
				<li class="fragment">And why some languages look the same</li>
				<li class="fragment">What happens underneath</li>
				<li class="fragment">Should I learn Linux and command line tools</li>
			</ul>
		</section>
		<section>
			<h3>Fasten Your Seatbelt</h3>
			<h4>We'll see patterns over and over again. Déjà vu.</h4>
		</section>
		<section>
			<ProblemStack1 />
		</section>
		<SignalAnalogDigital />
	</section>
</template>

<script setup lang="ts">
import ProblemStack1 from "../components/problem-stack-1.vue";
import SignalAnalogDigital from "./signal-analog-digital.vue";
</script>

