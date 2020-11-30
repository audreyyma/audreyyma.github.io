/*document.getElementById('default').classList.remove("hidden");*/

function color(element) {
    document.getElementById(element).classList.remove("hidden");
    document.getElementById(element+"-recipe").style.display = "block";
    document.getElementById("title").style.display = "none";
}

function hide(element) {
    document.getElementById(element).classList.add("hidden");
    document.getElementById(element+"-recipe").style.display = "none";
    document.getElementById("title").style.display = "block";
}

function colorShooters() {
	color('shooters');
}

function colorBreads() {
	color('breads');
}

function colorCake() {
	color('cake');
}

function colorMacarons() {
	color('macarons');
}

function colorSandwiches() {
	color('sandwiches');
}

document.getElementById("button1").onmouseover = colorShooters;
document.getElementById("button2").onmouseover = colorBreads;
document.getElementById("button3").onmouseover = colorCake;
document.getElementById("button4").onmouseover = colorMacarons;
document.getElementById("button5").onmouseover = colorSandwiches;

function hideShooters() {
	hide('shooters');
}

function hideBreads() {
	hide('breads');
}

function hideCake() {
	hide('cake');
}

function hideMacarons() {
	hide('macarons');
}

function hideSandwiches() {
	hide('sandwiches');
}

document.getElementById("button1").onmouseout = hideShooters;
document.getElementById("button2").onmouseout = hideBreads;
document.getElementById("button3").onmouseout = hideCake;
document.getElementById("button4").onmouseout = hideMacarons;
document.getElementById("button5").onmouseout = hideSandwiches;


document.getElementById("background-music").play();
