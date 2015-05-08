var userChoice;
var compChoice;
var randomNum;
var picture;

function playerRock() {

	userChoice = 1;// 1 is rock
	console.log("user chose rock");
	randomNumber();
}

function playerPaper() {

	userChoice = 2;// 2 is paper
	console.log("user chose paper");
	randomNumber();
}

function playerScissors() {

	userChoice = 3;// 3 is scissors
	console.log("user chose scissors");
	randomNumber();
}

function randomNumber() { // picks a random number bettween 1-100
	randomNum = Math.floor(Math.random()*100);
	
	computerChoice();
}

function computerChoice() {// (1-33 is 1) (34-66 is 2) (67-100 is 3)
	if (randomNum <= 33) {
		var picture = "<div id='Cbox'>" + "<img id='CompPics' src='pic/Rock.jpg' class='img-responsive'>" + "</div>";
		document.getElementById("choice").innerHTML = picture
		compChoice = 1;
	} else if (randomNum <= 66){
		var picture = "<div id='Cbox'>" + "<img id='CompPics' src='pic/paper.jpg' class='img-responsive'>" + "</div>";
		document.getElementById("choice").innerHTML = picture
		compChoice = 2;
	} else if (randomNum <= 100){
		var picture = "<div id='Cbox'>" + "<img id='CompPics' src='pic/scissors.png' class='img-responsive'>" + "</div>";
		document.getElementById("choice").innerHTML = picture
		compChoice = 3;
	};

	compare();
}

function compare() { // this function compares the choices and decides who wins

	if (userChoice === compChoice) {
		alert("Tie! play again");

	} else if (userChoice === 1 && compChoice === 2){
		alert("Comp Wins!");
	} else if (userChoice === 1 && compChoice === 3){
		alert("User Wins!");
	} else if (userChoice === 2 && compChoice === 1){
		alert("User Wins!");
	} else if (userChoice === 2 && compChoice === 3){
		alert("Comp Wins!");
	} else if (userChoice === 3 && compChoice === 1){
		alert("Comp Wins!");
	} else if (userChoice === 3 && compChoice === 2){
		alert("User Wins!");
	}

}
