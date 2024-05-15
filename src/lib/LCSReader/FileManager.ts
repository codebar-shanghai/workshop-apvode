import {
	Simulator,
} from "./index";

import { LogicInput } from "./LogicInput";
import { LogicOutput } from "./LogicOutput";
import { Gate } from "./Gate";
import {
	IGate,
	ILogicInput,
	ILogicOutput,
} from "./Interfaces";

function is_string(s: any): s is string {
	return typeof s == "string" || s instanceof String;
}

type CommonElement =
	| Gate
	| LogicInput
	| LogicOutput
;

interface ConverterHelperElement<T extends CommonElement> {
	key: string;
	target: T[];
	func: (obj: any) => T;
}

interface LCNodeBase {
	posX: number;
	posY: number;
	isSpawned: boolean;
	isMoving: boolean;
	offsetMouseX: number;
	offsetMouseY: number;
	nodeStartID: number;
	isSaved: boolean;
}

interface LCNode extends LCNodeBase {
	value: number | boolean;
	diameter: number;
}

interface LCGate extends LCNodeBase {
	strType: string;
	type: number;
	width: number;
	height: number;
}

interface LCWire {
	startID: number;
	endID: number;
	endX: number;
	endY: number;
	width: number;
}

export interface LCConfig {
	logicInput: LCNode[];
	logicOutput: LCNode[];
	flipflop: any[];
	logicClock: any[];
	gate: LCGate[];
	srLatch: any[];
	wire: LCWire[];
}

function _convert_json_to_obj<T extends CommonElement>(content: Record<string, any>, element: ConverterHelperElement<T>) {
	if (content != null && element.key in content && Array.isArray(content[element.key])) {
		element.target.length = 0;
		const arr = content[element.key] as any[];

		for (let i = 0; i < arr.length; i++) {
			let objectParsed = arr[i];
			if (objectParsed == undefined)
				break;
			const obj = element.func(objectParsed);
			element.target.push(obj);
			obj.refreshNodes();
		}
	}
}

export class FileManager {
	private simulator: Simulator;

	constructor(simulator: Simulator) {
		this.simulator = simulator;
	}

	loadFile_ex(str: string | LCConfig) {
		try {
			const content = is_string(str) ? JSON.parse(str) : str;

			_convert_json_to_obj(content, {
				key: "logicInput",
				target: this.simulator.logicInput,
				func: (obj: Partial<ILogicInput>): LogicInput => new LogicInput(this.simulator, obj),
			});
			_convert_json_to_obj(content, {
				key: "logicOutput",
				target: this.simulator.logicOutput,
				func: (obj: Partial<ILogicOutput>): LogicOutput => new LogicOutput(this.simulator, obj),
			});
			_convert_json_to_obj(content, {
				key: "gate",
				target: this.simulator.gate,
				func: (obj: Partial<IGate>): Gate => new Gate(this.simulator, obj),
			});

			if ("wire" in content && Array.isArray(content.wire)) {
				const arr = content.wire as any[];
				for (let objectParsed of arr) {
					if (objectParsed == undefined) {
						break;
					}

					this.simulator.wireMng.addNode(this.simulator.nodeManager.nodeList[objectParsed.startID]!);
					this.simulator.wireMng.addNode(this.simulator.nodeManager.nodeList[objectParsed.endID]!);
				}
			}
		} catch (e) {
			console.error(e);
		}
	}

	loadFile(e: Event) {
		const input = e.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			const reader = new FileReader();
			reader.onload = () => {
				const raw = reader.result;
				if (!is_string(raw))
					return;

				this.loadFile_ex(raw as string);
			};
			reader.readAsText(input.files[0]);
		}
	}
}

