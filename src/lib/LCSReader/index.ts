import p5 from "p5";
import { Gate } from "./Gate";
import { LogicInput } from "./LogicInput";
import { LogicOutput } from "./LogicOutput";
import { WireManager } from "./Wire";
import { LoadImages } from "./Utils";
import { MouseAction } from "./Enums";
import { FileManager, LCConfig } from "./FileManager";
import { NodeManager } from "./Node";

interface MouseActionState {
	State: MouseAction;
};

export class Simulator {
	logicInput: LogicInput[];
	logicOutput: LogicOutput[];
	gate: Gate[];
	root: HTMLElement | null;
	currMouseAction: MouseActionState;
	readonly _instance: p5;
	wireMng: WireManager;
	fileManager: FileManager;
	nodeManager: NodeManager;

	constructor(el: HTMLElement, str: string | LCConfig) {
		this.logicInput = [];
		this.logicOutput = [];
		this.gate = [];
		this.currMouseAction = {
			State: MouseAction.EDIT,
		};
		this.nodeManager = new NodeManager();
		const self = this;

		const sketch = function(p: p5) {
			p.preload = function() {
				LoadImages(p);
			};

			p.setup = function() {
				p.createCanvas(el.offsetWidth, el.offsetHeight, p.P2D);
				self.loadFile_ex(str);
			};

			p.windowResized = function() {
				p.resizeCanvas(el.offsetWidth, el.offsetHeight);
			};

			p.draw = function() {
				p.background(0xFF);
				//p.stroke(0);
				//p.strokeWeight(4);
				p.fill(0xFF);
				p.rect(0, 0, p.width, p.height);

				self.wireMng.draw();

				for (let x of self.gate) {
					x.draw();
				}

				for (let x of self.logicInput) {
					x.draw();
				}

				for (let x of self.logicOutput) {
					x.draw();
				}
			};

			p.mousePressed = function() {
				for (let g of self.gate) {
					g.mousePressed();
				}

				for (let i of self.logicInput) {
					i.mousePressed();
				}

				for (let o of self.logicOutput) {
					o.mousePressed();
				}
			};

			p.mouseReleased = function() {
				for (let g of self.gate) {
					g.mouseReleased();
				}

				for (let i of self.logicInput) {
					i.mouseReleased();
				}

				for (let o of self.logicOutput) {
					o.mouseReleased();
				}
			};

			p.mouseClicked = function() {
				if (self.currMouseAction.State == MouseAction.EDIT) {
					for (let g of self.gate) {
						g.mouseClicked();
					}
					for (let i of self.logicInput) {
						i.mouseClicked();
					}
					for (let o of self.logicOutput) {
						o.mouseClicked();
					}
				} else if (self.currMouseAction.State == MouseAction.DELETE) {
					for (let i = 0; i < self.gate.length; i++) {
						if (self.gate[i].mouseClicked()) {
							const g = self.gate[i];
							self.gate.splice(i--, 1);
							g.destroy();
						}
					}

					for (let i = 0; i < self.logicInput.length; i++) {
						if (self.logicInput[i].mouseClicked()) {
							const input = self.logicInput[i];
							self.logicInput.splice(i--, 1);
							input.destroy();
						}
					}

					for (let i = 0; i < self.logicOutput.length; i++) {
						if (self.logicOutput[i].mouseClicked()) {
							const output = self.logicOutput[i];
							self.logicOutput.splice(i--, 1);
							output.destroy();
						}
					}
				}
				self.wireMng.mouseClicked();
			};
		};

		this.root = el;
		this._instance = new p5(sketch, this.root);
		this.wireMng = new WireManager(this);
		this.fileManager = new FileManager(this);
	}

	loadFile(e: Event) {
		this.fileManager.loadFile(e);
	}

	loadFile_ex(str: string | LCConfig) {
		this.fileManager.loadFile_ex(str);
	}

	destroy() {
		this._instance.remove();
		this.root = null;
	}
}

