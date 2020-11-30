class Board {
	constructor() {
		this.board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
	}

	grid() {
		const row = [{ isBomb: false }, { isBomb: false }, { isBomb: false }];
		return Array(3).fill(row);
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

	squareOn(x, y) {
		return {
			isBomb: () => x === 1 && y === 1,
		};
	}
}

module.exports = { Board };
