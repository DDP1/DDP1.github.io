var userChoice;
var enemyChoice;
var randomC;


function playerRock() {
	userChoice = 0;
	randomNumber();
}

function playerPaper() {
	userChoice = 1
	randomNumber();
}

function playerScissors() {
	userChoice = 2;
	randomNumber();
}


function randomNumber() {
	randomC = Math.floor(Math.random()*100);

	workpls();
}



function workpls() {
	
	if ( randomC <=33) {
		enemyChoice = 0;
		document.getElementById("computerPick").innerHTML="<p>Rock!</p>"+"<img src='pictures/rock.png' alt='rockPic'>"
	}
	else if (randomC <= 66) {
		enemyChoice = 1;
		document.getElementById("computerPick").innerHTML="<p>Paper!</p>"+"<img src='pictures/paper.png' alt='paperPic'>"
	}
	else if (randomC <= 100) {
		enemyChoice= 2;
		document.getElementById("computerPick").innerHTML="<p>Scissors!</p>"+"<img src='pictures/scissors.png' alt='scissorskPic'>"
	}

	compare();
}

var player = 0;
var computer = 0;
var tie = 0;

function compare() {
if (userChoice === enemyChoice){
	document.getElementById("opm8").innerHTML="<p>And the winner is no one you guys suck</p>";
	tie++
	updateTie();
}
else if (userChoice === 0 && enemyChoice === 1){
	document.getElementById("opm8").innerHTML="<p>Get good.You are bad at a luck game</p>";
	computer++
	updateComputer()
}
else if (userChoice === 0 && enemyChoice === 2){
	document.getElementById("opm8").innerHTML="<p>What a God. You Win. Now the bm is real. You should stop</p>";
	player++
	updatePlayer()
}
else if (userChoice === 1 && enemyChoice === 0){
	document.getElementById("opm8").innerHTML="<p>What a God. You Win. Now the bm is real. You should stop</p>";
	player++
	updatePlayer()
}
else if (userChoice ===1 && enemyChoice === 2) {
	document.getElementById("opm8").innerHTML="<p>Get good. You are bad at a luck game</p>";
	computer++
	updateComputer()
}
else if (userChoice ===2 && enemyChoice === 0) {
	document.getElementById("opm8").innerHTML="<p>Get good.You are bad at a luck game</p>";
	computer++
	updateComputer
}
else if (userChoice ===2 && enemyChoice === 1) {
	document.getElementById("opm8").innerHTML="<p>What a God. You Win. Now the bm is real you should stop</p>";
}

function updateTie(){
	document.getElementById("lastScore").innerHTML=tie;
}

function updatePlayer() {
	document.getElementById("firstScore").innerHTML=player;
}

function updateComputer() {
	document.getElementById("middleScore").innerHTML=computer;
}
}