export interface P5Drawable {
	draw(): void;
}

export interface P5MouseOver {
	isMouseOver(): boolean;
}

export interface P5MouseClickable {
	mouseReleased(): void;
	mouseClicked(): boolean;
	mousePressed(): void;
}

