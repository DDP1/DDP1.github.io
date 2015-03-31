//					Drill:

//   Write a quick program that asks a user how their day was.  This program should then have custom made responses depending on what the user answer to that question is.  It should have more than two responses.

//  How would you begin this problem?
	//Make a prompt to ask a question
	//Make the file(javascript and html)

//  What will your responses look like?

function dayAsker() {

	var userResponse = prompt("How is your day going?").toUpperCase();

	if (userResponse === "GOOD") {
		document.getElementById('compResponse').innerHTML = "OHHHH, good for you";
	}
	else if (userResponse === "BAD") {
		document.getElementById('compResponse').innerHTML = "Noooooo.  Sorry to hear it";
	}

	else {
		document.getElementById('compResponse').innerHTML = "Sorry I didn't catch that.  Try typing a 'good' or 'bad'.";
	}

}

	












