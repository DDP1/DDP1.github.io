var userChoice;
var compChoice;
var randomNum;
var picture;
var name;

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


var Uname;
var Write;


var form=document.forms.name;
form.addEventListener("submit",cookies,false);

function cookies(event) {

	event.preventDefault();

	var chips = {
		rating: form.graham.value,
	}

	var text = "<p>Gotta catch em all! " + chips.rating +"@</p>";

	document.getElementById("results").innerHTML = text;
}


function check() {
    document.getElementById("Check").checked = true;
    document.getElementById("prob").innerHTML="<p>you are a true Hearther</p>";
}

function uncheck() {
    document.getElementById("Check").checked = false;
    document.getElementById("prob").innerHTML="<p>your a failure</p>";
}

