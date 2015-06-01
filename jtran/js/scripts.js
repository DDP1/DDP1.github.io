var userChoice;
var compChoice;
var randomNum;

function playerRock() {
	userChoice=1;
	showImgRock();
	randomNumber();
	
}

function playerPaper() {
	userChoice=2;
	showImgPaper();
	randomNumber();
}

function playerScissors() {
	userChoice=3;
	showImgScissors();
	randomNumber();
}

function randomNumber(){
	randomNum = Math.floor(Math.random()*100)
	computerChoice();
}

function computerChoice(){
	if (randomNum<=33) {
		compChoice=1;
		CshowImgRock()
	}else if (randomNum<=66){
		compChoice=2;
		CshowImgPaper()
	}else if (randomNum<=100){
		compChoice=3;
		CshowImgScissors()
	};
	compare();
}

function compare(){

	if (userChoice === compChoice){
		 document.getElementById("Announce").innerHTML = "TIE";

	}else if (userChoice===1 && compChoice===2){
		 document.getElementById("Announce").innerHTML = "YOU LOST";

	}else if (userChoice===1 && compChoice===3){
		 document.getElementById("Announce").innerHTML = "YOU WIN";

	}else if (userChoice===2 && compChoice===1){
		 document.getElementById("Announce").innerHTML = "YOU WIN";

	}else if (userChoice===2 && compChoice===3){
		 document.getElementById("Announce").innerHTML = "YOU LOST";
		
	}else if (userChoice===3 && compChoice===1){
		 document.getElementById("Announce").innerHTML = "YOU LOST";
		
	}else if (userChoice===3 && compChoice===2){
	    document.getElementById("Announce").innerHTML = "YOU WIN";
		
	}

}















//img for RPS
function showImgRock() {
           document.getElementById("playerPick").innerHTML = "<img class='playerRock' src='http://megaicons.net/static/img/icons_sizes/8/178/512/rock-paper-scissors-rock-icon.png'>"
        }	

function showImgPaper() {
           document.getElementById("playerPick").innerHTML = "<img class='playerPaper' src='http://megaicons.net/static/img/icons_sizes/8/178/256/rock-paper-scissors-paper-icon.png'>" 
        }

function showImgScissors() {
            document.getElementById("playerPick").innerHTML = "<img class='playerScissors' src='http://megaicons.net/static/img/icons_sizes/8/178/256/rock-paper-scissors-scissors-icon.png'>"
        }

function CshowImgRock() {
           document.getElementById("compPick").innerHTML = "<img class='playerRock' src='http://megaicons.net/static/img/icons_sizes/8/178/512/rock-paper-scissors-rock-icon.png'>"
        }	

function CshowImgPaper() {
           document.getElementById("compPick").innerHTML = "<img class='playerPaper' src='http://megaicons.net/static/img/icons_sizes/8/178/256/rock-paper-scissors-paper-icon.png'>" 
        }

function CshowImgScissors() {
            document.getElementById("compPick").innerHTML = "<img class='playerScissors' src='http://megaicons.net/static/img/icons_sizes/8/178/256/rock-paper-scissors-scissors-icon.png'>"
        }

           

 var form= document.forms.Example

form.addEventListener("submit",waddup,false);

function waddup(event){

	event.preventDefault();
	var tape = {

		rating: form.waddup.value,




	}
	var text="<p> Hi, Thanks for checking out my final Project. "+tape.rating+".</p>";
	document.getElementById("results").innerHTML= text;
}