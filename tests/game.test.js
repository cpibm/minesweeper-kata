const { Game } = require('../src/game');
const boardStubs = require('./testDoubles/board.stubs');

describe('Game Creation phase', () => {
	const game = new Game();
	it('should print an empty board', () => {
		expect(game.board.print()).toBe(boardStubs.empty);
	});
});
