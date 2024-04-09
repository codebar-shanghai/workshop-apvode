<template>
	<section>
		<section>
			<h3>C (vs Assembly)</h3>
			<ul>
				<li>High Level: C provides a certain level of abstraction from the hardware</li>
				<li>Portability: It's easy to convert from C to machine code</li>
				<li>Easy of Use: functions, loops, conditional statements and data structures (arrays, linked list, tree, map)</li>
				<li>Ideal for operating system or system-level application development</li>
			</ul>
		</section>
		<section>
			<h3>Languages Influenced by C</h3>
			<div class="grid lang">
				<img v-for="i in LANG_ICONS" :src="`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${i}`" />
			</div>
		</section>
		<section>
			<h3>Notable Softwares Developed in C</h3>
			<div class="grid">
				<img v-for="i in NOTABLE_SW_ICONS" :src="`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${i}`" />
			</div>
		</section>
		<section>
			<h3>Timeline of C Language</h3>
			<ul>
				<li>1972 - first release</li>
				<li>1978 - <a href="https://en.wikipedia.org/wiki/K%26R_C">K&R C</a></li>
				<li>1989 - C89</li>
				<li>1999 - C99</li>
				<li>2011 - C11</li>
				<li>2018 - C17</li>
				<li>2024 - C23</li>
			</ul>
		</section>
		<section data-auto-animate>
			<h3>How to Convert C to Machine Code</h3>
		</section>
		<section data-auto-animate>
			<h3>How to Convert C to Machine Code</h3>
			<highlightjs language="c" :autodetect="false" :code="CODE_C_ORI" />
		</section>
		<section data-auto-animate>
			<h3>How to Convert C to Machine Code</h3>
			<highlightjs language="c" :autodetect="false" :code="CODE_C_ORI" />
			<highlightjs language="bash" :autodetect="false" :code="COMMAND_GCC_AIO" />
		</section>
		<section data-auto-animate>
			<h3>How to Convert C to Machine Code</h3>
			<highlightjs language="c" :autodetect="false" :code="CODE_C_ORI" />
			<highlightjs language="bash" :autodetect="false" :code="COMMAND_GCC_AIO" />
			<highlightjs language="bash" :autodetect="false" :code="COMMAND_EXEC" />
		</section>
		<section>
			<h3>Easy, right?</h3>
		</section>
		<section>
			<h3>Not really, let's break it down</h3>
		</section>
		<section data-auto-animate>
			<h3>Preprocessor</h3>
			<img src="../assets/images/BFoCM-compile-c-preprocessor.svg" />
		</section>
		<section data-auto-animate>
			<h3>Preprocessor</h3>
			<ul>
				<li><code>#include</code></li>
				<li><code>#define</code></li>
				<li><code>#if</code>/<code>#ifdef</code>/<code>#ifndef</code>/<code>#else</code>/<code>#elif</code>/<code>#endif</code></li>
				<li>...</li>
			</ul>
		</section>
		<section data-auto-animate>
			<h3>Preprocessor</h3>
			<div>
				<highlightjs language="bash" :autodetect="false" code="gcc -E main.c -o main.i" />
			</div>
			<div class="column-2">
				<div>
					<highlightjs language="c" :autodetect="false" :code="CODE_C_ORI" />
				</div>
				<div>
					<highlightjs language="c" :autodetect="false" :code="CODE_I" />
				</div>
			</div>
		</section>
		<section data-auto-animate>
			<h3>Preprocessor</h3>
			<div>
				<highlightjs language="c" :autodetect="false" :code="CODE_CALLEE_C" />
			</div>
			<div class="fragment">
				<highlightjs language="c" :autodetect="false" :code="CODE_CALLEE_H" />
			</div>
		</section>
		<section data-auto-animate>
			<h3>Preprocessor</h3>
			<div>
				<highlightjs language="c" :autodetect="false" :code="CODE_CALLER_C" />
			</div>
		</section>
		<section data-auto-animate data-auto-animate-restart>
			<h3>Compilation</h3>
			<img src="../assets/images/BFoCM-compile-c-compiler.svg" />
		</section>
		<section>
			<h3>Compilation</h3>
			<div>
				<highlightjs language="bash" :autodetect="false" code="gcc -S main.i -o main.s" />
			</div>
			<div class="column-2">
				<div>
					<highlightjs language="c" :autodetect="false" :code="CODE_C_ORI" />
				</div>
				<div>
					<highlightjs language="x86asm" :autodetect="false" :code="CODE_S_X86" />
				</div>
			</div>
		</section>
		<section>
			<h3>x86_64 vs ARMv8</h3>
			<div class="column-2">
				<div>
					<highlightjs language="x86asm" :autodetect="false" :code="CODE_S_X86" />
				</div>
				<div>
					<highlightjs language="armasm" :autodetect="false" :code="CODE_S_ARM" />
				</div>
			</div>
		</section>
		<section>
			<h3>Assembler</h3>
			<img src="../assets/images/BFoCM-compile-c-assembler.svg" />
		</section>
		<section>
			<img src="../assets/images/BFoCM-compile-c-linker.svg" />
		</section>
		<section>
			<h3>C (vs Assembly)</h3>
			<ul>
				<li>High Level: C provides a certain level of <span class="strong">abstraction</span> from the hardware<ul>
					<li class="fragment">Data types and operations are platform dependent</li>
				</ul></li>
				<li>Portability: It's easy to convert from C to machine code<ul>
					<li class="fragment">C is not directly related to any instruction set, but close enough</li>
					<li class="fragment">C will be convert to Assembly first, then reuse the assembler</li>
				</ul></li>
				<li>Easy of Use: functions, loops, conditional statements and data structures (arrays, linked list, tree, map)</li>
				<li class="fragment">If there're some parts of the program need to use specific hardware features, it's possible to write code with assembly languages then compile with other parts in C together</li>
			</ul>
		</section>
	</section>
