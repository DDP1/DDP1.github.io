var form = document.forms.FormPrac;// this sets form = to the from that is inside my html
form.addEventListener("submit", displayPerson,false)// this says listen for submit or display person

function displayPerson(event) {
	event.preventDefault();// this prevents the page from refreshing or takning you to an external page when you hit submit
	var Person = {
		name: form.amountCash.value,
		info: form.email.value,//this sets var person equal ot amount cash and email so when you submit it submist both of them 
};
console.log(Person.name);//this logs person.name in the console
var html="<p>thank you for your : &#36;" + Person.name + " and for logging in with the email: " + Person.info + ".</p>";
document.getElementById("displayText").innerHTML = html;// this writes what someone inputs to any place that the id is 
named display  text
}