<template>
	<section>
		<section>
			<img src="../assets/images/Heckert_GNU_white.svg" />
			<h3>GNU = GNU's Not Unix</h3>
		</section>
		<section>
			<h3>GNU is not the beginning of</h3>
			<h3>the free software movement and the hacker culture</h3>
		</section>
		<section>
			<h3>The GNU Project's aim was to</h3>
			<h3>give computer users freedom and control over their computers</h3>
		</section>
		<section>
			<h3>Softwares Released by GNU</h3>
			<ul>
				<li>Emacs, a text editor</li>
				<li>Development Toolchain: debugger, parser, linker, and compiler</li>
				<li>Unix utilities: ls, grep, awk, make...</li>
			</ul>
		</section>
		<section>
			<h3>MINUX (means mini-UNIX)</h3>
			<div>Written by Andrew S. Tanenbaum in Netherlands for teaching purpose and released in 1987 without even one line of UNIX source code</div>
		</section>
		<section>
			<h3>MINUX vs UNIX</h3>
			<ul>
				<li>MINUX was written near 17 years after UNIX V1, and nearly 10 years after UNIX V7</li>
				<li>Modern, well structured, efficient, and readable</li>
				<li>Compatibility with UNIX V7</li>
				<li>For <a href="https://en.wikipedia.org/wiki/IBM_Personal_Computer">IBM PC</a></li>
			</ul>
		</section>
		<section>
			<h3>Then There came a Finnish Student</h3>
			<div>Linux Torvalds</div>
			<div>Announced his kernel on Aug 25, 1991</div>
			<div>Released Linux 1.0 under <a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html">GPLv2</a> on Mar 13, 1994</div>
			<div>And adopted by the GNU project as its kernel</div>
		</section>
		<section>
			<h3>Linux Distributions</h3>
			<div class="icon-container">
				<img v-for="icon in DISTRO_ICONS" :src="`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`" />
			</div>
		</section>
	</section>
</template>

<script setup lang="ts">
const DISTRO_ICONS = [
	"archlinux/archlinux-original.svg",
	"centos/centos-original.svg",
	"debian/debian-original.svg",
	"fedora/fedora-original.svg",
	"gentoo/gentoo-original.svg",
	"opensuse/opensuse-original.svg",
	"redhat/redhat-original.svg",
	"ubuntu/ubuntu-original.svg",
];
</script>

<style scoped>
.icon-container > img {
	width: 100px;
}

</style>

