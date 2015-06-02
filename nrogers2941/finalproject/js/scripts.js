var userChoice;

var computerChoice;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function playerRock() {
	
	 	userChoice = 1;	 
	 	computerPick();
	 	
}

function playerPaper() {

	 	userChoice = 2;
	 	computerPick();
	 	
	}

function playerScissors() {

		userChoice = 3;
		computerPick();
	}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function computerPick(){

 computerChoice = Math.random();

	if (computerChoice <= .33) {
		computerChoice = 1; //1 equals to rock
	document.getElementById('compResponse').innerHTML = "<a href='#'><img src='http://pwtorch.com/artman2/uploads/1/RockArt_130WK_33.jpg' border=0/></a>";
	}

	else if (computerChoice <=.66) {
		computerChoice = 2; //2 equals to paper
	document.getElementById('compResponse').innerHTML = "<a href='#'><img src='http://cdn.instructables.com/FYQ/EB4W/FJ2W8LRI/FYQEB4WFJ2W8LRI.SQUARE2.jpg' border=0/></a>";
	}

	else {
		computerChoice = 3; //3 equals to scissors
	document.getElementById('compResponse').innerHTML = "<a href='#'><img src='http://ecx.images-amazon.com/images/I/41dyI4%2Bg8LL._SL500_AA130_.jpg' border=0/></a>";
	}

	console.log ("Computer:" + computerChoice)
}

////////////////////////////////////////////////////////////////////////////
function compare () {
	if (computerChoice === userChoice) {
		alert("TIE!");
	}

	else if (computerChoice === 1 && userChoice === 2) {
		alert("You Win!!");
	}

	else if (computerChoice === 1 && userChoice === 3) {
		alert("You Lose");
	}

	else if (computerChoice === 2 && userChoice === 1) {
		alert("You Lose");
	}

	else if (computerChoice === 2 && userChoice === 3) {
		alert("You Win!!");
	}

	else if (computerChoice === 3 && userChoice === 1) {
		alert("You Win!!");
	}

	else if (computerChoice === 3 && userChoice === 2) {
		alert("You Lose!!");
	}

}


//--------------------------------------------------------------------------------------//



