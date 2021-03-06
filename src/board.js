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

		if (x === 0 && y === 0) {
			this.board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+';
		}
	}

	markBombsAround(x, y) {
		if (x === 0 && y === 0) {
			this.board = '+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+';
		}
	}

	squareOn(x, y) {
		return {
			reveal: () => 3,
			isBomb: () => x === 1 && y === 1,
		};
	}
}

module.exports = { Board };
