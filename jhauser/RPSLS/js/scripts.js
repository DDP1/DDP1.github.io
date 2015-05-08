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
	var playerChoice = "Rock";
	document.getElementById("yourChoice").src = ("images/Rock.png");
}
function changePaper() {
	var playerChoice = options[1];
	document.getElementById("yourChoice").src = ("images/Paper.png");
}
function changeScissors() {
	var playerChoice = options[2];
	document.getElementById("yourChoice").src = ("images/Scissors.png");
}
function changeLizard() {
	var playerChoice = options[3];
	document.getElementById("yourChoice").src = ("images/Lizard.png");
}
function changeSpock() {
	var playerChoice = options[4];
	document.getElementById("yourChoice").src = ("images/Spock.png");
}


function runTheGame() {
	var computerChoice = options[ranNum];

	if (playerChoice === computerChoice) {
 		alert("Tie")

 	//Win
 	
	} else if (playerChoice === "Scissors" && computerChoice === "Paper"){
		alert("Scissors cut paper");
	} else if (playerChoice === "Paper" && computerChoice === "Rock"){
		alert("Paper covers rock");
	} else if (playerChoice === "Rock" && computerChoice === "Lizard"){
		alert("Rock crushes lizard");
	} else if (playerChoice === "Lizard" && computerChoice === "Spock"){
		alert("Lizard poisons Spock");
	} else if (playerChoice === "Spock" && computerChoice === "Scissors"){
		alert("Spock smashes scissors");
	} else if (playerChoice === "Scissors" && computerChoice === "Lizard"){
		alert("Scissors decapitate lizard");
	} else if (playerChoice === "Lizard" && computerChoice === "Paper"){
		alert("Lizard eats paper");
	} else if (playerChoice === "Paper" && computerChoice === "Spock"){
		alert("Paper disproves Spock");
	} else if (playerChoice === "Spock" && computerChoice === "Rock"){
		alert("Spock vapirizes rock");
	} else if (playerChoice === "Rock" && computerChoice === "Scissors"){
		alert("Rock crushes scissors");
	
	//Lose

	} else if (computerChoice === "Scissors" && playerChoice === "Paper"){
		alert("Scissors cut paper");
	} else if (computerChoice === "Paper" && playerChoice === "Rock"){
		alert("Paper covers rock");
	} else if (computerChoice === "Rock" && playerChoice === "Lizard"){
		alert("Rock crushes lizard");
	} else if (computerChoice === "Lizard" && playerChoice === "Spock"){
		alert("Lizard poisons Spock");
	} else if (computerChoice === "Spock" && playerChoice === "Scissors"){
		alert("Spock smashes scissors");
	} else if (computerChoice === "Scissors" && playerChoice === "Lizard"){
		alert("Scissors decapitate lizard");
	} else if (computerChoice === "Lizard" && playerChoice === "Paper"){
		alert("Lizard eats paper");
	} else if (computerChoice === "Paper" && playerChoice === "Spock"){
		alert("Paper disproves Spock");
	} else if (computerChoice === "Spock" && playerChoice === "Rock"){
		alert("Spock vapirizes rock");
	} else if (computerChoice === "Rock" && playerChoice === "Scissors"){
		alert("Rock crushes scissors");
	}
}
