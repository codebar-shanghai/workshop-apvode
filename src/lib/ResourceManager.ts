import {
	ref,
} from "vue";

type Callback = () => void;

export const constructors = new Map<string, Callback>();

export const destructors = new Map<string, Callback>();

export function register_resource(cfg: {
	id: string;
	constructor: Callback;
	destructor: Callback;
}) {
	if (constructors.has(cfg.id) || destructors.has(cfg.id)) {
		throw Error("Potential resource leak, ID is duplicated");
	} else {
		constructors.set(cfg.id, cfg.constructor);
		destructors.set(cfg.id, cfg.destructor);
	}
}

export function deregister_resource(id: string) {
	constructors.delete(id);
	destructors.delete(id);
}

export const component_counter = ref(0);
export function component_loaded() {
	component_counter.value++;
}

