const bYlen = 10;
const bXlen = 10;
const board = [];

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
	//setting up th board
	for (let i = 0; i < bYlen - 1; i++) {
		board.push([]);
		for (let x = 0; x < bXlen - 1; x++) {
			board[i].push(new Space(i, x));
		}
	}

	//setting players
	var p1Name = prompt("Enter player 1 name");
	var p2Name = prompt("Enter player 2 name");
	var p1 = new Player(p1Name, 1);
	var p2 = new Player(p2Name, 2);
}

// export the game entrypoint
export default startGame;
