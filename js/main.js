//var cards = ["queen", "queen", "king", "king"]

var cards = [
{	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},

];
var score=0;


//var cardOne = cards[0];
//var cardTwo = cards[1];
var cardsInPlay = [];



//cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);


function checkForMatch(){


	 if (cardsInPlay.length >= 2) {

		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			score++; 
			document.getElementById("score").innerHTML="You are a weiner! Your score is..." + score;
		} 
		else { 
			alert("Sorry, try again.");
		} 
	}
}

function flipCard() {
		var cardID = this.getAttribute("data-id");
		console.log("User flipped " + cards[cardID].rank);
		cardsInPlay.push(cards[cardID].rank);
		console.log(cards[cardID].suit);
		console.log(cards[cardID].cardImage);
			this.setAttribute("src", cards[cardID].cardImage);
		checkForMatch();
			
}
//flipCard(0);
//flipCard(2);


function createBoard() {
	for (var i = 0; i < cards.length; i++) {

		var cardElement = document.createElement("img");	
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}
createBoard();


//console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);
console.log(cardsInPlay);