import { Simulator } from ".";
import { InputState } from "./Enums";
import { Circle } from "konva/lib/shapes/Circle";
import { fillValue } from "./Utils";
import { Wire } from "./Wire";

type NodeUpdateCallback = (v: boolean) => void;

export class NodeManager {
	currentID: number;
	nodeList: (Node|undefined)[];

	constructor() {
		this.currentID = 0;
		this.nodeList = [];
	}
}

export class Node {
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
	circle: Circle;

	constructor(simulator: Simulator, posX: number, posY: number, isOutput = false, value = false) {
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

		const layer = simulator._layer;
		this.circle = new Circle({
			x: this.posX,
			y: this.posY,
			fill: fillValue(this.value),
			radius: this.diameter / 2,
			stroke: "black",
			strokeWidth: 4,
		});

		this.circle.on("mouseover", () => {
			this.circle.fill("#80808080");
		});
		this.circle.on("mouseout", () => {
			this.circle.fill(fillValue(this.value));
		});
		layer.add(this.circle);
	}

	destroy() {
		this.isAlive = false;
		this.nodeManager.nodeList[this.id] = undefined;
	}

	draw() {
	}

	set ID(newID: number) {
		this.nodeManager.nodeList[this.id] = undefined;
		this.id = newID;
		this.nodeManager.nodeList[this.id] = this;

		if (this.id > this.nodeManager.currentID) {
			this.nodeManager.currentID = this.id + 1;
		}
	}

	set InputState(state: InputState) {
		this.inputState = state;
	}

	set Brother(brotherNode: Node) {
		this.brotherNode = brotherNode;
	}

	get Brother(): Node|null {
		return this.brotherNode;
	}

	get Value() {
		return this.value;
	}

	set Value(value: boolean) {
		this.value = value;
		this.circle.fill(fillValue(this.value));
		this.circle.stroke(this.value ? fillValue(this.value) : "black");
	}

	updatePosition(posX: number, posY: number) {
		this.posX = posX;
		this.posY = posY;

		this.circle.x(this.posX);
		this.circle.y(this.posY);
	}
}

export class InputNode extends Node {
	private _callback?: NodeUpdateCallback;

	constructor(simulator: Simulator, posX: number, posY: number, value = false, callback?: NodeUpdateCallback) {
		super(simulator, posX, posY, false, value);

		this._callback = callback;
	}

	get Value() {
		return super.Value;
	}

	set Value(value: boolean) {
		super.Value = value;
		if (typeof this._callback === "function") {
			this._callback(this.value);
		}
	}
}

export class OutputNode extends Node {
	private _subscribers: (InputNode|Wire)[];

	constructor(simulator: Simulator, posX: number, posY: number, value = false) {
		super(simulator, posX, posY, true, value);
		this._subscribers = [];
	}

	get Value() {
		return super.Value;
	}

	set Value(value: boolean) {
		super.Value = value;

		for (const n of this._subscribers) {
			n.Value = value;
		}
	}

	subscribe(n: InputNode|Wire) {
		this._subscribers.push(n);
	}

	destroy(): void {
		this._subscribers.length = 0;
	}
}

