<template>
	<section>
		<section>
			<h3>A Glance of High Level</h3>
			<h3>Programming Languages</h3>
		</section>
		<section>
			<h3>New Features</h3>
			<ul>
				<li>Object-oriented programming</li>
				<li>Standard libraries w/ rich features</li>
				<li>Functional programming</li>
				<li>Cross-platform</li>
				<li>Less knowledge about memory or compilation</li>
			</ul>
		</section>
		<section>
			<h3>Java</h3>
			<h4>Write Once, Run Anywhere</h4>
		</section>
		<section>
			<h3>Java Virtural Machine</h3>
			<h4>Another Abstraction</h4>
			<div class="flex justify-center">
				<img data-src="../assets/images/BFoCM-java-bytecode.svg" />
			</div>
		</section>
		<section>
			<h3>Languages atop the JVM</h3>
			<div class="flex justify-evenly icon-container items-center">
				<div v-for="i in JVM_LANGUAGE_ICONS" class="flex flex-col items-center">
					<img :data-src="`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${i.icon}`" />
					<span class="text-3xl">{{i.name}}</span>
				</div>
			</div>
		</section>
		<section>
			<h3>Some JVM Implementations</h3>
			<table>
				<tr>
					<td>HotSpot</td>
					<td>Open Source</td>
				</tr>
				<tr>
					<td>GraalVM</td>
					<td>Open Source</td>
				</tr>
				<tr>
					<td>OpenJ9</td>
					<td>Open Source</td>
				</tr>
				<tr>
					<td>JRocket</td>
					<td>Proprietary, Discontinued</td>
				</tr>
				<tr>
					<td>Microsoft JVM</td>
					<td>Proprietary, Discontinued</td>
				</tr>
			</table>
		</section>
		<section>
			<h3>Highlights of JVM</h3>
			<ul>
				<li>Platform Independence</li>
				<li>Object-Oriented</li>
				<li>JIT: Just-In-Time compilation</li>
				<li>Security</li>
				<li>Robust Ecosystem</li>
			</ul>
		</section>
		<section data-auto-animate>
			<h3>No Free Lunch</h3>
			<ul>
				<li>Full GC is a Stop-The-World (STW) event</li>
				<li>Generics (J2SE 5.0) / Lambda Expression (Java 8)</li>
				<li>Understanding JVM</li>
			</ul>
		</section>
		<section data-auto-animate>
			<h3>No Free Lunch</h3>
			<div>No only in JVM...</div>
		</section>
		<section data-auto-animate>
			<h3>Event Loop in Node.js</h3>
			<highlightjs language="javascript" :autodetect="false" :code="CODE_EVT_LP" />
		</section>
		<section data-auto-animate>
			<h3>Event Loop in Node.js</h3>
			<highlightjs language="plaintext" :autodetect="false" :code="OUTPUT_EVT" />
		</section>
		<section>
			<h3>General JVM Implementations</h3>
			<table>
				<tr>
					<td></td>
					<td><a href="https://github.com/openjdk/jdk">OpenJDK</a></td>
					<td><a href="https://github.com/oracle/graal">GraalVM</a></td>
					<td><a href="https://github.com/eclipse-openj9/openj9">OpenJ9</a></td>
				</tr>
				<tr>
					<td>Java</td>
					<td>74.6%</td>
					<td>91.6%</td>
					<td>42.5%</td>
				</tr>
				<tr>
					<td>C</td>
					<td>7.2%</td>
					<td>3.7%</td>
					<td>18.8%</td>
				</tr>
				<tr>
					<td>C++</td>
					<td>13.7%</td>
					<td>0.4%</td>
					<td>34.3%</td>
				</tr>
			</table>
		</section>
		<section>
			<h3>Reminisce for a Moment</h3>
			<div>It's possible to compile C<br/>and assembly language togother.</div>
			<div class="fragment">As Java is implemented with C/C++,</div>
			<div class="fragment">is it possible to invoke functions<br/>defined in C/C++ from Java, and vice versa?</div>
		</section>
		<section>
			<h3>Yes</h3>
			<div>Java, Python, Node.js, ...</div>
		</section>
		<section>
			<div>Now let's take a look at this code for the <span class="text-red-500">4th</span> time</div>
			<highlightjs language="c" :autodetect="false" :code="CODE_OPEN" />
		</section>
		<section>
			<h3><span class="mono">open(2)</span></h3>
			<highlightjs language="plaintext" :autodetect="false" :code="MAN_OPEN_2" />
		</section>
		<section>
			<h3><a href="https://nodejs.org/api/fs.html#fsopenpath-flags-mode-callback" class="mono">fs.open()</a> in Node.js</h3>
			<highlightjs language="plaintext" :autodetect="false" :code="MAN_N_OPEN" />
		</section>
		<section>
			<h3><a href="https://docs.python.org/3/library/os.html#os.open" class="mono">os.open()</a> in Python</h3>
			<highlightjs language="plaintext" :autodetect="false" :code="MAN_P_OPEN" />
		</section>
		<section data-auto-animate>
			<h3>A Quick Comparison of Languages</h3>
			<table>
				<tr>
					<td>C</td>
					<td>
						<ul>
							<li class="fragment">simple syntax</li>
							<li class="fragment">close to hardware</li>
							<li class="fragment">manual memory management</li>
							<li class="fragment">compiled ahead-of-time</li>
							<li class="fragment">operating systems, embedded systems, and system programming</li>
						</ul>
					</td>
				</tr>
			</table>
		</section>
		<section data-auto-animate>
			<h3>A Quick Comparison of Languages</h3>
			<table>
				<tr>
					<td>C++</td>
					<td>
						<ul>
							<li class="fragment">more complex than C</li>
							<li class="fragment">comparable to C with optimizations and abstractions</li>
							<li class="fragment">manual memory management with RAII, smart pointers and automatic memory management</li>
							<li class="fragment">compiled ahead-of-time</li>
							<li class="fragment">system/software, game, simulations</li>
						</ul>
					</td>
				</tr>
			</table>
		</section>
		<section data-auto-animate>
			<h3>A Quick Comparison of Languages</h3>
			<table>
				<tr>
					<td>Java</td>
					<td>
						<ul>
							<li class="fragment">Object-oriented, high-level</li>
							<li class="fragment">Generally slower than C/C++, but JIT can optimise</li>
							<li class="fragment">Automatic garbage collection</li>
							<li class="fragment">Rich standard library, 3rd party libraries and frameworks</li>
							<li class="fragment">Enterprise applications, web services, Android apps</li>
						</ul>
					</td>
				</tr>
			</table>
		</section>
		<section data-auto-animate>
			<h3>A Quick Comparison of Languages</h3>
			<table>
				<tr>
					<td>Python</td>
					<td>
						<ul>
							<li class="fragment">High-level, readable</li>
							<li class="fragment">Slower than compiled languages (REPL)</li>
							<li class="fragment">Automatic garbage collection</li>
							<li class="fragment">Rich libraries and frameworks for web, data analysis, AI, scientific computing</li>
							<li class="fragment">Web, data science, AI/ML, scripting, rapic prototyping</li>
						</ul>
					</td>
				</tr>
			</table>
		</section>
		<section data-auto-animate>
			<h3>A Quick Comparison of Languages</h3>
			<table>
				<tr>
					<td>Node.js</td>
					<td>
						<ul>
							<li class="fragment">High-level, involving</li>
							<li class="fragment">Generally good for I/O tasks due to its non-blocking, event-driven architecture. Use V8 JIT to compile to bytecode first, then compile to machine code.</li>
							<li class="fragment">Automatic garbage collection from V8</li>
							<li class="fragment">Large ecosystem, several package managers</li>
							<li class="fragment">Web, RESTful APIs, microservices</li>
						</ul>
					</td>
				</tr>
			</table>
		</section>
		<section data-auto-animate>
			<h3>A Quick Comparison of Languages</h3>
			<table>
				<tr>
					<td>Rust</td>
					<td>
						<ul>
							<li class="fragment">A young language with complex syntax</li>
							<li class="fragment">Comparable to C/C++ w/ safety guarantees</li>
							<li class="fragment">Compile ahead-of-time</li>
							<li class="fragment">Without GC through its ownership and borrowing system</li>
							<li class="fragment">System programming, web assembly, embedded systems</li>
						</ul>
					</td>
				</tr>
			</table>
		</section>
	</section>
</template>

<script setup lang="ts">
import CODE_EVT_LP  from "../assets/code/event_loop.js?raw";
import OUTPUT_EVT   from "../assets/code/event_loop.txt?raw";
import CODE_OPEN    from "../assets/code/fd.c?raw";
import MAN_OPEN_2   from "../assets/man/open.2.txt?raw";
import MAN_N_OPEN   from "../assets/man/nodejs.fs.open.txt?raw";
import MAN_P_OPEN   from "../assets/man/python.os.open.txt?raw";

const JVM_LANGUAGE_ICONS = [
	{ name: "Scala", icon: "scala/scala-original.svg", },
	{ name: "Kotlin", icon: "kotlin/kotlin-original.svg", },
	{ name: "Clojure", icon: "clojure/clojure-original.svg", },
	{ name: "Groovy", icon: "groovy/groovy-original.svg", },
	{ name: "JRuby", icon: "ruby/ruby-original.svg", },
	{ name: "JPython", icon: "python/python-original.svg", },
];
</script>

<style>
.icon-container img {
	width: 100px;
}
</style>

