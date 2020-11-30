const { Board } = require('./board');

class Game {
	constructor() {
		this.board = new Board();
	}

	stepOn() {
		return 'BOOM! – Game Over';
	}
}

module.exports = { Game };
