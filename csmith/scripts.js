var form = document.forms.example;

form.addEventListener("submit",mixRate,false);

function mixRate(event) {

	event.preventDefault();

	var tape = {
		rating: form.mixtape.value,

	};

	var text = "<p>You rated my website as a: " + tape.rating + ".</p>";

	document.getElementById("results").innerHTML = text;

}