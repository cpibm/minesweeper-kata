const { Board } = require('../src/board');
const boardStubs = require('./testDoubles/board.stubs');

describe('I can step on a square and reveal it', () => {
	const board = new Board();

	it('should step on square on (1,1)', () => {
		board.stepOn(1, 1);
		expect(board.print()).toBe(boardStubs.bombOn1_1);
	});

	it('should reveal if square (1,1) is a bomb', () => {
		expect(board.squareOn(1, 1).isBomb()).toBe(true);
	});
});
