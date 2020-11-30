const { Board } = require('../src/board');
const boardStubs = require('./testDoubles/board.stubs');

describe('Board is created as a 3x3 grid of squares', () => {
	const board = new Board();

	it('should be of height 3', () => {
		expect(board.grid().length).toBe(3);
	});

	it('should be of width 3', () => {
		const [row] = board.grid();
		expect(row.length).toBe(3);
	});

	it('should be made of squares', () => {
		const [row] = board.grid();
		const [square] = row;
		expect(typeof square).toBe('object');
	});
});

describe('I can step on a square and reveal it', () => {
	const board = new Board();

	it('should step on square on (1,1)', () => {
		board.stepOn(1, 1);
		expect(board.print()).toBe(boardStubs.bombOn1_1);
	});

	it('should reveal if square (1,1) is a bomb', () => {
		expect(board.squareOn(1, 1).isBomb()).toBe(true);
	});

	it('sould reveal number of bombs around clean square', () => {
		board.stepOn(0, 0);
		expect(board.squareOn(0, 0).reveal()).toBe(3);
	});
});
