//This Jacascript file codes for the index html page (the beginning page)

var currentColorIndex = 0;
var colors = ["#A88F56", "#271B00", "#A88F56", "#66501D"]
function ChangeColor() //this calls on a button in the html index page that when hovered hovered over, will cycle through these colors...
{
	++currentColorIndex;
	if (currentColorIndex == colors.length) {
		currentColorIndex = 0 // this will allow he colors to loop
	}
	document.getElementById('introinputstyle').style.backgroundColor=colors[currentColorIndex];
}
