<script setup lang="ts">
import {
	computed,
	defineAsyncComponent,
	onMounted,
	provide,
	ref,
} from "vue";
import type {
	Ref,
} from "vue";
import "reveal.js/dist/reveal.css";
import "./styles/reveal-themes.scss";
import Reveal from "reveal.js";
import {
	LoadImages,
} from "./lib/LCSReader/Utils";

const dark_mode = ref(true);
provide("dark_mode", dark_mode);

const theme_name = computed(() => {
	return `reveal-root-theme-${dark_mode.value ? "black" : "white"}`;
});

const Timeline = defineAsyncComponent(() => import("./components/Timeline.vue"));
import Modal from "./components/Modal.vue";

// slides
import Algorithms             from "./slides/algorithms.vue";
import BasicComponents        from "./slides/basic-components.vue";
import BooleanAlgebra         from "./slides/boolean-algebra.vue";
import Break1                 from "./slides/break-1.vue";
import Break2                 from "./slides/break-2.vue";
import CVsAssembly            from "./slides/c-vs-assembly.vue";
import EarlyComputers         from "./slides/early-computers.vue";
import Epilogue               from "./slides/epilogue.vue";
import FreeSoftwareMovement   from "./slides/free-software-movement.vue";
import HighLevelPL            from "./slides/high-level-languages.vue";
import OperatingSystem        from "./slides/operating-system.vue";
import Posix                  from "./slides/posix.vue";
import Printf                 from "./slides/printf.vue";
import Prologue               from "./slides/prologue.vue";
import StackHeap              from "./slides/stack-heap.vue";
import TerminalShellEmulator  from "./slides/terminal-shell-emulator.vue";
import VonNeumannArchitecture from "./slides/von-neumann-architecture.vue";

// utils
import {
	constructors,
	destructors,
} from "./lib/ResourceManager.ts";

// types
type ModalMethods = {
	show: (callback?: Function) => void;
};

type RevealEvent = Event & {
	currentSlide: Element;
	previousSlide: Element;
};

// refs
const timelineModal: Ref<ModalMethods | null> = ref(null);
const gateModal:     Ref<ModalMethods | null> = ref(null);
const commonModal:   Ref<ModalMethods | null> = ref(null);
const helperModal:   Ref<ModalMethods | null> = ref(null);

onMounted(() => {
	const deck = new Reveal({
		hash: false,
	});
	deck.initialize({
		maxScale: 1,
		minScale: 1,
		slideNumber: true,
		//autoPlayMedia: true, TODO
		plugins: [
		],
	});
	deck.on("slidechanged", event => {
		const { previousSlide, currentSlide } = (event as unknown as RevealEvent);
		if (destructors.has(previousSlide.id)) {
			destructors.get(previousSlide.id)!();
		}
		if (constructors.has(currentSlide.id)) {
			constructors.get(currentSlide.id)!();
		}
	});
	LoadImages();
});

function toggle_theme() {
	dark_mode.value = !dark_mode.value;
}

function open_timeline() {
	timelineModal.value!.show();
}

function open_gates() {
	gateModal.value!.show();
}

function open_helper() {
	helperModal.value!.show();
}

const commonModalContent = ref("");
function open_common_modal(vHTML: string) {
	commonModalContent.value = vHTML;
	commonModal.value!.show(() => commonModalContent.value = "");
}
provide("open_common_modal", { open_common_modal });
</script>

<template>
	<div :class="theme_name">
		<div class="bfocm-toolbar">
			<div class="btn" @click="open_helper">
				<fa icon="fa-regular fa-circle-question" />
			</div>
			<div class="btn" @click="toggle_theme">
				<fa icon="fa-regular fa-lightbulb" />
			</div>
			<div class="btn" @click="open_gates">
				<fa icon="fa-soid fa-microchip" />
			</div>
			<div class="btn" @click="open_timeline">
				<fa icon="fa-solid fa-timeline" />
			</div>
		</div>
		<div ref="revealEl" class="reveal">
			<div class="slides">
				<Prologue />
				<BooleanAlgebra />
				<BasicComponents />
				<VonNeumannArchitecture />
				<Break1 />
				<EarlyComputers />
				<OperatingSystem />
				<CVsAssembly />
				<FreeSoftwareMovement />
				<Posix />
				<Break2 />
				<TerminalShellEmulator />
				<Printf />
				<StackHeap />
				<HighLevelPL />
				<Algorithms />
				<Epilogue />
			</div>
		</div>
		<Modal ref="timelineModal">
			<Timeline />
		</Modal>
		<Modal ref="gateModal">
			<img src="./assets/images/Overview_All_Gates_Updated_01.png" />
		</Modal>
		<Modal ref="commonModal">
			<div v-html="commonModalContent"></div>
		</modal>
		<Modal ref="helperModal">
			<div class="text-3xl bg-white w-1/2 p-12">
				<h3>Shorcuts</h3>
				<ul class="pl-6 list-disc">
					<li><kbd>ESC</kbd> or <kbd>o</kbd>: toggle the overview mode on and off.</li>
					<li><kbd>f</kbd>: view presentation in fullscreen mode. Once in fullscreen mode, press the <kbd>ESC</kbd> key to exit.</li>
					<li><kbd>←</kbd><kbd>↓</kbd><kbd>↑</kbd><kbd>→</kbd>: navigate with arrow keys.</li>
					<li><kbd>h</kbd><kbd>j</kbd><kbd>k</kbd><kbd>l</kbd>: navigate with hjkl. (vim style)</li>
					<li><kbd>g</kbd>: jump to slide, type <code class="text-sky-500 underline underline-offset-8">6/2</code> will navigate to horizontal slide 6, vertical slide 2.</li>
				</ul>
				<p class="text-xl">Go down to the end of each section first, then go right.</p>
			</div>
		</Modal>
	</div>
</template>

<style scoped>
.bfocm-toolbar {
	position: fixed;
	top: 5%;
	right: 5%;
	z-index: 9999;
	display: flex;
}

.bfocm-toolbar .btn {
	font-size: 2rem;
	width: 2.5rem;
	height: 2.5rem;
	line-height: 2.5rem;
	text-align: center;
}

.bfocm-toolbar .btn:hover {
	cursor: pointer;
}

.reveal-root-theme-black .bfocm-toolbar {
	color: #333;
}

.reveal-root-theme-white .bfocm-toolbar {
	color: #ccc;
}

.reveal-root-theme-black .bfocm-toolbar .btn:hover {
	color: #ccc;
}
.reveal-root-theme-white .bfocm-toolbar .btn:hover {
	color: #333;
}

kbd {
	border-radius: 2px;
	padding: 0 5px;
	border-color: #e6e6e6 #bebebe #bebebe #e6e6e6;
	border-style: solid;
	border-width: 1px 3px 4px;
	background-color: #d2d2d2;
	background-color: rgba(210, 210, 210, 0.9);
}
</style>

