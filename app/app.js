
const moves = ["rock", "paper", "scissors"];

let playerMove;
let compMove;

let winText = document.createElement("p");
const displayWinner = document.querySelector('.display-winner');
const displayPlayerMove = document.querySelector('.display-move1');
const displayCompMove = document.querySelector('.display-move2');




// add time delay count down and display text "rock, paper, scissors, SHOOT!"
// add validation to prevent blank play and incorrect input
// sprits/images <-- animated?



function play(playerMove, compMove) {

	event.preventDefault()
	
	playerMove = document.getElementById("userTxt").value;
	compMove = moves[Math.floor(moves.length * Math.random())];

	const p1 = moves.indexOf(playerMove);
	const p2 = moves.indexOf(compMove);

	displayPlayerMove.innerHTML = `Your move: ${moves[p1]}`;

	setTimeout(function(){
		switch (true) {
			case p1 === p2:
				 
					displayWinner.innerHTML = "It's a draw!";
					displayCompMove.innerHTML = `Computer move: ${moves[p2]}`;

				break;

			case p1 == 2 && p2 == 0:
	
					displayWinner.innerHTML = "The computer wins!";
					displayCompMove.innerHTML = `Computer move: ${moves[p2]}`;

				break;

			case p1 == 1 && p2 == 0:
			case p1 == 0 && p2 == 2:
	
					displayWinner.innerHTML = "You win!";
					displayCompMove.innerHTML = `Computer move: ${moves[p2]}`;
				break;

			default:
	
					displayWinner.innerHTML = "The computer wins!";
					displayCompMove.innerHTML = `Computer move: ${moves[p2]}`;
		}
	}, 1000)		

	// if(p1 === p2) {

	// 	displayWinner.innerHTML = "It's a draw!"
	// 	displayPlayerMove.innerHTML = `Your move: ${moves[p1]}`
	// 	displayCompMove.innerHTML = `Computer move: ${moves[p2]}`

	// } else if(p1 > p2) {
		// if (p1 == 2 && p2 == 0) {

		// 	displayWinner.innerHTML = "The computer wins!"
		// 	displayPlayerMove.innerHTML = `Your move: ${moves[p1]}`
		// 	displayCompMove.innerHTML = `Computer move: ${moves[p2]}`
			
		// } else {
			
	// 		displayWinner.innerHTML = "You win!"
	// 		displayPlayerMove.innerHTML = `Your move: ${moves[p1]}`
	// 		displayCompMove.innerHTML = `Computer move: ${moves[p2]}`
		
	// 	}
	// } else if(p1 == 0 && p2 == 2) {
		
	// 	displayWinner.innerHTML = "You win!"
	// 	displayPlayerMove.innerHTML = `Your move: ${moves[p1]}`
	// 	displayCompMove.innerHTML = `Computer move: ${moves[p2]}`
		
	// } else {

	// 	displayWinner.innerHTML = "The computer wins!"
	// 	displayPlayerMove.innerHTML = `Your move: ${moves[p1]}`
	// 	displayCompMove.innerHTML = `Computer move: ${moves[p2]}`
		
	// }
};

function playAgain() {
	location.reload();
}


const submitBtn = document.querySelector('.submitBtn');
const playAgainBtn = document.querySelector('.play-again');

submitBtn.addEventListener('click', play);
playAgainBtn.addEventListener('click', playAgain);
