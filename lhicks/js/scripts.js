var rock=0;//constants in beginning; rock is 0
var paper=1;//paper is 1
var scissors=2;//scissors is 2
var playerChoice=0;//player's current option
var compChoice=0;//computer's current option
var playerScore=0;//player's current score
var compScore=0;//computer's current score
var tieScore=0;//amount of times computer and human have made the same choice
function playerRock()//executes when player chooses rock
{
	playerChoice=rock;//set player score to "rock", numerically 0.
	compGen();//evaluate the computer's score
}
function playerPaper()//executes when player chooses paper
{
	playerChoice=paper;//set to paper:1
	compGen();//evaluate the computer's score
}
function playerScissors()//executes when player chooses scissors
{
	playerChoice=scissors;//set to scissors:2
	compGen();//evaluate the computer's score
}
function compGen()//executes after each choice by the player
{
	compChoice=Math.floor(Math.random()*3);//choose random value for computer
	evalScore();//look at choices of each and compare
	//print the scores to a paragraph in the HTML
	document.getElementById("winner").innerHTML="Computer: "+compScore+"<br>Player: " +playerScore+ "<br>Tie: "+tieScore;
	switch(compChoice)
	{
		case rock:
			document.getElementById("enemyChoice").innerHTML='<img src="img/rock.jpg" class="img-responsive">';
			document.getElementById("enemyChoiceTxt").innerHTML="Computer chooses rock!";
		break;
		case paper:
			document.getElementById("enemyChoice").innerHTML='<img src="img/paper.jpg" class="img-responsive">';
			document.getElementById("enemyChoiceTxt").innerHTML="Computer chooses paper!";
		break;
		case scissors:
			document.getElementById("enemyChoice").innerHTML='<img src="img/scissors.jpg" class="img-responsive"">';
			document.getElementById("enemyChoiceTxt").innerHTML="Computer chooses scissors!";
		break;
	}
}
function evalScore()//executes at end of match
{
	//evaluate scores through series of if...else if statements
	if(compChoice==rock&&playerChoice==paper)
	{
		playerScore++;
	}
	else if(compChoice==rock&&playerChoice==scissors)
	{
		compScore++;
	}
	else if(compChoice==paper&&playerChoice==rock)
	{
		compScore++;
	}
	else if(compChoice==paper&&playerChoice==scissors)
	{
		playerScore++;
	}
	else if(compChoice==scissors&&playerChoice==rock)
	{
		playerScore++;
	}
	else if(compChoice==scissors&&playerChoice==paper)
	{
		compScore++;
	}
	else if(compChoice==playerChoice)
	{
		tieScore++;
	}
}
