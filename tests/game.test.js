const { Game } = require('../src/game');
const boardStubs = require('./testDoubles/board.stubs');
const gameStubs = require('./testDoubles/game.stubs');

describe('Game Creation phase', () => {
	const game = new Game();
	it('should print an empty board', () => {
		expect(game.board.print()).toBe(boardStubs.empty);
	});
});

describe('Game is Over when stepping on square with a bomb', () => {
	const game = new Game();

	it('should step on clean square (0,0) and continue game', () => {
		expect(game.stepOn(0, 0)).toBe('');
	});
	it('should step on square with bomb on (1,1) and mark game as over', () => {
		expect(game.stepOn(1, 1)).toBe(gameStubs.gameOver);
	});
});
