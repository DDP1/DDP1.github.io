var form=document.forms.jason;
form.addEventListener("submit",cookies,false);

function cookies(event) {

	event.preventDefault();

	var chips = {
		rating: form.graham.value,
	}

	var text = "<p>Gotta go fast, " + chips.rating + ".</p>";

	document.getElementById("results").innerHTML = text;
}