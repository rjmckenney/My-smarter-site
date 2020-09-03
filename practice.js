function fillCity() {
	var cityName;
	var zipEntered = document.getElementById("zip").nodeValue;
	switch (zipEntered) {
		case "60608":
			cityName = "Chicago";
			break;
		case "68114":
			cityName = "Omaha";
			break;
		case "33054":
			cityName = "Miami";
			break;
	}
	document.getElementById("city").value = cityName;
}
function swapPic(Id, newPic) {
	document.getElementById(Id).src = newPic;
}

//code below is: Browser control: filling the window with content
//var monkeyWindow = window.open();
//var windowContent =
//	"<h1>Capuchin monkey</h1><img src='https://commons.wikimedia.org/wiki/File:Garan_Sunrise.jpg'><p>The word capuchin derives from a group of friars<br>named of the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";

//monkeyWindow.document.write(windowContent);

function greetWorld() {
	try {
		var greeting = "Hello world!";
		aler(greeting);
	} catch (err) {
		alert(err);
	}
}
// this code calls a function that swaps one image for another when the user mouses over the original image.
// var targetImg = document.getElementById("before");
// targetImg.onmouseover = swapPic;

var before = document.getElementById("next"),
    next = document.getElementById("next");

 before.onmouseover = function(){
     next.style.display = "block";
 }
 before.onmouseout = function(){
     next.style.display = "none";
 }

