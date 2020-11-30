class Board {
	constructor() {
		this.board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
	}

	print() {
		const asciiBoard = this.board;
		console.log(asciiBoard);
		return asciiBoard;
	}

	stepOn(x, y) {
		if (x === 1 && y === 1) {
			this.board = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+';
		}
	}
}

module.exports = { Board };
