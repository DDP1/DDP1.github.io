var i = 0



//writes the time for a page that doesnt require the functions of other scripts
var myTime =setInterval(function(){myTimer()},1);
//prints and updates the local time
function myTimer() {
    var d = new Date();
    document.getElementById("timeTable").innerHTML = d.toLocaleTimeString();
}

