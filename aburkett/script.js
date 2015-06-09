//form #1
var form = document.forms.example;

form.addEventListener("submit",question, false);

function question(event) {

	event.preventDefault();

	var site= {

		rating: form.comments.value,

	};

	var text="<p>you left the comment: "+ site.rating + ".</p>";

	document.getElementById("results").innerHTML = text;

}

//rock paper scissors

var userChoice;
var compChoice;
var randomNum;


function playerRock() {

	userChoice = 1;

	randomNumber();
}


function playerPaper() {

	userChoice = 2;


	randomNumber();
}


function playerScissors() {

	userChoice = 3;

	randomNumber();
}

function randomNumber() {
	randomNum = Math.floor(Math.random()*100);

	computerChoice();
}

function computerChoice() {
	if (randomNum <= 33) {
		compChoice = 1;
	} else if (randomNum <= 66) {
		compChoice = 2;
	} else if (randomNum <= 100) {
		compChoice = 3;
	};

	compare();
}


function compare() {

	if (userChoice === compChoice) {
		alert("It is a Tie!");
		alert("Refresh to start again!");

	} else if (userChoice === 1 && compChoice === 2) {
		alert("Paper beats Rock!");
		alert("The Computer Wins!");
		alert("Refresh to start again!");

	} else if (userChoice === 1 && compChoice === 3) {
		alert("Rock beats Scissors!");
		alert("YOU WIN!!!");
		alert("Refresh to start again!");

	} else if (userChoice === 2 && compChoice === 1) {
		alert("Paper beats Rock!");
		alert("YOU WIN!!!");
		alert("Refresh to start again!");

	} else if (userChoice === 2 && compChoice === 3) {
		alert("Scissors beats Paper!");
		alert("The Computer Wins!");
		alert("Refresh to start again!");

	} else if (userChoice === 3 && compChoice === 1) {
		alert("Rock beats Scissors!");
		alert("The Computer Wins!");
		alert("Refresh to start again!");

	} else if (userChoice === 3 && compChoice === 2) {
		alert("Scissors beats Paper!");
		alert("YOU WIN!!!");
		alert("Refresh to start again!");
	}
	//can't figure out how to style the alert boxes
}

//form #2
function myFunction() {
    var x = document.getElementById("myRadio").form.id;
    document.getElementById("demo").innerHTML = x;
}