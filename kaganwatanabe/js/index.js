var form = document.forms.FormPrac;
form.addEventListener("submit", displayPerson,false)
function displayPerson(event) {
	event.preventDefault();
	var Person = {
		name: form.amountCash.value,
		info: form.email.value,
};
console.log(Person.name);
var html="<p>thank you for your : &#36;" + Person.name + " and for logging in with the email: " + Person.info + ".</p>";
document.getElementById("displayText").innerHTML = html;
}