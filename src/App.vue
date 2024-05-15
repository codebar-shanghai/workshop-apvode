<script setup lang="ts">
import {
	computed,
	defineAsyncComponent,
	provide,
	ref,
	watch,
} from "vue";
import type {
	Ref,
} from "vue";
import {
	component_counter,
} from "./lib/ResourceManager";
import "reveal.js/dist/reveal.css";
import "./styles/reveal-themes.scss";
import Reveal from "reveal.js";

const dark_mode = ref(true);
provide("dark_mode", dark_mode);

const theme_name = computed(() => {
	return `reveal-root-theme-${dark_mode.value ? "black" : "white"}`;
});

const Timeline = defineAsyncComponent(() => import("./components/Timeline.vue"));
const Modal    = defineAsyncComponent(() => import("./components/Modal.vue"));
const PLoader  = defineAsyncComponent(() => import("./components/DummyLCSPreloader.vue"));

// slides
const Algorithms             = defineAsyncComponent(() => import("./slides/algorithms.vue"));
const BasicComponents        = defineAsyncComponent(() => import("./slides/basic-components.vue"));
const BooleanAlgebra         = defineAsyncComponent(() => import("./slides/boolean-algebra.vue"));
const Break1                 = defineAsyncComponent(() => import("./slides/break-1.vue"));
const Break2                 = defineAsyncComponent(() => import("./slides/break-2.vue"));
const CVsAssembly            = defineAsyncComponent(() => import("./slides/c-vs-assembly.vue"));
const EarlyComputers         = defineAsyncComponent(() => import("./slides/early-computers.vue"));
const Epilogue               = defineAsyncComponent(() => import("./slides/epilogue.vue"));
const FreeSoftwareMovement   = defineAsyncComponent(() => import("./slides/free-software-movement.vue"));
const HighLevelPL            = defineAsyncComponent(() => import("./slides/high-level-languages.vue"));
const OperatingSystem        = defineAsyncComponent(() => import("./slides/operating-system.vue"));
const Posix                  = defineAsyncComponent(() => import("./slides/posix.vue"));
const Printf                 = defineAsyncComponent(() => import("./slides/printf.vue"));
const Prologue               = defineAsyncComponent(() => import("./slides/prologue.vue"));
const StackHeap              = defineAsyncComponent(() => import("./slides/stack-heap.vue"));
const TerminalShellEmulator  = defineAsyncComponent(() => import("./slides/terminal-shell-emulator.vue"));
const VonNeumannArchitecture = defineAsyncComponent(() => import("./slides/von-neumann-architecture.vue"));

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

let deck: null | Reveal.Api;

// NOTE: Update this number when more async components
// are introduced.
const CURRENT_ASYNC_MODULES = 17;

watch(component_counter, async () => {
	if (component_counter.value >= CURRENT_ASYNC_MODULES) {
		// NOTE: this .destroy() is just for dev environment
		// coz HMR will increment the counter multiple times
		if (deck) {
			deck.destroy();
		}
		deck = new Reveal({
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
	}
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
		<PLoader />
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

</style>

