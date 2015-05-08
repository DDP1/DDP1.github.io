//alert("Choose Rock, Paper, or Scissors.");

var userChoice;

var compChoice;

//-------------------------------User Choice-----------------------------
function playerRock () {
		userChoice = 1; //This means that when the user choses rock, it is equal to 1
		compPick();
	}

function playerPaper () {
	 	userChoice = 2; //Player choses paper
	 	compPick();
	 }

function playerScissors () {
	 	userChoice = 3; //Player choses scissors
	 	compPick();
	 }
//-----------------------------Computer Choice--------------------------------
function compPick () {
	compChoice = Math.random();

	if (compChoice <= .33) {
		compChoice = 1; //1 wil be rock
		document.getElementById("computerResponse").innerHTML = "Rock";
	}

	else if (compChoice <= .66) {
		compChoice = 2; //2 will be paper
		document.getElementById("computerResponse").innerHTML = "Paper";
	}

	else {
		compChoice = 3; //3 will be scissors
		document.getElementById("computerResponse").innerHTML = "Scissors";
	}

	console.log ("Computer:" + compChoice);
}
//---------------------------------------------------------------------------
function compare () {
	if (compChoice === userChoice) {
		alert("It's a tie!");
	}

	else if (compChoice === 1 && userChoice === 2) {
		alert("User wins!");
	}

	else if (compChoice === 1 && userChoice === 3) {
		alert("Computer wins!");
	}

	else if (compChoice === 2 && userChoice === 1) {
		alert("Computer wins!");
	}

	else if (compChoice === 2 && userChoice === 3) {
		alert("User wins!");
	}

	else if (compChoice === 3 && userChoice === 1) {
		alert("User wins!");
	}

	else if (compChoice === 3 && userChoice === 2) {
		alert("Computer wins!");
	}
}
//----------------------------------------------------------------------