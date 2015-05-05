var userChoice;
var compChoice;
var randomNum;


function playerRock() {

	userChoice = 1;  //  rock means 1 in this case
	
	randomNumber();
}


function playerPaper() {

	userChoice = 2;  //  paper means 2 in this case


	randomNumber();
}


function playerScissors() {

	userChoice = 3;  //  Scissors is 3

	randomNumber();
}


function randomNumber() {
	randomNum = Math.floor(Math.random()*100);
	computerChoice();
	
}

function computerChoice() {

	if (randomNum <= 33) {
		compChoice = 1;  // Computer chooses Rock

	} else if (randomNum <= 66){

		compChoice = 2;  // Computer chooses Paper
	} else if (randomNum <= 100) {

		compChoice = 3;  // Computer chooses Scissors
	};

	compare();
}


function compare() {

	if (userChoice === compChoice) {
		alert("It is a tie!");
		alert("Refresh to start again!");

	} else if (userChoice === 1 && compChoice === 2) {
		alert("computer chooses paper and wins!");

	} else if (userChoice === 1 && compChoice === 3) {
		alert("Rock beats scissors!!! You win!");

	} else if (userChoice === 2 && compChoice === 1) {
		alert("You win!");

	} else if (userChoice === 2 && compChoice === 3) {
		alert("You lose!");

	} else if (userChoice === 3 && compChoice === 1) {
		alert("You Lose!");

	} else if (userChoice === 3 && compChoice === 2) {
		alert("You Win!");
	}
}












