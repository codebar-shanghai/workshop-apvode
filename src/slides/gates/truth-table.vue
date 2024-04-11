<template>
	<table class="text-lg text-center">
		<thead>
			<tr>
				<th>Input A</th>
				<th>Input B</th>
				<th>Output Q</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="row in rows">
				<td>{{row[0]}}</td>
				<td>{{row[1]}}</td>
				<td>{{row[2]}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import {
	defineProps,
	onMounted,
	PropType,
	ref,
	Ref,
} from "vue";

const rows: Ref<[number, number, number][]> = ref([]);

const KNOWN_METHODS = [
	"xor",
	"and",
	"or",
	"nand",
	"nor",
] as const;

type MethodValues = typeof KNOWN_METHODS[number];

const props = defineProps({
	method: {
		type: String as PropType<MethodValues>,
	},
});

onMounted(() => {
	if (rows.value.length == 0) {
		[[0, 0], [1, 0], [0, 1], [1, 1]].forEach(([a, b]) => {
			let q: number = 0;
			switch (props.method) {
				case "xor": q = a ^ b; break;
				case "or" : q = a | b; break;
				case "and": q = a & b; break;
				case "nor": q = !(a | b) ? 1 : 0; break;
				case "nand": q = !(a & b) ? 1 : 0; break;
			}

			rows.value.push([a, b, q]);
		});
	}
});
</script>

