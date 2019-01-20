console.log('test')



let player1 = "scissors";
let player2 = "rock";



function play(player1, player2) {

	const options = ["rock", "paper", "scissors"];

	const p1 = options.indexOf(player1);
	const p2 = options.indexOf(player2);

	console.log(p1, " this is p1")
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

