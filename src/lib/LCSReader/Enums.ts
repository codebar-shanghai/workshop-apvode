export enum MouseAction {
	EDIT,
	MOVE,
	DELETE,
}

export enum GateType {
	/** for testing usage */
	NONE,
	NOT,
	AND,
	NAND,
	OR,
	NOR,
	XOR,
	XNOR,
}

export enum ICType {
	/** for testing usage */
	NONE,
	SR_LATCH_ASYNC,
	SR_LATCH_SYNC,
	FF_D_SINGLE,
	FF_D_MASTERSLAVE,
	FF_T,
	FF_JK,
}

export enum ElementType {
	/** for testing usage */
	NONE,
	LOGIC_GATE,
	FLIP_FLOP,
	LOGIC_INPUT,
	LOGIC_OUTPUT,
}

export enum SyncType {
	ASYNC,
	SYNC,
}

export enum InputState {
	FREE,
	TAKEN,
}

