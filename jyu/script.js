var form=document.forms.jason;
form.addEventListener("submit",cookies,false);

function cookies(event) {

	event.preventDefault();

	var chips = {
		rating: form.graham.value,
	}

	var text = "<p>Gotta go fast, " + chips.rating +".</p>";

	document.getElementById("results").innerHTML = text;
};



function check() {
    document.getElementById("myCheck").checked = true;
    document.getElementById("prob").innerHTML="<p>Jason is a true sandwich</p>";
}

function uncheck() {
    document.getElementById("myCheck").checked = false;
    document.getElementById("prob").innerHTML="<p>Jason is NOT a true sandwich</p>";
}

