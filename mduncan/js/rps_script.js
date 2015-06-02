var userChoice = 0;
var compChoice = 0;
var randomNum;

var userPoints = 0;
var compPoints = 0;
var drawPoints = 0;

function userFire()
{
	userChoice = 1;
	console.log("User chose Fire!");
	document.getElementById("userPic").src="http://uxrepo.com/static/icon-sets/elusive/svg/fire.svg";
	document.getElementById("userPic").style.backgroundColor = "red";
	randomNumber();


}

function userWater()
{
	userChoice = 2;
	console.log("User chose Water!");
	document.getElementById("userPic").src="http://www.xerces.org/wp-content/uploads/2014/07/icon_14129.png";
	document.getElementById("userPic").style.backgroundColor = "blue";
	randomNumber();


}

function userGrass()
{
	userChoice = 3;
	document.getElementById("userPic").src="http://icons.iconarchive.com/icons/icons8/android/512/Plants-Grass-icon.png";
	document.getElementById("userPic").style.backgroundColor = "green";
	console.log("User chose Grass!");
	randomNumber();


}

function randomNumber()
{
	randomNum = Math.floor(Math.random()*100);
	computerChoice();

}

function computerChoice()
{
	if (randomNum <=33)
	{
		compChoice = 1;
		document.getElementById("compPic").src="http://uxrepo.com/static/icon-sets/elusive/svg/fire.svg";
		document.getElementById("compPic").style.backgroundColor = "red";
		compare();
	}
	else if (randomNum <=66)
	{
		compChoice = 2;
		document.getElementById("compPic").src="http://www.xerces.org/wp-content/uploads/2014/07/icon_14129.png";
		document.getElementById("compPic").style.backgroundColor = "blue";
		compare();
	}
	else if (randomNum <=100)
	{
		compChoice = 3;
		document.getElementById("compPic").src="http://icons.iconarchive.com/icons/icons8/android/512/Plants-Grass-icon.png";
		document.getElementById("compPic").style.backgroundColor = "green";
		compare();
	}

}

function compare()
{
	if (userChoice === compChoice)
	{
		document.getElementById("tallyText").innerHTML = "It is a draw!";
		drawPoints += 1;
		document.getElementById("drawPointTally").innerHTML = drawPoints.toString();
	}

	else if(userChoice === 1 && compChoice === 3)
	{
		document.getElementById("tallyText").innerHTML = "You win, Fire beats Grass!";
		userPoints += 1;
		document.getElementById("userPointTally").innerHTML = userPoints.toString();


	}

	else if(userChoice === 2 && compChoice === 3)
	{
		document.getElementById("tallyText").innerHTML = "You lose, Grass beats Water!";
		compPoints += 1;
		document.getElementById("compPointTally").innerHTML = compPoints.toString();


	}

	else if(userChoice === 3 && compChoice === 2)
	{
		document.getElementById("tallyText").innerHTML = "You win, Grass beats Water!";
		userPoints += 1;
		document.getElementById("userPointTally").innerHTML = userPoints.toString();

	}

	else if(userChoice === 3 && compChoice === 1)
	{
		document.getElementById("tallyText").innerHTML = "You lose, Fire beats Grass!";
		compPoints += 1;
		document.getElementById("compPointTally").innerHTML = compPoints.toString();

	}

	else if(userChoice === 2 && compChoice === 1)
	{
		document.getElementById("tallyText").innerHTML = "You win, Water beats Fire!";
		userPoints += 1;
		document.getElementById("userPointTally").innerHTML = userPoints.toString();

	}

	else if(userChoice === 1 && compChoice === 2)
	{
		document.getElementById("tallyText").innerHTML = "You Lose, Water beats Fire!";
		compPoints += 1;
		document.getElementById("compPointTally").innerHTML = compPoints.toString();

	}





}



