console.log("up and running!");

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

alert('Hello, friends.');

var cards = ["queen", "king", "king", "king"];
var cardsInPlay = [];
console.log("User flipped queen");
console.log("User flipped king");


var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {	
	if (cardsInPlay[0] === cardsInPlay[1]) { 
		alert("User found a match!");
	} else { 
		alert("User did not find a match!") 
	}
}


