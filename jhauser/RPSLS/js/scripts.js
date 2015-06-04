//all posible options
var options = ["Rock","Paper","Scissors","Lizard","Spock"];

var ranNum = Math.floor(Math.random()*5);

//alert(options[ranNum]);

var rock = document.getElementById("rockChoice");
var paper = document.getElementById("paperChoice");
var scissors = document.getElementById("scissorsChoice");
var lizard = document.getElementById("lizardChoice");
var spock = document.getElementById("spockChoice");


function changeRock() {
	playerChoice = "Rock";
	document.getElementById("yourChoice").src = ("images/Rock.png");
	document.getElementById("words").innerHTML = "Rock. A strong choice.";
	document.getElementById("advice").innerHTML = "Now click the displayed image to lock in your choice";
}
function changePaper() {
	playerChoice = options[1];
	document.getElementById("yourChoice").src = ("images/Paper.png");
	document.getElementById("words").innerHTML = "Paper? Really?!? Paper is so weak!";
	document.getElementById("advice").innerHTML = "Now click the displayed image to lock in your choice";
}
function changeScissors() {
	playerChoice = options[2];
	document.getElementById("yourChoice").src = ("images/Scissors.png");
	document.getElementById("words").innerHTML = "Don't run with your Scissors now.";
	document.getElementById("advice").innerHTML = "Now click the displayed image to lock in your choice";
}
function changeLizard() {
	playerChoice = options[3];
	document.getElementById("yourChoice").src = ("images/Lizard.png");
	document.getElementById("words").innerHTML = "Wait, is the Lizard poisonous?";
	document.getElementById("advice").innerHTML = "Now click the displayed image to lock in your choice";
}
function changeSpock() {
	playerChoice = options[4];
	document.getElementById("yourChoice").src = ("images/Spock.png");
	document.getElementById("words").innerHTML = "Spock. Rest in peace Leonard Nimoy";
	document.getElementById("advice").innerHTML = "Now click the displayed image to lock in your choice";
}


function runTheGame() {

	var computerChoice = options[ranNum];

	if (computerChoice === "Scissors") {
		document.getElementById("theirChoice").src = ("images/Scissors.png");
	} else if (computerChoice === "Rock"){
		document.getElementById("theirChoice").src = ("images/Rock.png");
	} else if (computerChoice === "Paper"){
		document.getElementById("theirChoice").src = ("images/Paper.png");
	} else if (computerChoice === "Spock"){
		document.getElementById("theirChoice").src = ("images/Spock.png");
	} else if (computerChoice === "Lizard"){
		document.getElementById("theirChoice").src = ("images/Lizard.png");
	}

	if (playerChoice === computerChoice) {
 		document.getElementById("words").innerHTML ="Tie";
 		document.getElementById("advice").innerHTML = "Sorry. Play again?";


 	//Win
 	
} else if (playerChoice === "Scissors" && computerChoice === "Paper"){
		document.getElementById("words").innerHTML = "Scissors cut paper";
		document.getElementById("advice").innerHTML = "YOU WIN!";
	} else if (playerChoice === "Paper" && computerChoice === "Rock"){
		document.getElementById("words").innerHTML = "Paper covers rock";
		document.getElementById("advice").innerHTML = "YOU WIN!";
	} else if (playerChoice === "Rock" && computerChoice === "Lizard"){
		document.getElementById("words").innerHTML = "Rock crushes lizard";
		document.getElementById("advice").innerHTML = "YOU WIN!";
	} else if (playerChoice === "Lizard" && computerChoice === "Spock"){
		document.getElementById("words").innerHTML = "Lizard poisons Spock";
		document.getElementById("advice").innerHTML = "YOU WIN!";
	} else if (playerChoice === "Spock" && computerChoice === "Scissors"){
		document.getElementById("words").innerHTML = "Spock smashes scissors";
		document.getElementById("advice").innerHTML = "YOU WIN!";
	} else if (playerChoice === "Scissors" && computerChoice === "Lizard"){
		document.getElementById("words").innerHTML = "Scissors decapitate lizard";
		document.getElementById("advice").innerHTML = "YOU WIN!";
	} else if (playerChoice === "Lizard" && computerChoice === "Paper"){
		document.getElementById("words").innerHTML = "Lizard eats paper";
		document.getElementById("advice").innerHTML = "YOU WIN!";
	} else if (playerChoice === "Paper" && computerChoice === "Spock"){
		document.getElementById("words").innerHTML = "Paper disproves Spock";
		document.getElementById("advice").innerHTML = "YOU WIN!";
	} else if (playerChoice === "Spock" && computerChoice === "Rock"){
		document.getElementById("words").innerHTML = "Spock vapirizes rock";
		document.getElementById("advice").innerHTML = "YOU WIN!";
	} else if (playerChoice === "Rock" && computerChoice === "Scissors"){
		document.getElementById("words").innerHTML = "Rock crushes scissors";
		document.getElementById("advice").innerHTML = "YOU WIN!";
	
	//Lose

	} else if (computerChoice === "Scissors" && playerChoice === "Paper"){
		document.getElementById("words").innerHTML = "Scissors cut paper";
		document.getElementById("advice").innerHTML = "You lost.";
	} else if (computerChoice === "Paper" && playerChoice === "Rock"){
		document.getElementById("words").innerHTML = "Paper covers rock";
		document.getElementById("advice").innerHTML = "You lost.";
	} else if (computerChoice === "Rock" && playerChoice === "Lizard"){
		document.getElementById("words").innerHTML = "Rock crushes lizard";
		document.getElementById("advice").innerHTML = "You lost.";
	} else if (computerChoice === "Lizard" && playerChoice === "Spock"){
		document.getElementById("words").innerHTML = "Lizard poisons Spock";
		document.getElementById("advice").innerHTML = "You lost.";
	} else if (computerChoice === "Spock" && playerChoice === "Scissors"){
		document.getElementById("words").innerHTML = "Spock smashes scissors";
		document.getElementById("advice").innerHTML = "You lost.";
	} else if (computerChoice === "Scissors" && playerChoice === "Lizard"){
		document.getElementById("words").innerHTML = "Scissors decapitate lizard";
		document.getElementById("advice").innerHTML = "You lost.";
	} else if (computerChoice === "Lizard" && playerChoice === "Paper"){
		document.getElementById("words").innerHTML = "Lizard eats paper";
		document.getElementById("advice").innerHTML = "You lost.";
	} else if (computerChoice === "Paper" && playerChoice === "Spock"){
		document.getElementById("words").innerHTML = "Paper disproves Spock";
		document.getElementById("advice").innerHTML = "You lost.";
	} else if (computerChoice === "Spock" && playerChoice === "Rock"){
		document.getElementById("words").innerHTML = "Spock vapirizes rock";
		document.getElementById("advice").innerHTML = "You lost.";
	} else if (computerChoice === "Rock" && playerChoice === "Scissors"){
		document.getElementById("words").innerHTML = "Rock crushes scissors";
		document.getElementById("advice").innerHTML = "You lost.";
	}
}
