var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");

var player1Score = document.querySelector("#p1Display");
var player2Score = document.querySelector("#p2Display");

var wholeTurn = document.querySelector("#numberOfCompetition");

var P1score=0;
var P2score=0;

p1Button.addEventListener("click", p1ScoreUp);
p2Button.addEventListener("click", p2ScoreUp);

function p1ScoreUp(){
	P1score++;
	player1Score.textContent = P1score;

}

function p2ScoreUp(){
	P2score++;
	player2Score.textContent = P2score;
}