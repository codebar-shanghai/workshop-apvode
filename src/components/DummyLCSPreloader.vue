<template></template>

<script setup lang="ts">
import {
	onMounted,
} from "vue";
import {
	LoadImages,
} from "../lib/LCSReader/Utils";

onMounted(() => {
	LoadImages();
});
</script>

