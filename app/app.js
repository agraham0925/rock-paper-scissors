
const options = ["rock", "paper", "scissors"];

let player1;
let compMove;

let winText = document.createElement("p");
const displayWinner = document.querySelector('.display-winner');


// add time delay count down and display text "rock, paper, scissors, SHOOT!"
	// then displays what comp played and what you played
	// declares winner

function play(player1, compMove) {

	event.preventDefault()
	
	player1 = document.getElementById("userTxt").value;
	compMove = options[Math.floor(options.length * Math.random())];

	const p1 = options.indexOf(player1);
	const p2 = options.indexOf(compMove);


	if(p1 === p2) {

		displayWinner.innerHTML = "It's a draw!"

	} else if(p1 > p2) {
		if (p1 == 2 && p2 == 0) {

			displayWinner.innerHTML = "The computer wins!"
			
		} else {
			
			displayWinner.innerHTML = "You win!"
			
		}
	} else if(p1 == 0 && p2 == 2) {
		
		displayWinner.innerHTML = "You win!"
		
	} else {

		displayWinner.innerHTML = "The computer wins!"
		
	}
};

function playAgain() {
	location.reload();
}


const submitBtn = document.querySelector('.submitBtn');
const playAgainBtn = document.querySelector('.play-again');

submitBtn.addEventListener('click', play);
playAgainBtn.addEventListener('click', playAgain);
