import { GateType } from "./Enums";
import {
	ConvertGateStringToGateType,
	gate_images,
} from "./Utils";
import {
	InputNode,
	OutputNode,
} from "./Node";
import { Simulator } from ".";
import { IGate } from "./Interfaces";
import { Image } from "konva/lib/shapes/Image";
import { Text } from "konva/lib/shapes/Text";

export class Gate {
	strType: string;
	type: GateType;
	width: number;
	height: number;
	posX: number;
	posY: number;
	isSpawned: boolean;
	offsetMouseX: number;
	offsetMouseY: number;
	isMoving: boolean;
	input: (InputNode|undefined)[];
	output: OutputNode|undefined;
	nodeStartID: number;
	private _image: HTMLImageElement;
	text: Text;
	image: Image;

	constructor(simulator: Simulator, obj: Partial<IGate> = {}) {
		this.strType = typeof obj.strType == "string" ? obj.strType : "AND";
		this.type = ConvertGateStringToGateType(this.strType);

		if (!gate_images.has(this.type)) {
			const msg = "Images are not intialized";
			throw new Error(msg);
		}

		this._image = gate_images.get(this.type)!;
		this.width = this._image.width;
		this.height = this._image.height;

		this.posX = typeof obj.posX == "number" ? obj.posX : 0;
		this.posY = typeof obj.posY == "number" ? obj.posY : 0;

		this.image = new Image({
			x: this.posX,
			y: this.posY,
			image: this._image,
			width: this.width,
			height: this.height,
		});
		simulator._layer.add(this.image);
		const fontSize = 12;
		this.text = new Text({
			x: this.posX + this.width / 4 + 12,
			y: this.posY + this.height,
			text: this.strType,
			fontSize,
		});
		simulator._layer.add(this.text);

		this.isSpawned = typeof obj.isSpawned == "boolean" ? obj.isSpawned : false;

		this.offsetMouseX = typeof obj.offsetMouseX == "number" ? obj.offsetMouseX : 0;
		this.offsetMouseY = typeof obj.offsetMouseY == "number" ? obj.offsetMouseY : 0;

		this.isMoving = typeof obj.isMoving == "boolean" ? obj.isMoving : false;

		this.input = [];
		this.input.push(new InputNode(simulator, this.posX, this.posY + (this.type == GateType.NOT ? this.height / 2 : 15), false, () => {
			this.generateOutput();
		}));
		if (this.type != GateType.NOT) {
			this.input.push(new InputNode(simulator, this.posX, this.posY + this.height - 15, false, () => {
				this.generateOutput();
			}));
			this.input[0]!.Brother = this.input[1]!;
			this.input[1]!.Brother = this.input[0]!;
		}

		this.output = new OutputNode(simulator, this.posX + this.width, this.posY + this.height / 2);
		this.output.Value = this.calculateValue();
		this.nodeStartID = typeof obj.nodeStartID == "number" ? obj.nodeStartID : this.input[0]!.id;
	}

	destroy() {
		for (let i = 0; i < this.input.length; i++) {
			this.input[i]?.destroy();
			this.input[i] = undefined;
		}
		this.output?.destroy();
		this.output = undefined;
	}

	refreshNodes() {
		let currentID = this.nodeStartID;
		for (let i = 0; i < this.input.length; i++) {
			if (this.input[i] != null) {
				this.input[i]!.ID = currentID;
				currentID++;
			}
		}
		if (this.output)
			this.output.ID = currentID;
	}

	generateOutput() {
		if (this.output) {
			this.output.Value = this.calculateValue();
		}
	}

	calculateValue() {
		switch (this.type) {
			case GateType.NOT:  return !this.input[0]!.Value;
			case GateType.AND:  return this.input[0]!.Value && this.input[1]!.Value;
			case GateType.NAND: return !(this.input[0]!.Value && this.input[1]!.Value);
			case GateType.OR:   return this.input[0]!.Value || this.input[1]!.Value;
			case GateType.NOR:  return !(this.input[0]!.Value || this.input[1]!.Value);
			case GateType.XOR:  return this.input[0]!.Value != this.input[1]!.Value;
			case GateType.XNOR: return this.input[0]!.Value == this.input[1]!.Value;
			default: return false;
		}
	}
}

