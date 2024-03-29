import { Simulator } from ".";
import { InputState } from "./Enums";
import {
	P5Drawable,
	P5MouseOver,
} from "./Interfaces";

export class NodeManager {
	currentID: number;
	nodeList: (Node|undefined)[];

	constructor() {
		this.currentID = 0;
		this.nodeList = [];
	}
}

export class Node implements P5Drawable, P5MouseOver {
	diameter: number;
	value: boolean;
	posX: number;
	posY: number;
	isOutput: boolean;
	hitRange: number;
	inputState: InputState;
	isAlive: boolean;
	brotherNode: Node | null;
	id: number;
	nodeManager: NodeManager;
	simulator: Simulator;

	constructor(simulator: Simulator, posX: number, posY: number, isOutput = false, value = false) {
		this.simulator = simulator;
		this.nodeManager = simulator.nodeManager;
		this.diameter = 10;
		this.value = value;
		this.posX = posX;
		this.posY = posY;
		this.isOutput = isOutput;
		this.hitRange = this.diameter + 10;

		// only once input per node
		this.inputState = InputState.FREE;

		this.isAlive = true; // not destroyed
		this.brotherNode = null; // for short circuit

		this.id = this.nodeManager.currentID++;
		this.nodeManager.nodeList[this.id] = this;
	}

	destroy() {
		this.isAlive = false;
		this.nodeManager.nodeList[this.id] = undefined;
	}

	draw() {
		const p = this.simulator._instance;
		// fillValue(this.value);
		p.stroke(0);
		p.strokeWeight(4);
		p.circle(this.posX, this.posY, this.diameter);

		if (this.isMouseOver()) {
			p.fill(128, 128);
			p.noStroke();
			p.circle(this.posX, this.posY, this.hitRange);
		}
	}

	setID(newID: number) {
		this.nodeManager.nodeList[this.id] = undefined;
		this.id = newID;
		this.nodeManager.nodeList[this.id] = this;

		if (this.id > this.nodeManager.currentID) {
			this.nodeManager.currentID = this.id + 1;
		}
	}

	setInputState(state: InputState) {
		this.inputState = state;
	}

	setBrother(brotherNode: Node) {
		this.brotherNode = brotherNode;
	}

	getBrother() {
		return this.brotherNode;
	}

	getValue() {
		return this.value;
	}

	setValue(value: boolean) {
		this.value = value;
	}

	updatePosition(posX: number, posY: number) {
		this.posX = posX;
		this.posY = posY;
	}

	isMouseOver() {
		const p = this.simulator._instance;
		return p.dist(p.mouseX, p.mouseY, this.posX, this.posY) < this.hitRange / 2;
	}

	mouseClicked() {
		if (this.isMouseOver() && (this.inputState == InputState.FREE || this.isOutput)) {
			// TODO wiremng
			return true;
		}
		return false;
	}
}

