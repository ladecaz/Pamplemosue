var bYlen = 10;
var bXlen = 10;
var board = [];

class Space {
	constructor(y, x) {
		this.occ = false;
		this.yLoc = y;
		this.xLoc = x;
		this.on = null;
	}
	fill(piece) {
		this.on = piece;
		this.occ = true;
	}
};

class Piece {
	constructor(name, team) {
		this.name = name;
		this.team = team;
	}
};

function startGame() {
	for (i = 0; i < bYlen - 1; i++) {
		board.push([]);
		for (x = 0; x < bXlen - 1; x++) {
			board[i].push(new Space(i, x));
		}
	}
}

startGame();
