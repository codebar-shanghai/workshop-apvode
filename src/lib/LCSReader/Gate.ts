import p5 from "p5";
import { GateType, MouseAction } from "./Enums";
import {
	ConvertGateStringToGateType,
	colorMouseOver,
	gate_images,
} from "./Utils";
import { Node } from "./Node";
import { currMouseAction } from "./MouseAction";
import { Simulator } from ".";

export class Gate {
	private _p: p5;
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
	input: (Node|undefined)[];
	output: Node|undefined;
	nodeStartID: number;
	private _image: p5.Image;

	constructor(simulator: Simulator, strType: string) {
		this._p = simulator._instance;

		this.strType = strType;
		this.type = ConvertGateStringToGateType(strType);

		this._image = gate_images.get(this.type)!; // TODO
		this.width = this._image.width;
		this.height = this._image.height;

		this.posX = this._p.mouseX - this.width / 2;
		this.posY = this._p.mouseY - this.height / 2;

		this.isSpawned = false;

		this.offsetMouseX = 0;
		this.offsetMouseY = 0;

		this.isMoving = false;

		this.input = [];
		this.input.push(new Node(simulator, this.posX, this.posY + 15));
		if (this.type != GateType.NOT) {
			this.input.push(new Node(simulator, this.posX, this.posY + this.height - 15));
			this.input[0]!.setBrother(this.input[1]!);
			this.input[1]!.setBrother(this.input[0]!);
		}

		this.output = new Node(simulator, this.posX + this.width, this.posY + this.height / 2, true);
		this.nodeStartID = this.input[0]!.id;
	}

	destroy() {
		for (let i = 0; i < this.input.length; i++) {
			this.input[i]?.destroy();
			this.input[i] = undefined;
		}
		this.output?.destroy();
		this.output = undefined;
	}

	draw() {
		if (!this.isSpawned) {
			this.posX = this._p.mouseX - this.width / 2;
			this.posY = this._p.mouseY - this.height / 2;
		}

		if (this.isMoving) {
			this.posX = this._p.mouseX + this.offsetMouseX;
			this.posY = this._p.mouseY + this.offsetMouseY;
		}

		if (this.type == GateType.NOT) {
			this.input[0]!.updatePosition(this.posX, this.posY + this.height / 2);
		} else {
			this.input[0]!.updatePosition(this.posX, this.posY + 15);
			this.input[1]!.updatePosition(this.posX, this.posY + this.height - 15);
		}

		this.output?.updatePosition(this.posX + this.width, this.posY + this.height / 2);

		if (this.isMouseOver()) {
			this._p.noFill();
			this._p.strokeWeight(2);
			this._p.stroke(colorMouseOver[0], colorMouseOver[1], colorMouseOver[2]);
			this._p.rect(this.posX, this.posY, this.width, this.height);
		}

		this._p.image(this._image, this.posX, this.posY);

		for (let i = 0; i < this.input.length; i++) {
			this.input[i]?.draw();
		}

		this.generateOutput();
		this.output?.draw();
	}

	refreshNodes() {
		let currentID = this.nodeStartID;
		this.input[0]?.setID(currentID);
		currentID++;
		if (this.type != GateType.NOT) {
			this.input[1]?.setID(currentID);
			currentID++;
		}
		this.output?.setID(currentID);
	}

	generateOutput() {
		this.output?.setValue(this.calculateValue());
	}

	calculateValue() {
		switch (this.type) {
			case GateType.NOT:  return !this.input[0]!.getValue();
			case GateType.AND:  return this.input[0]!.getValue() && this.input[1]!.getValue();
			case GateType.NAND: return !(this.input[0]!.getValue() && this.input[1]!.getValue());
			case GateType.OR:   return this.input[0]!.getValue() || this.input[1]!.getValue();
			case GateType.NOR:  return !(this.input[0]!.getValue() || this.input[1]!.getValue());
			case GateType.XOR:  return this.input[0]!.getValue() != this.input[1]!.getValue();
			case GateType.XNOR: return this.input[0]!.getValue() == this.input[1]!.getValue();
			default: return false;
		}
	}

	isMouseOver() {
		return this._p.mouseX > this.posX && this._p.mouseX < (this.posX + this.width)
			&& this._p.mouseY > this.posY && this._p.mouseY < (this.posY + this.height);
	}

	mousePressed() {
		if (!this.isSpawned) {
			this.posX = this._p.mouseX - this.width / 2;
			this.posY = this._p.mouseY - this.height / 2;
			this.isSpawned = true;
			return;
		}

		if (this.isMouseOver() || currMouseAction.State == MouseAction.MOVE) {
			this.isMoving = true;
			this.offsetMouseX = this.posX - this._p.mouseX;
			this.offsetMouseY = this.posY - this._p.mouseY;
		}
	}

	mouseReleased() {
		this.isMoving = false;
	}

	mouseClicked() {
		let result = this.isMouseOver();

		for (let i = 0; i < this.input.length; i++) {
			result ||= this.input[i]!.mouseClicked();
		}

		result ||= this.output!.mouseClicked();
		return result;
	}
}

