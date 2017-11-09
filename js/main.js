// data for cards
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{	
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

// function to check if cards match
var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log('You found a match!');
} else {
	console.log('Sorry, try again');
}
};

// function to flip card
var flipCard = function(cardId) {
console.log('User flipped ' + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

// exercute function 2 times 
if (cardsInPlay.length === 2) {
checkForMatch();
}
};

// calling function to flip card
flipCard(0);
flipCard(2);
