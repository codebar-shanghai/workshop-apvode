import Konva from "konva/lib/Core";
import type { Stage } from "konva/lib/Stage";
import type { Layer } from "konva/lib/Layer";
import { Line } from "konva/lib/shapes/Line";
import { Rect } from "konva/lib/shapes/Rect";
import { Text } from "konva/lib/shapes/Text";

type Point = [number, number];
type LineDef = [Point, Point];

function TRANSFORM(x:number, y:number, w:number, h:number): Point {
	return [
		0.1 * w + x * 0.8 * w,
		h - 0.1 * h - h * 0.8 * y
	];
};

export interface KonvaChart {
	stage: Stage;
	line: (pts: Point[]) => void;
}

function add_line(layer: Layer, pts: Point[], w:number, h:number) {
	const points: number[] = [];
	for (const [x, y] of pts) {
		points.push(...TRANSFORM(x, y, w, h));
	}
	layer.add(new Line({
		points,
		stroke: "blue",
		strokeWidth: 2,
	}));
};

export function create_chart(el: HTMLDivElement): KonvaChart {
	const height = el.offsetHeight;
	const width = el.offsetWidth;

	const _stage = new Konva.Stage({
		container: el,
		height,
		width,
	});

	const _layer = new Konva.Layer();
	_stage.add(_layer);
	_layer.add(new Rect({
		x: 0,
		y: 0,
		height,
		width,
		fill: "#eee",
	}));

	const grid: LineDef[] = [
		[[0.1, 0.1], [0.9, 0.1]],
		[[0.1, 0.26], [0.9, 0.26]],
		[[0.1, 0.42], [0.9, 0.42]],
		[[0.1, 0.58], [0.9, 0.58]],
		[[0.1, 0.74], [0.9, 0.74]],

		[[0.26, 0.1], [0.26, 0.9]],
		[[0.42, 0.1], [0.42, 0.9]],
		[[0.58, 0.1], [0.58, 0.9]],
		[[0.74, 0.1], [0.74, 0.9]],
		[[0.9, 0.1], [0.9, 0.9]],
	];

	const axis: LineDef[] = [
		[[0.1, 0.9], [0.9, 0.9]],
		[[0.1, 0.9], [0.1, 0.1]],
	];

	for (let [s, e] of grid) {
		const points = [s[0] * width, s[1] * height, e[0] * width, e[1] * height];
		_layer.add(new Line({
			points,
			strokeWidth: 1,
			stroke: "#ccc",
		}));
	}

	for (let [s, e] of axis) {
		const points = [s[0] * width, s[1] * height, e[0] * width, e[1] * height];
		_layer.add(new Line({
			points,
			strokeWidth: 1,
			stroke: "#666",
		}));
	}

	_layer.add(new Text({
		text: "t",
		x: 0.9 * width + 8,
		y: 0.9 * height - 8,
		fontSize: 16,
		fontStyle: "italic",
	}));
	_layer.add(new Text({
		text: "V",
		x: 0.1 * width - 6,
		y: 0.1 * height - 20,
		fontSize: 16,
		fontStyle: "italic",
	}));

	for (let i = 0; i < 6; i++) {
		_layer.add(new Text({
			text: i.toString(),
			x: 0.1 * width + i * 0.16 * width - 4,
			y: 0.9 * height + 8,
			fontSize: 16,
			fill: "#555",
		}));
	}
	for (let i = 0; i < 6; i++) {
		_layer.add(new Text({
			text: i.toString(),
			x: 0.1 * width - 20,
			y: 0.9 * height - i * 0.16 * height - 8,
			fontSize: 16,
			fill: "#555",
		}));
	}

	return {
		stage: _stage,
		line: (pts: Point[]) => {
			add_line(_layer, pts, width, height);
		},
	};
}

