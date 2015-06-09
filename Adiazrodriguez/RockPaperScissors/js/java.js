console.log("Welcome to the Gr8 website m8!");

//Variables being used
var userChoice;
var compChoice;
var randomNumb;

//All Player Choices from button clicks
function playerRock() {
	var picture = "<div id='picture'>" + "<img id='pics' src='pictures/Rock.png' class='img-responsive'>" + "</div>";
	document.getElementById("choice").innerHTML = picture;//THis will add a rock picture to the site when rock is chosen

	userChoice = 1; //1 is equal to rock"

	console.log("Player chooses rock!")

	randomNumb();

}

function playerPaper() {
	var picture = "<div id='picture'>" + "<img id='pics' src='pictures/Paper.png' class='img-responsive'>" + "</div>";
	document.getElementById("choice").innerHTML = picture;//THis will add a paper picture to the site when paper is chosen

	userChoice = 2; //2 is equal to paper

	console.log("Player chooses paper!")

	randomNumb();
}

function playerScissors() {
	var picture = "<div id='picture'>" + "<img id='pics' src='pictures/Scissors.png' class='img-responsive'>" + "</div>";
	document.getElementById("choice").innerHTML = picture;//THis will add a scissors picture to the site when scissors are chosen

	userChoice = 3; //3 is equal to scissors

	console.log("Player chooses scissors!")

	randomNumb();
}


//Creates a random number used in calculatin the computer choice
function randomNumb() {
	randomNum = Math.floor(Math.random()*100);

	computerChoice();
}

//All the possible choices for the computer to make based on the random number

function computerChoice() {

	if(randomNum <= 33) {
		var picture = "<div id='CompPicture'>" + "<img id='CompPics' src='pictures/Rock.png' class='img-responsive'>" + "</div>";
		document.getElementById("compChoice").innerHTML = picture;//THis will add a rock picture to the site when rock is chosen by the computer

		compChoice = 1;  // Computer chooses rock if random number is less than or equal to 33

		console.log("Computer chooses rock!")
	} 
	else if (randomNum <= 66) {
		var picture = "<div id='CompPicture'>" + "<img id='CompPics' src='pictures/Paper.png' class='img-responsive'>" + "</div>";
		document.getElementById("compChoice").innerHTML = picture;//THis will add a paper picture to the site when paper is chosen by the computer

		compChoice = 2;  // Computer chooses paper if random number is than or equal to 66

		console.log("Computer chooses paper!")
	} 
	else if (randomNum <= 100) {
		var picture = "<div id='CompPicture'>" + "<img id='CompPics' src='pictures/Scissors.png' class='img-responsive'>" + "</div>";
		document.getElementById("compChoice").innerHTML = picture;//THis will add a scissors picture to the site when scissors are chosen by the computer

		compChoice = 3; // Computer chooses scissors if random number is less than or equal to 100


		console.log("Computer chooses scissors!")
	}

	compare();
	}

//The function that qill compare the choices to determine who will win
function compare() {

	if (userChoice === compChoice) {
		var tie = "<div>" + "<h1 id='result_text'>" + "IT'S A TIE!!!" + "</h1>" + "</div>";
		document.getElementById("result").innerHTML = tie;
		console.log("It's a tie!");
			} 

	else if (userChoice === 1 && compChoice === 2) {
		var compWin = "<div>" + "<h1 id='result_text'>" + "COMPUTER WINS!!!" + "</h1>" + "</div>";
		document.getElementById("result").innerHTML = compWin;
		console.log("Computer Wins!");
	}
	  else if (userChoice === 1 && compChoice === 3) {
	  	var userWin = "<div>" + "<h1 id='result_text'>" + "YOU WIN!!!" + "</h1>" + "</div>";
		document.getElementById("result").innerHTML = userWin;
	  	console.log("You Win!");
	}
	   else if (userChoice === 2 && compChoice === 1) {
	   	var userWin = "<div>" + "<h1 id='result_text'>" + "YOU WIN!!!" + "</h1>" + "</div>";
		document.getElementById("result").innerHTML = userWin;
	   	console.log("You Win!");
	}
	   else if (userChoice === 2 && compChoice === 3) {
	   	var compWin = "<div>" + "<h1 id='result_text'>" + "COMPUTER WINS!!!" + "</h1>" + "</div>";
		document.getElementById("result").innerHTML = compWin;
	   	console.log("Computer Wins!");
	}
	   else if (userChoice === 3 && compChoice === 1) {
	   	var compWin = "<div>" + "<h1 id='result_text'>" + "COMPUTER WINS!!!" + "</h1>" + "</div>";
		document.getElementById("result").innerHTML = compWin;
	   	console.log("Computer Wins!");
	}
	   else if (userChoice ===3 && compChoice === 2) {
	   	var userWin = "<div>" + "<h1 id='result_text'>" + "YOU WIN!!!" + "</h1>" + "</div>";
		document.getElementById("result").innerHTML = userWin;
	   	console.log("You Win!")
	}
		console.log("");
	}
