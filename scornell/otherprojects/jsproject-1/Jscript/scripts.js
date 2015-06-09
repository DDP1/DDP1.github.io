//This JavaScript File Is linked to the "Promptpage" Html page

//These two arrays: dailyarray and goalarray are being used in a for loop and whgile loop below...
var dailyarray = ['What will you do today?' , 'What do you want to do today' , 'Where are you now?']	

var goalarray = ['1st goal' ,'2nd goal','3rd goal'];

var dailytext = "";

var goaltext = "";

function daily()  { //This creates a function that corresponds to a button in the html promtpage
	alert('Be prepared to prepare for your day. Write a few sentences that will serve as a daily log for what you plan to do and what you need to do...')

	for (i=0 ;i < dailyarray.length; i++) {
		
		dailytext += prompt (dailyarray[i]) + "<br/>" //this will prompt all of the different parts of the daily array
		document.getElementById("list1").innerHTML = dailytext;
	}
}

function goals() {
	alert("What are a few goals you have today?")

	var i=0
	while (i< goalarray.length){
		
		goaltext += prompt (goalarray[i]) + "<br/>"  //this will prompt all of the different parts of the daily array
		i++
		document.getElementById("list2").innerHTML = goaltext;
	}
}


//this is all intended to work with a button in the html promptpage
var duckVisibleIndex = 0;
var visibleStates = ["hidden", "visible"];

function toggleDuck() { //corresponds to a button
	++duckVisibleIndex;								//I am using visibility style here with the image
	if (duckVisibleIndex == visibleStates.length) {
		duckVisibleIndex = 0;
	}
	document.getElementById("duckPic").style.visibility = visibleStates[duckVisibleIndex];
}

////Rock Paper Scissors...............................................
////Rock Paper Scissors...............................................
////Rock Paper Scissors...............................................
////Rock Paper Scissors...............................................
////Rock Paper Scissors...............................................
var myChoice;				//these all establish variables
var aiChoice;				//		
var aiScore;				//
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
	aiScore = Math.floor(Math.random()*3)
	aiMath(); //this function then runs
	varCheck = 2;
}

function aiMath(){
	
	if (aiScore>=1) { //the variable 'aiChoice' represents your choice of rock(1), paper(2) or scissors(3)//
		aiChoice=1;
	varCheck = 3;
	}
	
	else if (aiScore<=2){
		aiChoice=2;
	varCheck = 3;
	}
	
	else if (aiScore<=3){
		aiChoice=3;
		varCheck = 3;
	};
		compare(); // the function compare will run after this function concludes//
}

			//again, rock is myChoice=1, paper is myChoice=2, and scissors is my Choice=3//


function compare(){												//this is the huge function thats determines whether or not you "won"//
if (myChoice === aiChoice && varCheck === 3 ) {
	alert("The Choices Collided...");
	document.getElementById("yourResults").innerHTML = tie; //this is a tie between the user and the computer//
	document.getElementById("yourScore").innerHTML=  score;
}

else if (myChoice === 1 && aiChoice === 2){
	alert("Their paper covered your rock...");	
	document.getElementById("yourResults").innerHTML= lose; //this represents their paper covering your rock, you lose//
	--score
	document.getElementById("yourScore").innerHTML=  score;
}

else if (myChoice === 2 && aiChoice === 1){
	alert("Your paper covered their rock...");	
	document.getElementById("yourResults").innerHTML= win; //this represents you winning by your paper covering their rock//
	++score;
	document.getElementById("yourScore").innerHTML=  score;
}

else if (myChoice === 1 && aiChoice === 3){
	alert("Your rock bend their scissors...");
	document.getElementById("yourResults").innerHTML= win; //you win here by defeating their scissors with your rock//
	++score;
	document.getElementById("yourScore").innerHTML=  score;
}

else if (myChoice === 3 && aiChoice === 1){
	alert("Their rock crushed your scissors...");
	document.getElementById("yourResults").innerHTML= lose; //you lose here when the computer crushes your scissors with a rock//
	--score
	document.getElementById("yourScore").innerHTML=  score;
}

else if (myChoice === 2 && aiChoice === 3){
	alert("Their scissors sliced your paper...");
	document.getElementById("yourResults").innerHTML= lose; // you lose here because the scissors cut the paper//
	--score
	document.getElementById("yourScore").innerHTML=  score;
}

else if (myChoice === 3 && aiChoice === 2){
	alert("Your scissors cut their paper...");
	document.getElementById("yourResults").innerHTML= win; //you win here by cutting their paper with your sicssors//
	++score;
	document.getElementById("yourScore").innerHTML=  score;
}

}
//R.P.S. Game...////////////////
//R.P.S. Game...////////////////
//R.P.S. Game...////////////////
//R.P.S. Game...////////////////
//R.P.S. Game...////////////////