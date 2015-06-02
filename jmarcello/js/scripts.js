var userChoice;
var compChoice;
var randomNum;


function playerRock() {

	document.getElementById("player1").src = ("images/rock.jpg");

	userChoice = 1;  //  1 Means that rock will display
	
	randomNumber();

}


function playerPaper() {

	document.getElementById("player1").src = ("images/paper.jpg");

	userChoice = 2;  //  Paper is 2


	randomNumber();

}


function playerScissors() {

	document.getElementById("player1").src = ("images/scissors.jpg");

	userChoice = 3;  //  Scissors is 3

	randomNumber();

}


function randomNumber() {
	randomNum = Math.floor(Math.random()*100);
	computerChoice();
	//This is for the computer to select a random number in order to pick an option
}

function computerChoice() {

	if (randomNum <= 33) {
		compChoice = 1;  // Computer chooses Rock

		document.getElementById("computer1").src = ("images/rock.jpg");

	} else if (randomNum <= 66){

		compChoice = 2;  // Computer chooses Paper

		document.getElementById("computer1").src = ("images/paper.jpg");
	} else if (randomNum <= 100) {

		compChoice = 3;  // Computer chooses Scissors

		document.getElementById("computer1").src = ("images/scissors.jpg");
	};

	compare();
}


function compare() {

	//These compare the choices of player and computer and will then display an image based on the result.

	if (userChoice === compChoice) {
		document.getElementById("resultpic").src = ("images/tie.jpg");

		console.log("Tie Game between Player and Computer");

	} else if (userChoice === 1 && compChoice === 2) {
		document.getElementById("resultpic").src = ("images/loose.jpg");

		console.log("Computer beat Player");

	} else if (userChoice === 1 && compChoice === 3) {
		document.getElementById("resultpic").src = ("images/win.jpg");

		console.log("Player beat Computer");

	} else if (userChoice === 2 && compChoice === 1) {
		document.getElementById("resultpic").src = ("images/win.jpg");

		console.log("Player beat Computer");

	} else if (userChoice === 2 && compChoice === 3) {
		document.getElementById("resultpic").src = ("images/loose.jpg");

		console.log("Computer beat Player");

	} else if (userChoice === 3 && compChoice === 1) {
		document.getElementById("resultpic").src = ("images/loose.jpg");

		console.log("Computer beat Player");

	} else if (userChoice === 3 && compChoice === 2) {
		document.getElementById("resultpic").src = ("images/win.jpg");

		console.log("Player beat Computer");
	}
}




var form = document.forms.ratings;

console.log("Working");

form.addEventListener("submit", displayPerson, false);


function displayPerson(event) {
	
	event.preventDefault();

	var Person = {
		name: form.username.value,
		rate: form.rate.value,
	};


	var l = [];

	var words = "<p> " + Person.name + ", you rated this site a " + Person.rate + ".</p>" ;


	document.getElementById("results").innerHTML = words;

};