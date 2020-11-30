const { Board } = require('./board');

class Game {
	constructor() {
		this.board = new Board();
	}

	stepOn(x, y) {
		this.board.stepOn(x, y);
		if (this.board.squareOn(x, y).isBomb()) {
			return 'BOOM! – Game Over';
		}
		return '';
	}

	markBombsAround(x, y) {
		this.board.markBombsAround(x, y);
	}
}

module.exports = { Game };
