var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");

var player1Score = document.querySelector("#p1Display");
var player2Score = document.querySelector("#p2Display");

var gameTurn = document.querySelector("p span");

var P1score=0;
var P2score=0;

var isGameOver=false;
var winningTurn=11;

var inputNum = document.querySelector("input");

p1Button.addEventListener("click", p1ScoreUp);
p2Button.addEventListener("click", p2ScoreUp);
reset.addEventListener("click", rst);

inputNum.addEventListener("change", GameTurnSetting);

function p1ScoreUp(){
	if (!isGameOver) {
		if (P1score===winningTurn) {
			isGameOver = true;
			player1Score.classList.add("winning");
		}else{
			P1score++;
		}
	}
	player1Score.textContent = P1score;
}

function p2ScoreUp(){
	if (!isGameOver) {
		if(P2score===winningTurn){
			player2Score.classList.add("winning");
			isGameOver = true;
		}else{
			P2score++;
		}
	}
	player2Score.textContent = P2score;
}

function rst(){
	player1Score.textContent = 0;
	player2Score.textContent = 0;

	player1Score.classList.remove("winning");
	player2Score.classList.remove("winning");

	P1score=P2score=0;
	isGameOver = false;
}

function GameTurnSetting(){
	gameTurn.textContent = inputNum.value;
	winningTurn = Number(inputNum.value);
	rst();
}