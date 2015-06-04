//random background color
var randColor = [0,0,0];
var i=0;
function colorgen(r, g, b){
	return ["rgb(",r,",",g,",",b,")"].join("");
}
//time delay auto
	setInterval(function() {
	for(i=0;i<3;i++)
	{
	randColor[i]=Math.floor(Math.random()*255);
	}	document.body.style.background = colorgen(randColor[0],randColor[1],randColor[2]);
	}, 1008);

//random picture generator
var ranPic = Math.floor((Math.random()*8));
document.getElementById("content").innerHTML = "<div class='image'><img src='images/ran"+ranPic+".gif'/></div>";
console.log(ranPic);
//random image generator
function change() {
	document.getElementById("content").innerHTML = "<div class='image'><img src='images/ran"+ranPic+".gif'/></div>";
}

//sets music 
var mood = prompt("Do you BELEIVE?");

//repeates until they say yes
function truth() {
	if (mood === "yes") {
		console.log("yes");
	} else {
	prompt("I think you can BELEIVE. Do you BELEIVE yet?");
	}
};
function magic() {
	while (i>10) {
		var party = "It's now a party"
	}
}


