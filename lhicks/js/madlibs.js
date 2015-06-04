//establish where the quizzes are located
var form1=document.forms.quiz1;
var form2=document.forms.quiz2;
form1.addEventListener("submit",genMadLibs,false);
function genMadLibs(event)
{
	event.preventDefault();
	//log to make sure genMadLibs() works
	console.log("submit has been clicked");
	//answers are stored in the object "answers"
	var answers=
	{
		answer1: form1.question1.value,
		answer2: form1.question2.value,
		answer3: form1.question3.value,
		answer4: form1.question4.value,
		answer5: form1.question5.value,
		answer6: form1.question6.value,
		answer7: form1.question7.value,
		answer8: form2.question8.value,
		answer9: form2.question9.value,
		answer10: form2.question10.value,
		answer11: form2.question11.value,
		answer12: form2.question12.value,
		answer13: form2.question13.value,
	}
	//take user answers and fill out the mad libs
	var text="<h4>If you are traveling in "+answers.answer1+" and find yourself having to cross a piranha-filled river, here's how to do it "+answers.answer2+". Piranhas are more "+answers.answer3+" during the day, so cross the river at night. Avoid areas with netted "+answers.answer4+" traps--piranhas may be "+answers.answer5+" there looking to "+answers.answer6+" them! When "+answers.answer7+" the river, swim "+answers.answer8+ ". You don't want to wake them up and make them "+answers.answer9+"! Whatever you do, if you have an open wound, try to find another way to get back to the "+answers.answer10+ ". Piranhas are attracted to fresh "+answers.answer11+" and while most likely take a bite out of your "+answers.answer12+" if you "+answers.answer13+" in the water!<h4>";
	//update page with new text
	document.getElementById("madLibs").innerHTML=text;
}