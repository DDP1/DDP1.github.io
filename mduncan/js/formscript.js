


///This centers the image modal

$('.modal').on('show.bs.modal');
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});



///This prints the form information
var form = document.forms.formprac;
form.addEventListener("submit", displayPerson,false)
function displayPerson(event) {
	event.preventDefault();
	var Person = {
		
		info: form.email.value,
		Firstname: form.firstName.value,
};
console.log(Person.name);
var html="Thank you for signing up, " + Person.Firstname + ", we have sent a notification to your E-Mail: " + Person.info ;
document.getElementById("displayPerson").innerHTML = html;
}

