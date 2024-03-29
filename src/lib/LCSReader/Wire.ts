import p5 from "p5";
import { Node } from "./Node";
import { InputState, MouseAction } from "./Enums";
import { currMouseAction } from "./MouseAction";
import { colorGreen, colorMouseOver } from "./Utils";
import {
	Simulator,
} from "./index";

export class Wire {
	startNode: Node;
	endNode: Node | null;
	startID: number;
	endID: number | null;
	endX: number;
	endY: number;
	width: number;
	private _p: p5;

	constructor(p: p5, startNode: Node) {
		this.startNode = startNode;
		this.endNode = null;

		this.startID = startNode.id;
		this.endID = null;

		this._p = p;
		this.endX = this._p.mouseX;
		this.endY = this._p.mouseY;

		this.width = 8;
	}

	destroy() {
		this.startNode.setInputState(InputState.FREE);

		if (this.endNode == null)
			return;

		this.endNode.setValue(false);
		this.endNode.setInputState(InputState.FREE);
	}

	draw(): boolean {
		this._p.stroke(0);
		this._p.strokeWeight(this.width / 2);

		if (this.endNode == null) {
			if (!this.startNode.isAlive) {
				return false; // destroy the wire
			}

			this._p.line(this.startNode.posX, this.startNode.posY, this._p.mouseX, this._p.mouseY);
		} else if (this.startNode.isAlive && this.endNode.isAlive) {
			this.generateNodeValue();

			this._p.noFill();

			if (this.isMouseOver()) {
				this._p.stroke(colorMouseOver[0], colorMouseOver[1], colorMouseOver[2]);
			} else {
				this._p.stroke(0);
			}

			this._p.line(this.startNode.posX, this.startNode.posY, this.endNode.posX, this.endNode.posY);

			if (this.startNode.getValue() && this.endNode.getValue()) {
				this._p.strokeWeight(1);
				this._p.stroke(colorGreen[0], colorGreen[1], colorGreen[2]);
				this._p.line(this.startNode.posX, this.startNode.posY, this.endNode.posX, this.endNode.posY);
			}
		} else {
			this.endNode.setValue(false);
			return false; // destroy the wire
		}

		return true;
	}

	generateNodeValue() {
		if ((this.startNode.isOutput && this.endNode!.isOutput) ||
			(!this.startNode.isOutput && !this.endNode!.isOutput)) {
			// short circuit
			this.startNode.setValue(this.startNode.getValue() ||
				this.endNode!.getValue());
			this.endNode!.setValue(this.startNode.getValue());
		} else {
			this.endNode?.setValue(this.startNode.getValue());
		}
	}

	isMouseOver(): boolean {
		if (!this.startNode.isAlive || !this.endNode?.isAlive)
			return false;

		const distances = [this.startNode, this.endNode].map(n => this._p.dist(n.posX, n.posY, this._p.mouseX, this._p.mouseY));
		const wireLength = this._p.dist(this.startNode.posX, this.startNode.posY, this.endNode.posX, this.endNode.posY);
		const distance = distances[0] + distances[1];

		return Math.abs(wireLength - distance) <= this.width / (10 * 2);
	}

	getStartNode() {
		return this.startNode;
	}

	updateEnd(endX: number, endY: number) {
		this.endX = endX;
		this.endY = endY;
	}

	setEndNode(endNode: Node) {
		if (endNode.isOutput) {
			let tempNode = this.startNode;
			this.startNode = endNode;
			this.endNode = tempNode;
			this.endNode.setInputState(InputState.TAKEN);
		} else {
			this.endNode = endNode;
			this.startNode.setInputState(InputState.TAKEN);
			this.endNode.setInputState(InputState.TAKEN);
		}

		this.startID = this.startNode.id;
		this.endID = this.endNode.id;
	}
}

export class ShortCircuit {
	firstNode: Node;
	secondNode: Node;
	private inputNode: Node | undefined;
	private _p: p5;

	constructor(simulator: Simulator, startNode: Node, endNode: Node) {
		this.firstNode = startNode;
		this.secondNode = endNode;

		this.inputNode = new Node(simulator, this.firstNode.posX - 10, (this.firstNode.posY + this.secondNode.posY) / 2);

		this.firstNode.setInputState(InputState.TAKEN);
		this.secondNode.setInputState(InputState.TAKEN);

		this._p = simulator._instance;
	}

	destroy() {
		this.inputNode?.destroy();
		this.inputNode = undefined;
	}

	draw(): boolean {
		this._p.stroke(0);
		this._p.strokeWeight(2);
		if (this.firstNode.isAlive && this.secondNode.isAlive) {
			this.drawShortCircuit();
			this.inputNode!.draw();
			this.firstNode.setValue(this.inputNode!.getValue());
			this.secondNode.setValue(this.inputNode!.getValue());
			return true;
		} else {
			this.firstNode.setValue(false);
			this.secondNode.setValue(false);
			return false; // destroy the short circuit
		}
	}

	drawShortCircuit() {
		let posCommonNode = [
			this.firstNode.posX - 15,
			(this.firstNode.posY + this.secondNode.posY) / 2
		];

		this.inputNode?.updatePosition(posCommonNode[0], posCommonNode[1]);

		this._p.line(this.firstNode.posX,  this.firstNode.posY,  posCommonNode[0], this.firstNode.posY);
		this._p.line(this.secondNode.posX, this.secondNode.posY, posCommonNode[0], this.secondNode.posY);
		this._p.line(posCommonNode[0],     this.firstNode.posY,  posCommonNode[0], this.secondNode.posY);
	}

	mouseClicked() {
		this.inputNode?.mouseClicked();
	}
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

	draw() {
		for (let entry of [this.wire, this.shortCircuit]) {
			for (let i = 0; i < entry.length; i++) {
				let result = entry[i].draw();
				if (!result) {
					this.isOpened = false;
					entry[i].destroy();
					entry.splice(i, 1);
				}
			}
		}
	}

	addNode(node: Node) {
		if (!this.isOpened) {
			this.wire.push(new Wire(this.simulator._instance, node));
			this.isOpened = true;
			// #canvas-sim cursor
		} else {
			let idx = this.wire.length - 1;
			if (node != this.wire[idx].getStartNode() &&
				(this.wire[idx].getStartNode().isOutput != node.isOutput ||
					node.getBrother() == this.wire[idx].getStartNode())) {
				if (node == this.wire[idx].getStartNode().getBrother()) {
					this.shortCircuit.push(new ShortCircuit(this.simulator, this.wire[idx].getStartNode(), node));
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

	mouseClicked() {
		if (currMouseAction.State == MouseAction.DELETE) {
			for (let i = 0; i < this.wire.length; i++) {
				if (this.wire[i].isMouseOver()) {
					this.wire[i].destroy();
					this.wire.splice(i, 1);
				}
			}
		}

		for (let i = 0; i < this.shortCircuit.length; i++) {
			this.shortCircuit[i].mouseClicked();
		}
	}
}

