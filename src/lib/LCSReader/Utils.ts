import {
	GateType,
} from "./Enums";

// import images of Gates
import SVG_LogicInput from "./images/LogicInput.svg?raw";
import SVG_NOT        from "./images/NOT.svg?raw";
import SVG_AND        from "./images/AND.svg?raw";
import SVG_NAND       from "./images/NAND.svg?raw";
import SVG_OR         from "./images/OR.svg?raw";
import SVG_NOR        from "./images/NOR.svg?raw";
import SVG_XOR        from "./images/XOR.svg?raw";
import SVG_XNOR       from "./images/XNOR.svg?raw";

export function fillValue(value: boolean) {
	return value
		? "#36f720" // 54, 247, 32
		: "#343A40" // 52, 58, 64
}

export function ConvertGateStringToGateType(str: string): GateType {
	switch (str) {
		case "NOT":  return GateType.NOT;
		case "AND":  return GateType.AND;
		case "NAND": return GateType.NAND;
		case "OR":   return GateType.OR;
		case "NOR":  return GateType.NOR;
		case "XOR":  return GateType.XOR;
		case "XNOR": return GateType.XNOR;
		default:     return GateType.NONE;
	}
}

export const gate_images: Map<GateType, HTMLImageElement> = new Map();

export function LoadImages() {
	const gates: { type: GateType, image: string }[] = [
		{ type: GateType.NONE, image: SVG_LogicInput },
		{ type: GateType.NOT,  image: SVG_NOT },
		{ type: GateType.AND,  image: SVG_AND },
		{ type: GateType.NAND, image: SVG_NAND },
		{ type: GateType.OR,   image: SVG_OR },
		{ type: GateType.NOR,  image: SVG_NOR },
		{ type: GateType.XOR,  image: SVG_XOR },
		{ type: GateType.XNOR, image: SVG_XNOR },
	];
	for (const {type, image} of gates) {
		const blob = new Blob([image], { type: "image/svg+xml" });
		const url = URL.createObjectURL(blob);
		const imgObj = new Image();
		imgObj.onload = () => {
			gate_images.set(type, imgObj);
			URL.revokeObjectURL(url);
		};
		imgObj.src = url;
	}
}

