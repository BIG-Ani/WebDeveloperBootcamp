var gameLevel=6;
var colors = generateRandomColors(gameLevel);

var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("h1 span");
var h1 = document.querySelector("h1");
var newGameButton = document.querySelector(".newGame");

var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

squaresColors();

newGameButton.addEventListener("click", function(){
	colors = generateRandomColors(gameLevel);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	squaresColors();
	h1.style.background = "#232323";
	messageDisplay.textContent = null;
});

function squaresColors(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];

		squares[i].addEventListener("click", function(){
			var clickColor = this.style.background;

			console.log(clickColor, pickedColor);
			if (clickColor === pickedColor) {
				ChangeColor(pickedColor);
				messageDisplay.textContent = "You Win!!! Play Again?";
				//alert("CORRECT!!!");
				h1.style.background = clickColor;
			} else{
				/*alert("WRONG!!!");*/
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}



function ChangeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var targetColor = Math.floor(Math.random()*colors.length);
	return colors[targetColor];
}

function generateRandomColors(listNums){
	var arr=[];

	for (var i = 0; i < listNums; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	// rad component
	var r = Math.floor(Math.random()*256);
	// green component
	var g = Math.floor(Math.random()*256);
	// blue component
	var b = Math.floor(Math.random()*256);

	return "rgb"+"("+r+", "+g+", "+b+")";
}

