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
		document.getElementById("computerPick").innerHTML="<p id='uuu'>Rock!</p>";
		document.getElementById("yourmama").innerHTML="<img class='img-responsive center-block' src= 'http://geology.com/articles/petroglyphs/rock-art.jpg' alt='rockPic'>";
	}
	else if (randomC <= 66) {
		enemyChoice = 1;
		document.getElementById("computerPick").innerHTML="<p>Paper!</p>";
		document.getElementById("yourmama").innerHTML="<img class='img-responsive center-block' src= 'http://upload.wikimedia.org/wikipedia/commons/2/23/Roll_of_toilet_paper_with_one_sheet_folded_down_in_front.jpg' alt='paperPic'>";
	}
	else if (randomC <= 100) {
		enemyChoice= 2;
		document.getElementById("computerPick").innerHTML="<p>Scissors!</p>";
		document.getElementById("yourmama").innerHTML="<img class='img-responsive center-block'  src= 'http://cdn.blessthisstuff.com/imagens/stuff/img_pizza_scissors_2.jpg'>";
	}

	compare();
}



var score = 0;
var enemyscore = 0;

function compare() {
if (userChoice === enemyChoice){
	
	document.getElementById("opm8").innerHTML="<p>Much Tie, Many Stalemate, WOW!</p>";
}
else if (userChoice === 0 && enemyChoice === 1){
	
	document.getElementById("opm8").innerHTML="<p>Sad day... You Lose";
	enemyscore++;
	computerScore();
}
else if (userChoice === 0 && enemyChoice === 2){
	
	document.getElementById("opm8").innerHTML="<p>Nice Job! You Win!!!</p>";
	score++;
	updateScore();
}
else if (userChoice === 1 && enemyChoice === 0){
	
	document.getElementById("opm8").innerHTML="<p>Nice Job! You Win!!!</p>";
	score++;
	updateScore();
}
else if (userChoice ===1 && enemyChoice === 2) {
	
	document.getElementById("opm8").innerHTML="<p>Sad Day... You Lose</p>";
	enemyscore++;
	computerScore();
}
else if (userChoice ===2 && enemyChoice === 0) {
	
	document.getElementById("opm8").innerHTML="<p>Sad Day... You Lose</p>";
	enemyscore++;
	computerScore();
}
else if (userChoice ===2 && enemyChoice === 1) {
	
	document.getElementById("opm8").innerHTML="<p>Nice Job!!</p>";
	score++;
	updateScore();
}
function updateScore(){
	document.getElementById("points").innerHTML=score;
}
function computerScore(){
	document.getElementById("enemypoints").innerHTML=enemyscore;
}
}

