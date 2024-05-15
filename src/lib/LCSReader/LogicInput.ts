import { Node } from "./Node";
import {
	P5Drawable,
	P5MouseOver,
	P5MouseClickable,
} from "./Interfaces";
import { MouseAction } from "./Enums";
import { currMouseAction } from "./MouseAction";
import {
	fillValue,
	colorMouseOver,
} from "./Utils";
import { Simulator } from ".";

export class LogicInput
implements
	P5MouseOver,
	P5Drawable,
	P5MouseClickable {
	value: boolean;
	posX: number;
	posY: number;
	diameter: number;
	isSpawned: boolean;
	isMoving: boolean;
	offsetMouseX: number;
	offsetMouseY: number;
	output: Node | undefined;
	nodeStartID: number;
	simulator: Simulator;

	constructor(simulator: Simulator) {
		this.simulator = simulator;
		this.value = false;
		this.posX = this.simulator._instance.mouseX;
		this.posY = this.simulator._instance.mouseY;
		this.diameter = 25;
		this.isSpawned = false;
		this.isMoving = false;
		this.offsetMouseX = 0;
		this.offsetMouseY = 0;
		this.output = new Node(this.simulator, this.posX + 30, this.posY, true, this.value);
		this.nodeStartID = this.output.id;
	}

	// TODO
	static from(json: any): LogicInput {
		return Object.assign(this, json);
	}

	destroy() {
		this.output?.destroy();
		this.output = undefined;
	}

	draw() {
		const p = this.simulator._instance;
		if (!this.isSpawned) {
			this.posX = p.mouseX;
			this.posY = p.mouseY;
		}

		fillValue(p, this.value);

		if (this.isMoving) {
			this.posX = p.mouseX + this.offsetMouseX;
			this.posY = p.mouseY + this.offsetMouseY;
		}

		if (this.isMouseOver()) {
			p.stroke(colorMouseOver[0], colorMouseOver[1], colorMouseOver[2]);
		} else {
			p.stroke(0);
		}

		p.strokeWeight(4);
		p.line(this.posX, this.posY, this.posX + 30, this.posY);
		p.circle(this.posX, this.posY, this.diameter);

		this.output?.updatePosition(this.posX + 30, this.posY);
		this.output?.setValue(this.value);
		this.output?.draw();

		this.printInfo();

		p.textSize(18);

		const textPosX = this.posX - this.diameter / 4,
			textPosY = this.posY + this.diameter / 4

		if (this.value) {
			p.textStyle(p.BOLD);
			p.text('1', textPosX, textPosY);
		} else {
			p.textStyle(p.NORMAL);
			p.fill(255);
			p.text('0', textPosX, textPosY);
		}
	}

	refreshNodes() {
		if (this.output) {
			this.output.ID = this.nodeStartID;
		}
	}

	printInfo() {
		const p = this.simulator._instance;
		p.noStroke();
		p.fill(0);
		p.textSize(12);
		p.textStyle(p.NORMAL);
		p.text("INPUT", this.posX - 20, this.posY + 25);
	}

	isMouseOver() {
		const p = this.simulator._instance;
		return p.dist(p.mouseX, p.mouseY, this.posX, this.posY) < this.diameter / 2;
	}

	mousePressed() {
		const p = this.simulator._instance;
		if (!this.isSpawned) {
			this.posX = p.mouseX;
			this.posY = p.mouseY;
			this.isSpawned = true;
			// backToEdit
			currMouseAction.State = MouseAction.EDIT;
			return;
		}

		if (this.isMouseOver() || currMouseAction.State == MouseAction.MOVE) {
			this.isMoving = true;
			this.offsetMouseX = this.posX - p.mouseX;
			this.offsetMouseY = this.posY - p.mouseY;
		}
	}

	mouseReleased() {
		this.isMoving = false;
	}

	doubleClicked() {
		if (this.isMouseOver()) {
			this.toggle();
		}
	}

	mouseClicked() {
		if (this.isMouseOver() || this.output?.isMouseOver()) {
			this.toggle();
			this.output?.mouseClicked();
			return true;
		}
		return false;
	}

	toggle() {
		this.value = !this.value;
	}
}

