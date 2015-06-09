function CourseFunction() {
	
	var text = "";

	var course_array = [];

for (i = 0; i < 3; i++){
		course_array.push(prompt("what course do you want"));
		text += "<li>" + course_array[i] + "</li>"
		document.getElementById('course').innerHTML = text;	
	}
}


function careerFunctions () {
	var writting = "";

	var class_array = [];
	var i = 0;

	while (i < 3) {	
		class_array.push(prompt("what career do you think you'd like?"));
		writting += "<li>" + class_array[i] + "</li>"
		document.getElementById('classes').innerHTML = writting;
		console.log(i);
		i++;

	}
}

function picture () {

	console.log("is this working?");

	document.getElementById('pictureReveal').innerHTML = "<img class='hiddenPic' src='http://images.bwbx.io/cms/2012-01-26/tech_coding05__01__600.jpg' alt='coding'>";


	console.log("the picture should be there");
}