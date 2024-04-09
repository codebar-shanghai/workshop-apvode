<template>
	<section>
		<section>
			<h3>Finally the Last Piece</h3>
			<ProblemStack6 />
		</section>
		<section>
			<h3>
				<a href="https://en.wikipedia.org/wiki/Flip_book">Flipbook</a>
			</h3>
			<img src="../assets/images/1868_linett_kineograph_patent_fig._III.jpg" />
		</section>
		<section>
			<h3>Video Encoding &amp; Decoding</h3>
			<a href="https://www.eetimes.com/how-video-compression-works/">
				<img src="../assets/images/media-1067086-mar04fig1still.gif" />
			</a>
		</section>
		<section>
			<h3>Commonly Used Algorithms</h3>
			<ul>
				<li>AVC (Advanced Video Coding) / H.264</li>
				<li>HEVC (High Efficiency Video Coding) / H.265</li>
				<li>VP8</li>
				<li>VP9</li>
				<li>AV1</li>
			</ul>
		</section>
		<section>
			<h3>Software Encoding &amp; Decoding</h3>
			<ul>
				<li>Can be implemented in any language and run on any CPU</li>
				<li>Can work easily with filters implemented by others</li>
				<li>There're some good implementations of encoders, such as x264 and x265</li>
				<li>Might consume a lot of computing resource, and is slower than...</li>
			</ul>
		</section>
		<section>
			<h3>Hardware Encoding &amp; Decoding</h3>
			<ul>
				<li>Specialized chips</li>
				<li>Much faster than software</li>
				<li>New algorithms might require hardware upgrading</li>
			</ul>
		</section>
		<section>
			<ProblemStack6 />
		</section>
	</section>
</template>

<script setup lang="ts">
import ProblemStack6 from "../components/problem-stack-6.vue";
</script>

<style scoped>
</style>

