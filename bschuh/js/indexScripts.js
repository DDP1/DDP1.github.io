
//for the index forms page to call it to work.//

var form = document.forms.example;


form.addEventListener("submit",formName, false);


function formName(event) {

	event.preventDefault();
	console.log("something has been clicked");


	var name ={
		firstname: form.username.value,
		lastname: form.lastName.value,
		Gender: form.optionsRadios.value,
		Favoritegame: form.games.value,
		Yourcomment: form.comment.value,
	};

	var html = "<p> Your name is:" + name.firstname + "</p><br><p>My last name is:" + name.lastname + "</p><br><p>Your gender is:" + name.Gender + "</p><br><p> Your favorite game:" + name.Favoritegame + "</p><br><p> your comment:" + name.Yourcomment + "</p>"; 

	document.getElementById('result').innerHTML = html;


};









