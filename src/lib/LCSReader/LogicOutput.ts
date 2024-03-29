import { Node } from "./Node";
import {
	P5Drawable,
} from "./Interfaces";
import {
	colorMouseOver,
	fillValue,
} from "./Utils";
import { currMouseAction } from "./MouseAction";
import { MouseAction } from "./Enums";
import { Simulator } from ".";

export class LogicOutput
implements
	P5Drawable {
	value: boolean;
	posX: number;
	posY: number;
	diameter: number;
	isSpawned: boolean;
	isMoving: boolean;
	offsetMouseX: number;
	offsetMouseY: number;
	input: Node | undefined;
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
		this.input = new Node(this.simulator, this.posX - 30, this.posY, false, this.value);
		this.nodeStartID = this.input.id;
	}

	destroy() {
		this.input?.destroy();
		this.input = undefined;
	}

	draw() {
		const p = this.simulator._instance;

		if (!this.isSpawned) {
			this.posX = p.mouseX;
			this.posY = p.mouseY;
		}

		if (this.isMoving) {
			this.posX = p.mouseX + this.offsetMouseX;
			this.posY = p.mouseY + this.offsetMouseY;
		}

		this.input?.updatePosition(this.posX - 30, this.posY);

		this.value = this.input?.getValue() || false;

		fillValue(p, this.value);

		if (this.isMouseOver()) {
			p.stroke(colorMouseOver[0], colorMouseOver[1], colorMouseOver[2]);
		} else {
			p.stroke(0);
		}

		p.strokeWeight(4);
		p.line(this.posX, this.posY, this.posX - 30, this.posY);
		p.circle(this.posX, this.posY, this.diameter);

		this.input?.draw();

		p.noStroke();
		p.fill(0);
		p.textSize(12);
		p.textStyle(p.NORMAL);
		p.text('OUTPUT', this.posX - 20, this.posY + 25);

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
		this.input?.setID(this.nodeStartID);
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

	mouseClicked() {
		if (this.isMouseOver() || this.input?.isMouseOver()) {
			this.input?.mouseClicked();
			return true;
		}
		return false;
	}
}

