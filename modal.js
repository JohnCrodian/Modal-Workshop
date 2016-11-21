//Get the modal
var modal = document.getElementById("myModal");

//Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

//When the user clicks on <span> (x), close the modal

close.onclick = function () {
	modal.style.display = "none";
}

//Timed popup function

function popUp () {
var modal = document.getElementById("myModal");
	modal.style.display = "block"
}

window.setTimeout(popUp, 3000);
