console.log('test')

const options = ["rock", "paper", "scissors"];

let player1 = "scissors";
let compMove;


// need to add computer functionality to randomly select an option
// function should be called on a click and display winner
// add time delay count down and display text "rock, paper, scissors, SHOOT!"
	// then displays what comp played and what you played
	// declares winner

function play(player1, compMove) {

	compMove = options[Math.floor(options.length * Math.random())];

	const p1 = options.indexOf(player1);
	const p2 = options.indexOf(compMove);

	console.log(p1, " this is p1")
	console.log(compMove, " this is compMove")
	console.log(p2, " this is p2")

	if(p1 === p2) {
		return "draw!";
	} else if(p1 > p2) {
		if (p1 == 2 && p2 == 0) {
			return "player 2 wins!";
		} else {
			return "player 1 wins!";
		}
	} else if(p1 == 0 && p2 == 2) {
		return "player 1 wins!";
	} else {
		return "player 2 wins!";
	}
};

