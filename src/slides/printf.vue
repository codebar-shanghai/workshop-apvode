<template>
	<section>
		<section>
			<div>Now let's take a look at this code for the third time</div>
			<highlightjs language="c" :autodetect="false" :code="CODE_OPEN" />
			<highlightjs language="plaintext" :autodetect="false" :code="OUTPUT_OPEN" />
		</section>
		<section>
			<h3>The Default Streams</h3>
			<ul>
				<li>0 - <code>stdin</code></li>
				<li>1 - <code>stdout</code></li>
				<li>2 - <code>stderr</code></li>
			</ul>
		</section>
		<section>
			<div class="column-2">
				<div>
					<highlightjs language="c" :autodetect="false" :code="CODE_PRINTF" />
				</div>
				<div>
					<highlightjs language="c" :autodetect="false" :code="CODE_FPRINTF" />
				</div>
			</div>
		</section>
		<section>
			<h3>Do You Remember the Python Workshop?</h3>
		</section>
		<section>
			<div>C#</div>
			<highlightjs language="csharp" :autodetect="false" :code="OUTPUT_CS" />
			<div>Java</div>
			<highlightjs language="java" :autodetect="false" :code="OUTPUT_JA" />
		</section>
		<section>
			<div>JavaScript</div>
			<highlightjs language="javascript" :autodetect="false" :code="OUTPUT_JS" />
			<div>Python</div>
			<highlightjs language="python" :autodetect="false" :code="OUTPUT_PY" />
		</section>
		<section>
			<div>You might have also seen this from somewhere</div>
			<highlightjs language="bash" :autodetect="false" code="./a.out > out.txt 2>/dev/null &" />
			<ul>
				<li class="fragment"><code>`./a.out`</code> execute the file a.out in the current directory</li>
				<li class="fragment"><code>`&gt; out.txt`</code> redirect the stdout stream to the file out.txt</li>
				<li class="fragment"><code>`2&gt;/dev/null`</code> redirect the stderr stream to the file /dev/null</li>
				<li class="fragment"><code>`&amp;`</code> execute the file in the background</li>
			</ul>
		</section>
		<section>
			<div>Now you see a program can get data from <code>stdin</code> and return data to <code>stdout</code></div>
			<div class="fragment">What if I want to use the output of a program as the input of another?</div>
		</section>
		<section>
		<h3>Pipe</h3>
			<highlightjs language="bash" :autodetect="false" code='ls | grep "foo" | grep "bar"' />
		</section>
	</section>
</template>

<script setup lang="ts">
import CODE_OPEN    from "../assets/code/fd.c?raw";
import CODE_PRINTF  from "../assets/code/main.c?raw";
import CODE_FPRINTF from "../assets/code/main2.c?raw";

import OUTPUT_CS from "../assets/code/output.cs?raw";
import OUTPUT_JA from "../assets/code/output.java?raw";
import OUTPUT_JS from "../assets/code/output.js?raw";
import OUTPUT_PY from "../assets/code/output.py?raw";

const OUTPUT_OPEN = `$ ./a.out
The file discriptor is 3`;
</script>

<style scoped>
.column-2 {
	display: flex;
}

.column-2 > div {
	width: 50%;
}
</style>
