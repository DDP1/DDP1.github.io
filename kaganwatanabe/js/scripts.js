var userChoice=0;
var compChoice=0;
var randomNum=0;
var compPoints=0;
var userPoints=0;
function playerRock(){
	userChoice = 1;	
	randomNumber();
}
function playerPaper(){
	userChoice = 2;
	console.log("paper for player")
	randomNumber();   

}
function playerScissors(){
	userChoice = 3;
	randomNumber();
}
function randomNumber(){
	randomNum = Math.floor(Math.random()*100)
	computerChoice()
}
function computerChoice(){
	if (randomNum<=33){
		compChoice = 1;
	}else if (randomNum <= 66){
		compChoice = 2;
	}else if (randomNum <=100){
		compChoice = 3;
	};
	compare();
}

function compare(){
	if (userChoice === compChoice) {
		alert("Its a tie")
	
	} else if (userChoice ===1 && compChoice === 2){
	
		alert("Paper beats Rock, you loose");
	
	} else if (userChoice=== 1 && compChoice === 3){
		alert("Rock beats scissors, you win");
		userChoice += 1;
		document.getElementById("userPointstally").innerHTML= userPoints.toString();
	
	}else if (userChoice ===2 && compChoice === 1){
			alert("Paper beats rock, you win");
		    userChoice += 1;
		    document.getElementById("userPointstally").innerHTML= userPoints.toString();
	
	} else if (userChoice === 2 && compChoice === 3){
		alert("Scissors beats paper, you loose");
	
	}else if (userChoice === 3 && compChoice === 1){
			alert("Rock beats scissors, you win");
		     userChoice += 1;
		     document.getElementById("userPointstally").innerHTML= userPoints.toString();
	
	} else if (userChoice=== 3 && compChoice === 2){
		alert("Scissors beats paper, you win");
	}

}


