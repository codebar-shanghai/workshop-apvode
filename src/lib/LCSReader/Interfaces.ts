export interface ILogicInput {
	value: number;
	posX: number;
	posY: number;
	diameter: number;
	isSpawned: boolean;
	isMoving: boolean;
	offsetMouseX: number;
	offsetMouseY: number;
	nodeStartID: number;
	isSaved: boolean;
}

export interface ILogicOutput {
	value: boolean;
	posX: number;
	posY: number;
	diameter: number;
	isSpawned: boolean;
	isMoving: boolean;
	offsetMouseX: number;
	offsetMouseY: number;
	nodeStartID: number;
	isSaved: boolean;
}

export interface IGate {
	strType: string;
	type: number;
	width: number;
	height: number;
	posX: number;
	posY: number;
	isSpawned: boolean;
	offsetMouseX: number;
	offsetMouseY: number;
	isMoving: boolean;
	isSaved: boolean;
	nodeStartID: number;
}

export interface IWire {
	startID: number;
	endID: number;
	endX: number;
	endY: number;
	width: number;
}

