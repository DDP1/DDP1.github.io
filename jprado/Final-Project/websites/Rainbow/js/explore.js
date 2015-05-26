var button = document.getElementById("button");

var rainbow = ["red","orange","yellow","green","blue","indigo","violet","purple","chocolate","DarkRed","forestgreen"];

function change () {
	document.body.style.background = rainbow[Math.floor(7*Math.random())]

}
var message = "4 + 5";

console.log(message);

button.addEventListener('click',change);