<template>
	<section>
		<h3>How to add two numbers?</h3>
		<div class="column-2 mono">
			<div>
				<div class="header">Base 10</div>
				<div class="carry fragment" data-fragment-index="1">1&nbsp;</div>
				<div>14</div>
				<div>+&nbsp;&nbsp;7</div>
				<div class="answer">
					<span class="fragment" data-fragment-index="2">2</span>
					<span class="fragment" data-fragment-index="1">1</span>
				</div>
			</div>

			<div class="fragment" data-fragment-index="3">
				<div class="header">Base 2</div>
				<div class="carry">
					<span class="fragment" data-fragment-index="7">1</span>
					<span class="fragment" data-fragment-index="6">1</span>
					<span class="fragment" data-fragment-index="5">1</span>
					<span class="fragment" data-fragment-index="4">0</span>
					<span>&nbsp;</span>
				</div>
				<div>1110</div>
				<div>+&nbsp;&nbsp;&nbsp;111</div>
				<div class="answer">
					<span class="fragment" data-fragment-index="8">1</span>
					<span class="fragment" data-fragment-index="7">0</span>
					<span class="fragment" data-fragment-index="6">1</span>
					<span class="fragment" data-fragment-index="5">0</span>
					<span class="fragment" data-fragment-index="4">1</span>
				</div>
			</div>
		</div>
		<div class="fragment mono" data-fragment-index="9">
			(10101)<sub>2</sub> = 2<sup>4</sup> + 2<sup>2</sup> + 2<sup>0</sup> = 16 + 4 + 1
		</div>
	</section>
</template>

<style scoped>
.column-2 {
	display: flex;
	justify-content: space-evenly;
	text-align: right;
}

.column-2 > div {
	width: 25%;
}

.header {
	text-align: center;
}

.carry {
	color: red;
	font-style: italic;
}

.answer {
	border-top: 1px solid;
}

.reveal-root-theme-black .answer {
	border-top-color: #fff;
}

.reveal-root-theme-white .answer {
	border-top-color: #000;
}
</style>

