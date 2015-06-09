var userChoice=0;//setts all the vars equal ot 0
var compChoice=0;
var randomNum=0;
var compPoints=0;// this would set your points to zero but does not work	
var userPoints=0;
function playerRock(){//defines the function player rock and sets it equal ot 1
	userChoice = 1;	
	randomNumber();
}
function playerPaper(){ // defines the function player paper andsets it equal to 2
	userChoice = 2;
	console.log("paper for player")
	randomNumber();   

}
function playerScissors(){//defines the functhin player scissors and sets it equal ot 3
	userChoice = 3;
	randomNumber();
}
function randomNumber(){
	randomNum = Math.floor(Math.random()*100)// this iswhat makes the compuer wins by genirtatin a nubmer and then giving by saying 
	computerChoice()
}
function computerChoice(){// if hte nubmer is grater tahn or eequal ot 33 the comp choies is one(rock)
	if (randomNum<=33){
		compChoice = 1;
	}else if (randomNum <= 66){// if the number is graterthan or equal to 66 then the comps choise = 66(paper)
		compChoice = 2;
	}else if (randomNum <=100){// if the computer choise is grater tahn 100 or eual to it sets teh number eequal to 3 (scissors)
		compChoice = 3;
	};
	compare();
}

function compare(){
	if (userChoice === compChoice) {
		alert("Its a tie")
	
	} else if (userChoice ===1 && compChoice === 2){// this is how y ou see who wins by the normal rock paper scissors rules
	
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


