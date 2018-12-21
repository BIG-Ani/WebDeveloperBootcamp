var gameLevel=6;
var colors = generateRandomColors(gameLevel);

var squarePanel = document.querySelector("#container");
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("h1 span");
var h1 = document.querySelector("h1");
var newGameButton = document.querySelector(".newGame");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

squaresColors();

easyButton.addEventListener("click", function(){
	easyButton.classList.add("isSelected");
	hardButton.classList.remove("isSelected");

	gameLevel = 3;
	colors = generateRandomColors(gameLevel);
	pickedColor = pickColor();
	messageDisplay.textContent = null;
	h1.style.background = "steelblue";

	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}else {
			squares[i].style.background = "none";
		}
	}
})

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("isSelected");
	hardButton.classList.add("isSelected");

	gameLevel = 6;
	colors = generateRandomColors(gameLevel);
	pickedColor = pickColor();
	messageDisplay.textContent = null;
	h1.style.background = "steelblue";

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
})

newGameButton.addEventListener("click", function(){
	resetColor();
});

function resetColor(){
	colors = generateRandomColors(gameLevel);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	squaresColors();
	h1.style.background = "steelblue";
	newGameButton.textContent = "New Colors";
	messageDisplay.textContent = null;
}

function squaresColors(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];

		squares[i].addEventListener("click", function(){
			var clickColor = this.style.background;
			// Test report
			console.log(clickColor, pickedColor);

			if (clickColor === pickedColor) {
				//change the other squares' colors
				ChangeColor(pickedColor);
				messageDisplay.textContent = "You Win!!!";
				newGameButton.textContent = "Play Again?";
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
	for (var i = 0; i < colors.length; i++) {
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