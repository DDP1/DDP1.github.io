var playerChoice;
var botChoice;
var randomNum;

function playerRock() {
	var picture = "<div class='picture'>" + "<img class='pics' class='img-responsive' src='pictures/rock.jpg'>" + "</div>"
	document.getElementById("imgdiv").innerHTML = picture; //Controls the picture that shows after clicking what element you want

	playerChoice = 1; //The choice for rock is defined as one

	randomNumber();
}

function playerPaper() {
	var picture = "<div class='picture'>" + "<img class='pics' class='img-responsive' src='pictures/paper.jpg'>" + "</div>"
	document.getElementById("imgdiv").innerHTML = picture; //Controls the picture that shows after clicking what element you want

	playerChoice = 2; //The choice for paper is defined as two 

	randomNumber();
}

function playerScissors() {
	var picture = "<div class='picture'>" + "<img class='pics' class='img-responsive' src='pictures/scissors.jpg'>" + "</div>"
	document.getElementById("imgdiv").innerHTML = picture; //Controls the picture that shows after clicking what element you want

	playerChoice = 3; //The choice for scissors is defined as three

	randomNumber();
}

function randomNumber() {
	randomNum = Math.floor(Math.random()*100);

	robotChoice();
}

function robotChoice() {

	if (randomNum <= 33) {
		botChoice = 1; // Computer chooses rock
		
		var picture = "<div class='picture'>" + "<img class='pics' class='img-responsive' src='pictures/rock.jpg'>" + "</div>"
		document.getElementById("robotimgdiv").innerHTML = picture; //Controls the picture that shows what the robot chooses after you click what element you want

	} else if (randomNum <= 66) {
		botChoice = 2; // Computer chooses paper

		var picture = "<div class='picture'>" + "<img class='pics' class='img-responsive' src='pictures/paper.jpg'>" + "</div>"
		document.getElementById("robotimgdiv").innerHTML = picture; //Controls the picture that shows what the robot chooses after you click what element you want

	} else if (randomNum <= 100) {
		botChoice = 3; // Computer chooses scissors

		var picture = "<div class='picture'>" + "<img class='pics' class='img-responsive' src='pictures/scissors.jpg'>" + "</div>"
		document.getElementById("robotimgdiv").innerHTML = picture; //Controls the picture that shows what the robot chooses after you click what element you want

	};

	compare();
}

function compare() {

	if (playerChoice === botChoice) { //This function creates different alerts for each situation
		alert("TIE!");
	} else if (playerChoice === 1 && botChoice === 2) {
		alert("The computer chooses paper, they win!");
	} else if (playerChoice === 1 && botChoice === 3) {
		alert("The computer chooses scissors, you win!");
	} else if (playerChoice === 2 && botChoice === 1) {
		alert("The computer chooses rock, you win!");
	} else if (playerChoice === 2 && botChoice === 3) {
		alert("The computer chooses scissors, they win!");
	} else if (playerChoice === 3 && botChoice === 1) {
		alert("The computer chooses rock, they win!");
	} else if (playerChoice === 3 && botChoice === 2) {
		alert("The computer chooses paper, you win!");
	};
}