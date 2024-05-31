<template>
	<section>
		<section>
			<h3>Summary</h3>
			<ul>
				<li class="fragment">There're multiple layers of abstraction in computing.</li>
				<li class="fragment">"We can solve any problem by introducing an extra level of indirection." -- David J. Wheeler</li>
				<li class="fragment">Most of the time, implementations have trade-offs.</li>
				<li class="fragment">Gaining an understanding of the lower layers can be beneficial.</li>
			</ul>
		</section>
		<section>
			<h3>References</h3>
			<ul style="font-size: 32px">
				<li>(Open Course) MIT 6.004 Computation Structures</li>
				<li>(Open Course) CMU 18-447 Introduction to Computer Architecture</li>
				<li>(Book) Operating Systems: Design and Implementation, 3e</li>
				<li>(Book) Computer Systems: A Programmer's Perspective, 3e</li>
				<li>(Link) <a href="https://exclusivearchitecture.com/03-technical-articles-IC-00-table-of-contents.html">How microchips work</a></li>
				<li>(Link) <a href="https://www.computerhistory.org/timeline/">Timeline of Computer History</a></li>
				<li>(Link) <a href="https://www.hanselman.com/blog/whats-the-difference-between-a-console-a-terminal-and-a-shell">What's the difference between a console, a terminal, and a shell?</a></li>
				<li>(Source) <a href="https://github.com/drendog/Logic-Circuit-Simulator">Logic Circuit Simulator</a></li>
				<li>(Video Game) <a href="https://turingcomplete.game/">Turing Complete</a></li>
			</ul>
		</section>
		<section>
			<h3>Tools Used for this Project</h3>
			<ul style="font-size: 32px">
				<li>Neovim + Tmux + Zsh</li>
				<li>Node.js + pnpm</li>
				<li>Vue + Vite + TypeScript</li>
				<li>Reveal.js</li>
				<li>timelinejs</li>
				<li>highlight.js</li>
				<li><span class="strikethrough">p5.js</span> <span class="strikethrough">echarts</span> konva.js</li>
				<li>Font Awesome + devicons</li>
				<li>diagrams.net (previously draw.io)</li>
			</ul>
		</section>
		<section data-transition="slide-in fade-out">
			<h3>May the <span class="fragment custom show" data-fragment-index="1">force</span><span class="fragment custom hidden" data-fragment-index="1">SOURCE</span> be with you.</h3>
		</section>
	</section>
</template>

<style scoped>
.fragment.hidden {
	display: none;
}
.fragment.hidden.visible {
	display: inline;
}

.fragment.show.visible {
	display: none;
}

.strikethrough {
	position: relative;
}
.strikethrough:before {
	position: absolute;
	content: "";
	left: 0;
	top: 50%;
	right: 0;
	border-top: 3px solid;
	border-color: #db6f67;

	-webkit-transform:rotate(-5deg);
	-moz-transform:rotate(-5deg);
	-ms-transform:rotate(-5deg);
	-o-transform:rotate(-5deg);
	transform:rotate(-5deg);
}
</style>

