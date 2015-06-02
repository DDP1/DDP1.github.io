var form = document.forms.firstForm; 

//This is declaring a variable called form, this is for the name

form.addEventListener("submit", displayPerson, false);  


function displayPerson(event) {
	
	event.preventDefault();
		
	var Person = {
		name: form.username.value,
		password: form.password.value,
	};

	
	var html = "<p>You said your name is: " + Person.name + " and your password is " + Person.password + ".</p>";
	//This shows the persons name as well as their password.


	

	document.getElementById("displayText").innerHTML = html;
	//This is what makes the username and pass print to the screen.
}