
var userChoice = 0;
var compChoice = 0;
var randomNum;

var userPoints = 0;
var compPoints = 0;
var drawPoints = 0;

function userRock()
{
	//if the user chooses rock, show the rock pic and then let the computer do its thing
	userChoice = 1;
	console.log("User chose rock!");
	document.getElementById("userPic").src="http://www.mayang.com/textures/Stone/images/Rock%20and%20Objects/solidified_lava_rocks_0506.JPG";
	document.getElementById("userPic").style.backgroundColor = "red";
	randomNumber();


}

function userPaper()
{
	//if the user chooses water, show the water pic and then let the computer do its thing
	userChoice = 2;
	console.log("User chose Paper!");
	document.getElementById("userPic").src="http://www.designboom.com/wp-content/uploads/2013/05/paper-LED-torch-light-designboom03.jpg";
	document.getElementById("userPic").style.backgroundColor = "blue";
	randomNumber();


}

function userScissors()
{
	//if the user chooses grass, show the fire pic and then let the computer do its thing
	userChoice = 3;
	document.getElementById("userPic").src="http://imgs.mikeybeck.com/blender/scissors.jpg";
	document.getElementById("userPic").style.backgroundColor = "green";
	console.log("User chose scissors!");
	randomNumber();


}

function randomNumber()
{
	//generates a random number as the computer choice
	randomNum = Math.floor(Math.random()*100);
	computerChoice();

}

function computerChoice()
{

	if (randomNum <=33)
	{
		//if the number is below 33 the choice is one, which is fire
		compChoice = 1;
		document.getElementById("compPic").src="http://www.mayang.com/textures/Stone/images/Rock%20and%20Objects/solidified_lava_rocks_0506.JPG";
		document.getElementById("compPic").style.backgroundColor = "red";
		compare();
	}
	else if (randomNum <=66)
	{
		//if the number is below 66 the choice is one, which is water
		compChoice = 2;
		document.getElementById("compPic").src="http://www.designboom.com/wp-content/uploads/2013/05/paper-LED-torch-light-designboom03.jpg";
		document.getElementById("compPic").style.backgroundColor = "blue";
		compare();
	}
	else if (randomNum <=100)
	{
		//if the number is below 100 the choice is one, which is grass
		compChoice = 3;
		document.getElementById("compPic").src="http://imgs.mikeybeck.com/blender/scissors.jpg";
		document.getElementById("compPic").style.backgroundColor = "green";
		compare();
	}

}

function compare()
{
	if (userChoice === compChoice)
	{
		console.log("Draw!");
		document.getElementById("tallyText").innerHTML = "It is a draw!";
		drawPoints += 1;
		document.getElementById("drawPointTally").innerHTML = drawPoints.toString();
	}

	else if(userChoice === 1 && compChoice === 3)
	{
		console.log("You win, fire beats grass!");
		document.getElementById("tallyText").innerHTML = "You win, rock beats scissors!";
		userPoints += 1;
		document.getElementById("userPointTally").innerHTML = userPoints.toString();


	}

	else if(userChoice === 2 && compChoice === 3)
	{
		console.log("You lose, grass beats water!");
		document.getElementById("tallyText").innerHTML = "You lose, scissors beats paper!";
		compPoints += 1;
		document.getElementById("compPointTally").innerHTML = compPoints.toString();


	}

	else if(userChoice === 3 && compChoice === 2)
	{
		console.log("You win, grass beats water!");
		document.getElementById("tallyText").innerHTML = "You win, scissors beats paper!";
		userPoints += 1;
		document.getElementById("userPointTally").innerHTML = userPoints.toString();

	}

	else if(userChoice === 3 && compChoice === 1)
	{
		console.log("You lose, fire beats grass!");
		document.getElementById("tallyText").innerHTML = "You lose, Rock beats Scissors!";
		compPoints += 1;
		document.getElementById("compPointTally").innerHTML = compPoints.toString();

	}

	else if(userChoice === 2 && compChoice === 1)
	{
		console.log("You win, water beats fire!");
		document.getElementById("tallyText").innerHTML = "You win, Paper beats Rock!";
		userPoints += 1;
		document.getElementById("userPointTally").innerHTML = userPoints.toString();

	}

	else if(userChoice === 1 && compChoice === 2)
	{
		console.log("You lose, water beats fire!");
		document.getElementById("tallyText").innerHTML = "You Lose, Paper beats Rock!";
		compPoints += 1;
		document.getElementById("compPointTally").innerHTML = compPoints.toString();

	}
	else
	{

		console.log("Undefined!");

	}





}
