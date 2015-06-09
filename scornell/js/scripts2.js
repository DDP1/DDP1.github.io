

function handle_f1() {				//This is a function for the multiple choice style questions(1st form)
	
	if (get_radio("name1") == "1") {
		document.getElementById("Results").innerHTML="(1)Christtt IS the correct answer.<br>";		//Each one of these tags responds to what the user says, and it uses the function get_radio(These are radio forms)
	}
	else {
		document.getElementById("Results").innerHTML="(1)Sorry, But Christtt was the correct answer.<br>";
	}
	
	if (get_radio("name2") == "1") {
		document.getElementById("Results").innerHTML+="(2)Yeah, Vaporwave's the right answer.<br>";
	}
	else {
		document.getElementById("Results").innerHTML+="(2)Vaporwave was actually the corrct answer.<br>";
	}
	
	if (get_radio("name3") == "1") {
		document.getElementById("Results").innerHTML+="(3)Thats correct, I stick to Audacity,Virtual Dj and Ableton.<br>";
	}
	else {
		document.getElementById("Results").innerHTML+="(3)I dont use that combination, I use Audacity,Virtual Dj and Ableton.<br>";
	}
	
	if (get_radio("name4") == "1") {
		document.getElementById("Results").innerHTML+="(4)Yep, my music name, alongside my friend Harrison, is called Gasoline Gardens.<br>";
	}
	else {
		document.getElementById("Results").innerHTML+="(4)I'm just in a music group with one another person, we're dubbed Gasoline Gardens.<br>";
	}
	
	if (get_radio("name5") == "1") {
		document.getElementById("Results").innerHTML+="(5)The Last Champloo was by first album.<br>";
	}
	else {
		document.getElementById("Results").innerHTML+="(5)Nope, My first Lp was The Last Champloo.<br>";
	}
	

}

function handle_f2() { 
	var level = document.getElementById("Level")
	document.getElementById("Results2").innerHTML="(1)You are" + level.options[level.selectedIndex].innerText + "<br>"; //this will show a coding "skill" level.
	
	
	for (var i=1; i<=9; i++) {
		var y = document.getElementsByName("name7-"+i)[0];       //this will take all of the coding languages from a checklist, and will list all of the ones you are familiar with.
	
		if(y.checked) {
		 	document.getElementById("Results2").innerHTML+="(2)You are familiar with "+ y.value + "<br>" 
		}
	}
		document.getElementById("Results2").innerHTML+="(3)Your Composition:" + document.getElementById("coding").value +"<br>"; //this will simply embed a short writing sample of the user's experience with coding.

}

function get_radio(name) {
	var radios = document.getElementsByName(name);

	for (var i = 0, length = radios.length; i < length; i++) {
	    if (radios[i].checked) {
	        // do whatever you want with the checked radio
	        return radios[i].value;
	    }
	}
}