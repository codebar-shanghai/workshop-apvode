<script setup lang="ts">
import {
	computed,
	onMounted,
	ref,
} from "vue";
import type {
	Ref,
} from "vue";
import "reveal.js/dist/reveal.css";
import "./styles/reveal-themes.scss";
import Reveal from "reveal.js";

const dark_mode = ref(true);

const theme_name = computed(() => {
	return `reveal-root-theme-${dark_mode.value ? "black" : "white"}`;
});

import Timeline from "./components/Timeline.vue";
import Modal from "./components/Modal.vue";

onMounted(() => {
	const deck = new Reveal({
		hash: false,
	});
	deck.initialize();
});

function toggle_theme() {
	dark_mode.value = !dark_mode.value;
}

type ModalMethods = {
	show: () => void;
};

const timelineModal: Ref<ModalMethods | null> = ref(null);

function open_timeline() {
	timelineModal.value!.show();
}

</script>

<template>
	<div :class="theme_name">
		<div class="bfocm-toolbar">
			<div class="btn" @click="toggle_theme">
				<fa icon="fa-regular fa-lightbulb" />
			</div>
			<div class="btn" @click="open_timeline">
				<fa icon="fa-solid fa-timeline" />
			</div>
		</div>
		<div ref="revealEl" class="reveal">
			<div class="slides">
			</div>
		</div>
		<Modal ref="timelineModal">
			<Timeline />
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
	color: #666;
}

.reveal-root-theme-white .bfocm-toolbar {
	color: #aaa;
}
</style>

