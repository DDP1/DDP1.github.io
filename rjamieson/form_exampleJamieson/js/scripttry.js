var form = document.forms.example;

form.addEventListener("submit", displayPerson, false);

function displayPerson(event) {
	//Prevent the default that would occur upon submitting the form. We want it to run our code instead.

	event.preventDefault();
	
	//I'm using a javascript object to put all the values from the form.
	//It's stuff you may not have done yet, but as you can see, it's fairly simple what I'm doing right now
	// (Object oriented programming can get much more complicated later; I'm not even doing it right here, but 
	// since it's a demo it's okay.)
	//You generally get values from the form using form.name.value.
	//The full thing would be document.forms.example.name.value, but since we declared the variable above,
	//we just say form instead of document.forms.example.

	var Person = {
		name: form.username.value,
	};


	//This is all the html. You can see how I'm calling all the data. I'm just splicing it into the string.
	//There are better ways to do this with Object Oriented Code but that's more complex than we need it to be
	//and I'm also coding this at 11:30 at night.

	var html = "<p>My name is " + Person.name + ".</p>";

	//Finally, set the content-display div to have the data. 
	//This uses some jquery because it's easier but you are free to use the other archaic method that you've been using before.

	document.getElementById("test").innerHTML = html;

	//$("#content-display").html(html);

	//Returning you to the top of the page. An little extra goody.
	
	//$('html,body').animate({ scrollTop: 0 }, 'fast');
}