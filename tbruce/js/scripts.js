document.getElementById("playButton").addEventListener("click",playGame);
var score = 0;
function playGame (argument) {
	var usrResponse = prompt("Rock, Paper, or Scissors?").toUpperCase();
	var compResponse = Math.floor((Math.random() * 3) + 1);
	

	//1 is rock, 2 is paper, 3 is scissors
	if (usrResponse == "ROCK" && compResponse == "1") {
		alert('You tie!');
	} else if(usrResponse == "ROCK" && compResponse =="2"){
		alert('You lose!');
		score--
	} else if(usrResponse == "ROCK" && compResponse =="3"){
		alert('You win!');
		score++
	} else if(usrResponse == "PAPER" && compResponse =="1"){
		alert('You win!');
		score++
	} else if(usrResponse == "PAPER" && compResponse =="2"){
		alert('You tie!');
	} else if(usrResponse == "PAPER" && compResponse =="3"){
		alert('You lose!');
		score--
	} else if(usrResponse == "SCISSORS" && compResponse =="1"){
	alert('You lose!');
		score--
	} else if(usrResponse == "SCISSORS" && compResponse =="2"){
		alert('You win!');
		score++
	} else if(usrResponse == "SCISSORS" && compResponse =="3"){
		alert('You tie!');
	};
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
	document.getElementById("displayScore").innerHTML = score;
	console.log(usrResponse);
	console.log(compResponse);
	console.log(score)
};