</template>

<script setup lang="ts">
import CODE_C_ORI from "../assets/code/main.c?raw";
import CODE_I_RAW from "../assets/code/main.i?raw";
import CODE_S_ARM from "../assets/code/main.s.arm?raw";
import CODE_S_X86 from "../assets/code/main.s.x86?raw";

import CODE_CALLEE_C from "../assets/code/callee.c?raw";
import CODE_CALLEE_H from "../assets/code/callee.h?raw";
import CODE_CALLER_C from "../assets/code/caller.c?raw";

const LANG_ICONS = [
	"cplusplus/cplusplus-original.svg",
	"csharp/csharp-original.svg",
	"objectivec/objectivec-plain.svg",
	"java/java-original.svg",
	"javascript/javascript-original.svg",
	"go/go-original-wordmark.svg",
	"rust/rust-original.svg",
];

const NOTABLE_SW_ICONS = [
	"linux/linux-original.svg",
	"postgresql/postgresql-original.svg",
	"redis/redis-original.svg",
	"python/python-original.svg",
	"nginx/nginx-original.svg",
	"git/git-original.svg",
];

const COMMAND_GCC_AIO = `gcc main.c # -> a.out, which means "assembler output"`;

const COMMAND_EXEC    = `./a.out    # "." means the current dir`;

let tmp = CODE_I_RAW.split("\n");
const CODE_I = [
	...tmp.slice(0, 4),
	"# // ...",
	`# // other ~${tmp.length - 10} lines`,
	"# // ...",
	...tmp.slice(-6),
].join("\n");

</script>

<style scoped>
.strong {
	font-weight: bold;
	color: red;
}

.grid > img {
	width: 100px;
}

/* extra rules for the logo of Rust */
.reveal-root-theme-black .grid.lang > img:last-child {
	background-color: #fff;
}

.column-2 {
	display: flex;
}
</style>

