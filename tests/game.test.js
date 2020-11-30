const { Game } = require('../src/game');

describe('Game Creation phase', () => {
	const game = new Game();
	it('should print an empty board', () => {
		expect(game.board.print()).toBe('+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+');
	});
});
