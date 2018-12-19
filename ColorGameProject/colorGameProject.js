var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

var pickedColor = colors[3];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("h1 span");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickColor = this.style.background;

		if (clickColor === pickedColor) {
			alert("CORRECT!!!");
		} else{
			alert("WRONG!!!");
		}
	});
}