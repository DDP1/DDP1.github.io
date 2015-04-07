//  DRILL:  WHAT WILL THE CODE BELOW DO????
var printer = prompt("How many printers are in this room?");

var paper = prompt("How many sheets of paper do you have?");

function compare() {
	if (printer <= paper) {
		console.log("There is more paper. The amount of paper is " + paper);
	} else if (paper <= printer) {
		console.log("There are more printers. The number of printers is " + printer);
	} else if (paper == printer) {
		console.log("The number of printers and sheets of paper, " + printer + ", are the same.")
	} else {
		console.log("Fatal error: Invalid values.")
	}
}
