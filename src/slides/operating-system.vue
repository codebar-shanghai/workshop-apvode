<template>
	<section>
		<section>
			<img src="../assets/images/IMG_2090.jpeg">
		</section>
		<section>
			<h3>Batch Systems in Mid 1950s</h3>
			<img src="../assets/images/BFoCM-batch-system.png">
			<div class="italic">Source: A. S. Tanenbaum, Operating Systems</div>
		</section>
		<section>
			<h3>A Few New Technologies in Early 1960s</h3>
			<ul>
				<li class="fragment">Hard Drive</li>
				<li class="fragment">Multiprogramming w/ memory partitions</li>
				<li class="fragment">MIT: CTSS (Compatible Time-Sharing System)</li>
				<li class="fragment">Minicomputers, smaller but less than 5% of a 7094</li>
			</ul>
		</section>
		<section>
			<h3>MULTICS</h3>
			<h4>MULTiplexed Information and Computing Service</h4>
			<ul>
				<li>MIT, Bell Labs, and GE</li>
				<li>A machine (a huge mainframe) to support hundreds of simultaneous timesharing users</li>
				<li>Was written in PL/I, but the <span class="strong">compiler</span> was years late</li>
			</ul>
		</section>
		<section>
			<div><a href="https://en.wikipedia.org/wiki/Ken_Thompson_(computer_programmer)">Ken Thompson</a> from Bell Labs</div>
			<div>wrote a stripped-down, one-user version of MULTICS</div>
			<div>on a small DEC PDP-8 minicomputer</div>
		</section>
		<section>
			<img src="../assets/images/Pdp7-oslo-2005.jpeg">
		</section>
		<section>
			<h3>K. Thompson & D. Ritchie at PDP-11</h3>
			<a href="https://www.bell-labs.com/usr/dmr/www/picture.html">
				<img src="../assets/images/ken-and-den.jpg">
			</a>
		</section>
		<section>
			<h3>UNIX</h3>
			<ul>
				<li>Originally named Unics, Uniplexed Information and Computing Service, a pun on Multics</li>
				<li>Originally written in assembly language, Version 4 was rewritten in <span class="strong">C</span> in 1973</li>
				<li>In 1973, AT&T licensed Version 5 Unix to educational institutions</li>
				<li>The first <span class="strong">port</span> of Unix to another platform in 1977</li>
			</ul>
		</section>
		<section>
			<h3>Where is UNIX</h3>
		</section>
		<section>
			<h3>The UNIX Family Tree</h3>
			<a href="https://en.wikipedia.org/wiki/History_of_Unix">
				<img src="../assets/images/Unix_history-simple.svg">
			</a>
		</section>
		<section>
			<h3>Key aspects of UNIX</h3>
			<ul>
				<li>Simplicity</li>
				<li>Portability w/ the C programming language, easily adapted on different platforms</li>
				<li>Shell, able to interactive w/ the system</li>
				<li>Pipelines</li>
				<li>Development Environment</li>
			</ul>
		</section>
		<section>
			<img src="../assets/images/BFoCM-programming-against-hw.svg">
		</section>
		<section data-auto-animate>
			<img src="../assets/images/BFoCM-programming-against-os.svg">
		</section>
		<section data-auto-animate>
			<img src="../assets/images/BFoCM-programming-against-os.svg">
			<h3>Processes vs Program</h3>
			<ul>
				<li>A program is a collection of binary instructions</li>
				<li>A process is an instance of a program that is being executed, including program code and states (registers, memory and other resources)</li>
				<li>The <span class="strong">OS Kernel</span> is a process with special privileges</li>
			</ul>
		</section>
		<section data-auto-animate>
			<img src="../assets/images/BFoCM-programming-against-os.svg">
			<h3>Programmer's View of OS</h3>
			<ul>
				<li><span class="strong">Protection</span> and Privacy: Process cannot access each other's data</li>
				<li><span class="strong">Abstraction</span>: OS hides details of underlying</li>
				<li><span class="strong">Resource Management</span>: OS controls how processes share hardware</li>
			</ul>
		</section>
		<section data-auto-animate>
			<h3>Virtual Machines</h3>
			<h4>A New Layer of Abstraction</h4>
			<ProblemStack4 />
		</section>
		<section data-auto-animate>
			<h3>Virtual Machines</h3>
			<ul>
				<li>The OS gives a Virtual Machine to each process</li>
				<li>Each process believes it runs on its own machine, e.g. processor, memory, I/O, files ...</li>
				<li>... but this machine doesn't exist in physical hardware</li>
				<li>A virtual Machine is an <span class="strong">emulation</span> of a computer system</li>
			</ul>
		</section>
	</section>
</template>

<script setup lang="ts">
import ProblemStack4 from "../components/problem-stack-4.vue";
</script>

<style scoped>
.strong {
	font-weight: bold;
	color: red;
}

.italic {
	font-style: italic;
}
</style>

