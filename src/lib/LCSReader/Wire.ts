import { Node, OutputNode } from "./Node";
import { InputState } from "./Enums";
import { fillValue } from "./Utils";
import {
	Simulator,
} from "./index";
import { Line } from "konva/lib/shapes/Line";

export class Wire {
	startNode: Node | null;
	endNode: Node | null;
	startID: number;
	endID: number | null;
	endX: number;
	endY: number;
	width: number;
	simulator: Simulator;
	line!: Line;
	_value!: boolean;
	private _destroyed: boolean;

	constructor(simulator: Simulator, startNode: Node) {
		this.startNode = startNode;
		this.endNode = null;

		this.startID = startNode.id;
		this.endID = null;

		this.simulator = simulator;
		this.endX = 0;
		this.endY = 0;

		this.width = 8;
		this._destroyed = false;
		this.Value = this.startNode.value;
	}

	destroy() {
		if (this._destroyed) return;
		this._destroyed = true;

		this.startNode!.InputState = InputState.FREE;

		if (this.endNode) {
			this.endNode.Value = false;
			this.endNode.InputState = InputState.FREE;
		}

		this.startNode = null;
		this.endNode = null;
	}

	generateNodeValue() {
		if (this._destroyed) return;

		if ((this.startNode!.isOutput && this.endNode!.isOutput) ||
			(!this.startNode!.isOutput && !this.endNode!.isOutput)) {
			// short circuit
			this.startNode!.Value = this.startNode!.Value || this.endNode!.Value;
			this.endNode!.Value = this.startNode!.Value;
		} else {
			if (this.endNode)
				this.endNode.Value = this.startNode!.Value;
		}
	}

	getStartNode() {
		return this.startNode;
	}

	updateEnd(endX: number, endY: number) {
		this.endX = endX;
		this.endY = endY;
	}

	setEndNode(endNode: Node) {
		if (this._destroyed) return;

		if (endNode.isOutput) {
			let tempNode = this.startNode;
			this.startNode = endNode;
			this.endNode = tempNode;
			this.endNode!.InputState = InputState.TAKEN;
		} else {
			this.endNode = endNode;
			this.startNode!.InputState = InputState.TAKEN;
			this.endNode.InputState = InputState.TAKEN;
		}

		this.startID = this.startNode!.id;
		this.endID = this.endNode!.id;
		// update line;
		if (this.line) {
			this.line.points(this._generateLinePoints());
		} else {
			this.line = new Line({
				stroke: "black",
				strokeWidth: this.width / 2,
				points: this._generateLinePoints(),
			});
			this.simulator._layer.add(this.line);
			const output = this.startNode as OutputNode;
			output.subscribe(this.endNode!);
			this.Value = this.startNode!.Value;
			output.subscribe(this);
		}
	}

	get Value() {
		return this._value;
	}

	set Value(v: boolean) {
		this._value = v;
		if (this.line) {
			this.line.stroke(this._value ? fillValue(true) : "black");
		}
	}

	private _generateLinePoints() {
		return [this.startNode?.posX || 0, this.startNode?.posY || 0, this.endNode?.posX || 0, this.endNode?.posY || 0];
	};
}

export class ShortCircuit {
}

export class WireManager {
	wire: Wire[];
	shortCircuit: ShortCircuit[];
	isOpened: boolean;
	private simulator: Simulator;

	constructor(simulator: Simulator) {
		this.wire = [];
		this.shortCircuit = [];
		this.isOpened = false;
		this.simulator = simulator;
	}

	addNode(node: Node) {
		if (!this.isOpened) {
			this.wire.push(new Wire(this.simulator, node));
			this.isOpened = true;
		} else {
			let idx = this.wire.length - 1;
			if (node != this.wire[idx].getStartNode() &&
				(this.wire[idx].getStartNode()?.isOutput != node.isOutput ||
					node.Brother == this.wire[idx].getStartNode())) {
				if (node == this.wire[idx].getStartNode()?.Brother) {
					// TODO: shortCircuit
					this.wire.length--;
				} else {
					this.wire[idx].setEndNode(node);
				}
			} else {
				this.wire.length--;
			}

			this.isOpened = false;
			// #canvas-sim cursor
		}
	}

	destroy() {
		for (let w of this.wire) {
			w.destroy();
		}
		this.wire.length = 0;
		// @ts-ignore only be called when removing
		this.simulator = null;
	}
}

