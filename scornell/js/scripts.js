
////Rock Paper Scissors...............................................
////Rock Paper Scissors...............................................
////Rock Paper Scissors...............................................
////Rock Paper Scissors...............................................
////Rock Paper Scissors...............................................
var myChoice;				//these all establish variables
var aiChoice;				//		
var varCheck;				//
var score=0;				//
							//
var win="You won!";			//
var lose="You lost!";		//
var tie="You tied!";		//

function rock(){	//this is the function for selecting rock//
 myChoice =1;
aiNumber(); 	//the function 'ainumber' plays//
varCheck = 1;
} 

function paper(){	//the function when selecting paper//
myChoice = 2;	
aiNumber();		//the function 'ainumber' plays//
varCheck = 1;
} 

function scissors(){ //this is the function for selecting scissors//
myChoice = 3;	
aiNumber();		//the function 'ainumber' plays//
varCheck = 1;
} 

function aiNumber() {						//this function plays after selecting one of the above functions//	
	aiChoice = Math.floor(Math.random()*3) + 1;
	compare();
	varCheck = 2;
}





			//again, rock is myChoice=1, paper is myChoice=2, and scissors is my Choice=3//


function compare(){												//this is the huge function thats determines whether or not you "won"//

var resultBox = document.getElementById("yourresults0");
var scoreBox = document.getElementById("yourScore");
var resultStyleTie = "yourResultsStyleTie";
var resultStyleWin = "yourResultsStyleWin";
var resultStyleLose = "yourResultsStyleLose";

if (myChoice === aiChoice) {
	alert("The Choices Collided...");
	resultBox.innerHTML= tie; //this is a tie between the user and the computer//
	scoreBox.innerHTML=  score;
	resultBox.className = resultStyleTie;

}

else if (myChoice === 1 && aiChoice === 2){
	alert("Their paper covered your rock...");	
	resultBox.innerHTML= lose; //this represents their paper covering your rock, you lose//
	--score
	scoreBox.innerHTML=  score;
	resultBox.className = resultStyleLose;
}

else if (myChoice === 2 && aiChoice === 1){
	alert("Your paper covered their rock...");	
	resultBox.innerHTML= win; //this represents you winning by your paper covering their rock//
	++score;
	scoreBox.innerHTML=  score;
	resultBox.className = resultStyleWin;
}

else if (myChoice === 1 && aiChoice === 3){
	alert("Your rock bend their scissors...");
	resultBox.innerHTML= win; //you win here by defeating their scissors with your rock//
	++score;
	scoreBox.innerHTML=  score;
	resultBox.className = resultStyleWin;

}
else if (myChoice === 3 && aiChoice === 1){
	alert("Their rock crushed your scissors...");
	resultBox.innerHTML= lose; //you lose here when the computer crushes your scissors with a rock//
	--score
	scoreBox.innerHTML=  score;
	resultBox.className = resultStyleLose;
}

else if (myChoice === 2 && aiChoice === 3){
	alert("Their scissors sliced your paper...");
	resultBox.innerHTML= lose; // you lose here because the scissors cut the paper//
	--score
	scoreBox.innerHTML=  score;
	resultBox.className = resultStyleLose;
}

else if (myChoice === 3 && aiChoice === 2){
	alert("Your scissors cut their paper...");
	resultBox.innerHTML= win; //you win here by cutting their paper with your sicssors//
	++score;
	scoreBox.innerHTML=  score;
	resultBox.className = resultStyleWin;
}
	
}

//R.P.S. Game...////////////////
//R.P.S. Game...////////////////
//R.P.S. Game...////////////////
//R.P.S. Game...////////////////
//R.P.S. Game...////////////////