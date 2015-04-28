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
	var playerChoice = options[0];
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
function enemy() {
	var computerChoice = options[ranNum]
	document.getElementById("theirChoice").src = ("images/"computerChoice".png");
}

if computerChoice = "Rock"