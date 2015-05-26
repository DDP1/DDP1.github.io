var form = document.forms.mixtape;

form.addEventListener("submit", displayPerson, false);

function displayPerson(event) {

	event.preventDefault();

	var Person = {
		fname: form.fname.value,
		lname: form.lname.value,
		email: form.mail.value,
		gender: form.gender.value,
		phone: form.pnumber.value,
		rating: form.mixtapes.value,
	};

	var l = [];

	for(i = 0; i < form.cars.length; i++) {

		if(form.cars[i].checked) {
			l.push(form.cars[i].value);
		}

}
		
		Person.cars = l;
	

	var html = "<P>Your name is " + Person.fname + " " + Person.lname + " and your email is " + Person.email + " and your phone number is " + Person.phone + ".  You are a " + Person.gender + " who can provide a " + Person.cars.join(", ") + " and you also enjoy " + Person.rating + " mixtapes.  Thank you for the information.  Please send the cars to 1223 NE Mixtape street mixtape, Oregon 97111.  You should receive an email with the information concerning the mixtape release within the next 90 years.";

	document.getElementById("results").innerHTML = html;
}