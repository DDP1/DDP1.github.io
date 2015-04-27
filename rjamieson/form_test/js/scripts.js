//Get the form from the page with all it's data. Use the format of document.forms.nameOfForm. 
//There are alternative methods listed in Mr. Jamieson's book, but they're a bit more of pain to use, 
//though probably slightly more reliable.

var form = document.forms.example;

//Attach the event listener to the form using the following code.

form.addEventListener("submit", displayPerson, false);

//The displayPerson function. This will trigger upon hitting the submit button.

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
		secretData: form.secretData.value,
		bio: form.bio.value,
		gender: form.gender.value,
		car: form.cars.value
	};

	//Because limbs is a checkbox, we have to do a special thing where we iterate through each checkbox to see if it's checked
	//and then push in the value.

	//Empty container for storing values

	var l = [];

	//Iterate through all the limbs

	for(i = 0; i < form.limbs.length; i++) {

		//If it is checked, push the value into the array. Note my syntax.

		if(form.limbs[i].checked) {
			l.push(form.limbs[i].value);
		}

	}

	//Finally, push the l array into the Person object.

	Person.limbs = l;

	//This is all the html. You can see how I'm calling all the data. I'm just splicing it into the string.
	//There are better ways to do this with Object Oriented Code but that's more complex than we need it to be
	//and I'm also coding this at 11:30 at night.

	var html = "<p>My name is " + Person.name + ".</p><p>My secret data is " + Person.secretData + ".</p><p>Here's a bio about me... " + Person.bio + "</p><p>My gender is " + Person.gender + ".</p><p>I have these limbs: " + Person.limbs.join(", ") + ".</p><p>I want this car: " + Person.car + ".</p>";

	//Finally, set the content-display div to have the data. 
	//This uses some jquery because it's easier but you are free to use the other archaic method that you've been using before.

	$("#content-display").html(html);

	//Returning you to the top of the page. An little extra goody.
	
	$('html,body').animate({ scrollTop: 0 }, 'fast');
}