import { OutputNode } from "./Node";
import {
	ILogicInput,
} from "./Interfaces";
import {
	fillValue,
} from "./Utils";
import { Simulator } from ".";
import { Text   } from "konva/lib/shapes/Text";
import { Circle } from "konva/lib/shapes/Circle";
import { Line   } from "konva/lib/shapes/Line";

export class LogicInput {
	value: boolean;
	posX: number;
	posY: number;
	diameter: number;
	isSpawned: boolean;
	isMoving: boolean;
	offsetMouseX: number;
	offsetMouseY: number;
	output: OutputNode | undefined;
	nodeStartID: number;

	// Konva elements
	circle: Circle;
	line: Line;
	txt_value: Text;
	txt_label: Text;

	constructor(simulator: Simulator, obj: Partial<ILogicInput> = {}) {

		this.value = obj.value == 1 || false;

		this.posX = typeof obj.posX == "number" ? obj.posX : 0;
		this.posY = typeof obj.posY == "number" ? obj.posY : 0;

		this.diameter = typeof obj.diameter == "number" ? obj.diameter : 25;
		this.isSpawned = typeof obj.isSpawned == "boolean" ? obj.isSpawned : false;
		this.isMoving = obj.isMoving || false;

		this.offsetMouseX = typeof obj.offsetMouseX == "number" ? obj.offsetMouseX : 0;
		this.offsetMouseY = typeof obj.offsetMouseY == "number" ? obj.offsetMouseY : 0;

		this.output = new OutputNode(simulator, this.posX + 30, this.posY, this.value);
		this.nodeStartID = typeof obj.nodeStartID == "number" ? obj.nodeStartID : this.output.id;

		const layer = simulator._layer;
		this.circle = new Circle({
			x: this.posX,
			y: this.posY,
			radius: this.diameter / 2,
			fill: fillValue(this.value),
			stroke: "black",
			strokeWidth: 4,
		});
		this.circle.on("click", () => {
			this.toggle();
		});
		layer.add(this.circle);

		this.line = new Line({
			points: this._generateLinePoints(),
			strokeWidth: 4,
			stroke: "black",
		});
		layer.add(this.line);

		// text
		const txt_label_pos = this.TextLabelPos;
		this.txt_label = new Text({
			x: txt_label_pos.x,
			y: txt_label_pos.y,
			text: "INPUT",
			fontSize: 12,
		});
		layer.add(this.txt_label);

		const txt_value_pos = this.TextValuePos;
		this.txt_value = new Text({
			x: txt_value_pos.x,
			y: txt_value_pos.y,
			text: this.value ? "1" : "0",
			fontSize: 18,
			fontStyle: this.value ? "bold" : "normal",
			fill: this.value ? "black" : "white",
		});
		this.txt_value.on("click", () => {
			this.toggle();
		});
		layer.add(this.txt_value);
	}

	destroy() {
		this.output?.destroy();
		this.output = undefined;
	}

	refreshNodes() {
		if (this.output) {
			this.output.ID = this.nodeStartID;
		}
	}

	get TextValuePos() {
		return {
			x: this.posX - this.diameter / 4,
			y: this.posY - this.diameter / 4,
		};
	}

	get TextLabelPos() {
		return {
			x: this.posX - 20,
			y: this.posY + this.diameter,
		};
	}

	private _generateLinePoints() {
		return [this.posX + this.diameter / 2, this.posY, this.posX + 30 - (this.output?.diameter || 0) / 2, this.posY];
	}

	toggle() {
		this.value = !this.value;
		this.circle.fill(fillValue(this.value));
		this.line.stroke(this.value ? fillValue(this.value) : "black");
		// update output
		if (this.output) {
			this.output.Value = this.value;
		}
		// update text
		if (this.value) {
			this.txt_value.text("1");
			this.txt_value.fontStyle("bold");
			this.txt_value.fill("black");
		} else {
			this.txt_value.text("0");
			this.txt_value.fontStyle("normal");
			this.txt_value.fill("white");
		}
	}
}

