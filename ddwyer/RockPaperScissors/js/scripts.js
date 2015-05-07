
var button = document.getElementById("playerRock");
var button = document.getElementById("playerPaper");
var button = document.getElementById("playerScissors");

//this asigns the variables for the buttons

var userChoice;
var compChoice;
var randomNum;

function playerRock() {

	var picture = "<div id='choice'>" + "<img id='pics' class='img-responsive' src='images/Rock.gif'>" + "</div>";

	document.getElementById("playerChoice").innerHTML = picture;

	userChoice = 1; //rock equals 1 here

	randomNumber();
}


function playerPaper() {

	var picture = "<div id='choice'>" + "<img id='pics' class='img-responsive' src='images/Paper.jpg'>" + "</div>";

	document.getElementById("playerChoice").innerHTML = picture;

	userChoice = 2; //paper equals 2 here

	randomNumber();
}


function playerScissors() {

	var picture = "<div id='choice'>" + "<img id='pics' class='img-responsive' src='images/Scissors.JPG'>" + "</div>";

	document.getElementById("playerChoice").innerHTML = picture;

	userChoice = 3; //Scissors equals 3 here

	randomNumber();
}


function randomNumber() {

	randomNum = Math.floor(Math.random()*100)

	computerChoice();

}


function computerChoice() {

	if (randomNum <= 33) {
		compChoice = 1; //computer chooses rock

	} else if (randomNum <= 66) {
		compChoice = 2; //computer chooses paper	

	} else if (randomNum <= 100) {
		compChoice = 3; //computer chooses scissors

	};

	compare();
	}

function compare() {

	if (userChoice === compChoice) {

	} else if (userChoice === 1 && compChoice === 2) {
	
		var picture = "<div id='choice'>" + "<img id='pics' class='img-responsive' src='images/Paper.jpg'>" + "</div>";

		document.getElementById("computerChoice").innerHTML = picture;


	} else if (userChoice === 1 && compChoice === 3) {
		
		var picture = "<div id='choice'>" + "<img id='pics' class='img-responsive' src='images/Scissors.JPG'>" + "</div>";

		document.getElementById("computerChoice").innerHTML = picture;


	} else if (userChoice === 2 && compChoice === 1) {
		
		var picture = "<div id='choice'>" + "<img id='pics' class='img-responsive' src='images/Rock.gif'>" + "</div>";

		document.getElementById("computerChoice").innerHTML = picture;


	} else if (userChoice === 2 && compChoice === 3) {
		
		var picture = "<div id='choice'>" + "<img id='pics' class='img-responsive' src='images/Scissors.JPG'>" + "</div>";

		document.getElementById("computerChoice").innerHTML = picture;


	} else if (userChoice === 3 && compChoice === 1) {
		
		var picture = "<div id='choice'>" + "<img id='pics' class='img-responsive' src='images/Rock.gif'>" + "</div>";

		document.getElementById("computerChoice").innerHTML = picture;


	} else if (userChoice === 3 && compChoice === 2) {
		
		var picture = "<div id='choice'>" + "<img id='pics' class='img-responsive' src='images/Paper.jpg'>" + "</div>";

		document.getElementById("computerChoice").innerHTML = picture;


	};

}