console.log("up and running!");

console.log("User flipped queen");
console.log("User flipped king");


alert('Hello, friends.');

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) { 
			console.log("You found a match");
		} else { 
			console.log("Sorry, try again."); 
		}
	}

function flipCard() {
var cardId = this.getAttribute('data-id');
	console.log("User flipped" + cards.rank);
	cardsInPlay.push(cards.rank);
	console.log(cards.cardImage);
	console.log(cards.suit);
this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {	
checkForMatch();
};
};



function createBoard() {
	const cardTable = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('date-id', i);
	cardElement.addEventListener('click', flipCard);
	cardTable.appendChild(cardElement);
}
};

createBoard();

