var form = document.forms.example;
console.log("working");
form.addEventListener("submit",mixRate,false);

function mixRate(event) {

	event.preventDefault();

	var tape = {
		rating: form.mixtape.value,
	}
	console.log("text");

	var text = "<p> Thank you for your suggestion! Josh will look into " + tape.rating + " as soon as he can! In the meantime don't do anything stupid.</p>";

	document.getElementById("results").innerHTML = text;

	}