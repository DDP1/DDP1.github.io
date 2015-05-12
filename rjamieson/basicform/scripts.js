
var form = document.forms.practiceForm; 

//Creates the variable form which is linked to the documents form with the name "practiceForm".  So when I type form here in JavaScript, it will be referring to the HTML element <form name="practiceForm">.  


form.addEventListener("submit", displayPerson, false);  
	//When the submit button is pressed, it will run the function displayPerson which is coded below


function displayPerson(event) {
	
	event.preventDefault();
		//This prevents the default action that most forms do. Normally a form would be submitted to the server to be processed using a server-side language like PHP or Ruby.  However, we don't know any of that yet, so we are preventing this from happening and doing something else instead:
	
	
		//The code below will make more sense when I explain objects.  That video will be up on moodle by 5/14/15.

	var Person = {
		name: form.username.value,
	};

	//The object "Person" with the property "name" and the value of "name" being linked to whatever was typed in the box in the <input> tag called "username".



		//You've seen this before.  We did this with Alerts, but now we are doing it with a mix of objects (the object is Person) and forms.  
	var html = "<p>You typed: " + Person.name + ".</p>";

	
		//You've also seen this before.  Make a placeholder in HTML for the results to appear.  
	document.getElementById("displayText").innerHTML = html;
}



//Possible Questions:

//  Why doesn't my form look all fancy?

	// You need to add bootstrap style or find your own style to spice it up.  It can be found by going to http://getbootstrap.com/css/#forms  

//  "I have no idea what I'm doing....."

	//  I'm very sorry that you still think you have no idea what you are doing.  Lets slow this down and try to go step by step.  You don't have to understand every last piece of this code all at once.  Sit on it and see what works.  Start with "When I type this one thing, the result is this...". Also, the code has been given for you in multiple ways.  There is Dustin's example with bootstrap, my example with bootstrap, and this example.  You have the code....you can do this people :)





