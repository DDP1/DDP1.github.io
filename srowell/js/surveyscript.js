var form = document.forms.myForm;


//*** This part is the part that acts as the button at the bottom of the page  ***// 

form.addEventListener("submit", displayPerson, false);

function displayPerson(event) {

	event.preventDefault();


//**   This part is where I define all the variables  **//
	var person={
	name: form.username.value,
	state: form.state.value,
	gender: form.gender.value,
	classe: form.classe.value
	}


	var l = [];

	for(i = 0; i < form.classe.length; i++ ) {

		if(form.classe[i].checked){
			l.push(form.classe[i].value);
		}
	}

	person.classe = l;


//**** The part below lists the inputted variables and lists them in and order that makes sence  ****//
	var html = "<p> My name is " + person.name + ". My favorite game is  " + person.state + ".  My gender is " + person.gender + ".  I play the genres of " + person.classe.join(", "); 

	document.getElementById('results').innerHTML = html;

}