var playerChoice;

var compChoice;

var randomNum;


function playerRock() { // this will run if rock is clicked. Rock is 1
	playerChoice = 1;

	randomNumber();
}


function playerPaper() { // this will run if paper is clicked. Paper is 2.
	playerChoice = 2;

	randomNumber();
}


function playerScissor() { // this will run if scissor is clicked. Scissor is 3.
	playerChoice = 3;

	randomNumber();
}


function randomNumber() {
	randomNum = Math.floor(Math.random()*100); // //
	
	computerChoice();
}


function computerChoice() { // will have the computer choose its answer between the numbers and the choice its under//

	if (randomNum <= 33) {
		
		compChoice = 1;		//Comp chooses rock
	} else if (randomNum <= 66) {
		
		compChoice = 2;		// Comp chooses paper
	} else if (randomNum <= 100) {
		
		compChoice = 3;		//Comp chooses scissors
	}

	compare();
}

//To make all responses to when whichever button is clicked and deciding who wins.
function compare() {
	if (playerChoice === compChoice) {
		alert("Tie game!");
		alert("Click refresh to try again");

	} else if (playerChoice === 1 && compChoice === 2) {
		alert("Paper beats Rock Computer wins!");

	} else if (playerChoice === 1 && compChoice === 3) {
		alert("Rock beats Scissors You wins!");

	} else if (playerChoice === 2 && compChoice === 1) {
		alert("Paper beats Rock You win!");

	} else if (playerChoice === 2 && compChoice === 3) {
		alert("Scissors beats Paper Computer wins!");

	} else if (playerChoice === 3 && compChoice === 1) {
		alert(" Rock beats Scissors computer wins!")

	} else if (playerChoice === 3 && compChoice === 2) {
		alert("Scissors beats Paper you win!");

	} 

}