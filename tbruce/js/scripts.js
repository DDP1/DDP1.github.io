var score = 0;	
var outcome ="";
var usrResponse;
//functions usrRock,usrPaper,usrScissors activate when the corosponding img on the website is clicked and sets the variable usrResponse.  Then the functoin play game is activated.
function usrRock () { 
	usrResponse = "ROCK";
	playGame();
	console.log(usrResponse);
	}
function usrPaper () { 
	usrResponse = "PAPER";
	playGame();
	console.log(usrResponse);
	}
function usrScissors () { 
	usrResponse = "SCISSORS";
	playGame();
	console.log(usrResponse);
	}

function playGame () {
	//logs to the consol to make sure the playGame function is running
	console.log("the game is starting");
	//Creates a random number from 1 to 3. 1 is rock, 2 is paper, 3 is scissors
	var compResponse = Math.floor((Math.random() * 3) + 1);
	//compares the usrResponce and random compResponce based on the rules of Rock paper Scissors
	if (usrResponse == "ROCK" && compResponse == "1") {
		outcome= 'You tie';
	} else if(usrResponse == "ROCK" && compResponse =="2"){
		outcome= 'You lose';
		score--
	} else if(usrResponse == "ROCK" && compResponse =="3"){
		outcome='You win';
		score++
	} else if(usrResponse == "PAPER" && compResponse =="1"){
		outcome= 'You win';
		score++
	} else if(usrResponse == "PAPER" && compResponse =="2"){
		outcome= 'You tie';
	} else if(usrResponse == "PAPER" && compResponse =="3"){
		outcome= 'You lose';
		score--
	} else if(usrResponse == "SCISSORS" && compResponse =="1"){
		outcome= 'You lose';
		score--
	} else if(usrResponse == "SCISSORS" && compResponse =="2"){
		outcome= 'You win';
		score++
	} else if(usrResponse == "SCISSORS" && compResponse =="3"){
		outcome= 'You tie';
	};
	//compResponce and usrResponce are used to determine the correct picture to display in the website
	if (compResponse == "1") {
		document.getElementById("compHand").src = "http://megaicons.net/static/img/icons_sizes/8/178/512/rock-paper-scissors-rock-icon.png"

	} else if(compResponse =="2"){
		document.getElementById("compHand").src = "http://megaicons.net/static/img/icons_sizes/8/178/256/rock-paper-scissors-paper-icon.png"

	} else{
		document.getElementById("compHand").src = "http://megaicons.net/static/img/icons_sizes/8/178/256/rock-paper-scissors-scissors-icon.png"
	};
	if (usrResponse == "ROCK") {
		document.getElementById("usrHand").src = "http://megaicons.net/static/img/icons_sizes/8/178/512/rock-paper-scissors-rock-icon.png"

	} else if(usrResponse =="PAPER"){
		document.getElementById("usrHand").src = "http://megaicons.net/static/img/icons_sizes/8/178/256/rock-paper-scissors-paper-icon.png"

	} else{
		document.getElementById("usrHand").src = "http://megaicons.net/static/img/icons_sizes/8/178/256/rock-paper-scissors-scissors-icon.png"
	};
	//the total score and out come of the most recent game are displayed in the website
	document.getElementById("scoreBox").innerHTML = score;
	document.getElementById("outcomeBox").innerHTML = outcome;
	//the choices of the usr and computer are displayed in the console as well as the total score 
	console.log(usrResponse);
	console.log(compResponse);
	console.log(score);
};

//script for forms. These variables are used to store the information receved from the form
var areBike ="";
var bicycle ="";
var firstname ="";
var lastname ="";
//firstname is loged to check that it is working
console.log (firstname);

var form = document.forms.biker;

form.addEventListener("submit",bikeCheck,false);

function bikeCheck(event) {
	event.preventDefault();
//all imputs from the form are transfered to the variables above
	var bicycle = form.bike.value;
	var firstname = form.firstname.value;
	var lastname = form.lastname.value;
//the value of bicycle is checked to produce the desiered value for the sentence to be printed
	if (bicycle==="yes") {
		var areBike = "are"
	}else{
		var areBike = "aren't"
	};
//first name and last name a logged to check that the function is running
	console.log(firstname);
	console.log(lastname);
//the variable text is set to the combination of the desired variables to create a sentence.  This sentence is now printed to the browser.
	var text = ["You "+firstname+" "+lastname+" "+areBike+" a biker!"];
	document.getElementById('results').innerHTML = text;
}



