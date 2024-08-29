import { Gate } from "./Gate";
import Konva from "konva/lib/Core";
import type { Stage } from "konva/lib/Stage";
import type { Layer } from "konva/lib/Layer";
import { Rect } from "konva/lib/shapes/Rect";
import { LogicInput } from "./LogicInput";
import { LogicOutput } from "./LogicOutput";
import { WireManager } from "./Wire";
import { FileManager, LCConfig } from "./FileManager";
import { NodeManager } from "./Node";

export class Simulator {
	logicInput: LogicInput[];
	logicOutput: LogicOutput[];
	gate: Gate[];
	wireMng: WireManager;
	fileManager: FileManager;
	nodeManager: NodeManager;
	_layer: Layer;
	_stage: Stage;

	constructor(el: HTMLDivElement, str: string | LCConfig) {
		this._stage = new Konva.Stage({
			container: el,
			height: el.offsetHeight,
			width: el.offsetWidth,
		});
		this._layer = new Konva.Layer();
		this._stage.add(this._layer);
		const bg = new Rect({
			x: 0,
			y: 0,
			width: el.offsetWidth,
			height: el.offsetHeight,
			fill: "white",
		});
		this._layer.add(bg);

		this.logicInput = [];
		this.logicOutput = [];
		this.gate = [];
		this.nodeManager = new NodeManager();
		this.wireMng = new WireManager(this);
		this.fileManager = new FileManager(this);

		this.loadFile_ex(str);
	}

	loadFile(e: Event) {
		this.fileManager.loadFile(e);
	}

	loadFile_ex(str: string | LCConfig) {
		this.fileManager.loadFile_ex(str);
	}

	destroy() {
		this.wireMng.destroy();
		// @ts-ignore
		this.wireMng = null;
		// @ts-ignore
		this.fileManager = null;

		for (let li of this.logicInput) {
			li.destroy();
		}
		this.logicInput.length = 0;

		for (let g of this.gate) {
			g.destroy();
		}
		this.gate.length = 0;

		for (let lo of this.logicOutput) {
			lo.destroy();
		}
		this.logicOutput.length = 0;

		this._stage.destroy();
	}
}

