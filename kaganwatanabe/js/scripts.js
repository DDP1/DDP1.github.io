var userChoice=0;
var compChoice=0;
var randomNum=0;
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
		alert("If it was a win you now loose! but if it was a loss it was a tie but now a loss")
	} else if (userChoice ===1 && compChoice === 2){
			alert("The reptile has a far supiror intalect than a bacon so if!");
	} else if (userChoice=== 1 && compChoice === 3){
		alert("The Bacon has evovled and swolloed the kid the anfibian now wins");
	}else if (userChoice ===2 && compChoice === 1){
			alert("I dont know ");
	} else if (userChoice === 2 && compChoice === 3){
		alert("Kid with bacon grabs book with bacon greesed hands the binding is now ruend book wins");
	}else if (userChoice === 3 && compChoice === 1){
			alert("You choose somethign other than greesy bacon handded book. It is a tie");
	} else if (userChoice=== 3 && compChoice === 3){
		alert("The turtal has a fancy for bacon coverd boosk the kid wins");
	}
}