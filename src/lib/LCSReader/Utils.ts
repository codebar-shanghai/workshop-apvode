import p5 from "p5";
import {
	GateType,
	ICType,
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

// import images of IC
import SVG_SR_Latch      from "./images/SR_Latch.svg?raw";
import SVG_SR_Latch_Sync from "./images/SR_Latch_Sync.svg?raw";
import SVG_FF_D          from "./images/FF_D.svg?raw";
import SVG_FF_D_MS       from "./images/FF_D_MS.svg?raw";
import SVG_FF_T          from "./images/FF_T.svg?raw";
import SVG_FF_JK         from "./images/FF_JK.svg?raw";

export function fillValue(p: p5, value: boolean) {
	if (value) {
		p.fill(colorGreen[0], colorGreen[1], colorGreen[2]);
	} else {
		p.fill(52, 58, 64);
	}
}

export const colorMouseOver = [0, 0x7B, 0xFF];
export const colorGreen = [54, 247, 32];

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

export const gate_images: Map<GateType, p5.Image> = new Map();
export const ic_images: Map<ICType, p5.Image> = new Map();

// Should be called in p5.preload()
export function LoadImages(p: p5) {
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
		gate_images.set(type, p.loadImage(url, () => URL.revokeObjectURL(url)));
	}

	const ics: { type: ICType, image: string }[] = [
		{ type: ICType.NONE,             image: SVG_SR_Latch },
		{ type: ICType.SR_LATCH_ASYNC,   image: SVG_SR_Latch },
		{ type: ICType.SR_LATCH_SYNC,    image: SVG_SR_Latch_Sync  },
		{ type: ICType.FF_D_SINGLE,      image: SVG_FF_D },
		{ type: ICType.FF_D_MASTERSLAVE, image: SVG_FF_D_MS },
		{ type: ICType.FF_T,             image: SVG_FF_T },
		{ type: ICType.FF_JK,            image: SVG_FF_JK },
	];
	for (const {type, image} of ics) {
		const blob = new Blob([image], { type: "image/svg+xml" });
		const url = URL.createObjectURL(blob);
		ic_images.set(type, p.loadImage(url, () => URL.revokeObjectURL(url)));
	}
}

