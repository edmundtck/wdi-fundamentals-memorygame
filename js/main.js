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
	var display = document.querySelector('.display');
if (cardsInPlay[1] === cardsInPlay[3]) {
	 display.textContent = 'You found a match!';
} else {
	 display.textContent = 'Sorry, try again';
}
};

var resetBoard = function() {
for (var i = 0; i < cards.length; i++) {
	var newElement = document.getElementsByTagName('img')[i];
	newElement.setAttribute('src', 'images/back.png');
	document.querySelector('.display').textContent = 'Let\'s start a new match';
	cardsInPlay = [];
}
};

// function to flip card
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardId].rank);
	
// check to see for similiar selection
	cardsInPlay.push(cardId);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

// exercute function 2 times 
if (cardsInPlay.length === 4) {
	if (cardsInPlay[0] === cardsInPlay[2]) {
		cardsInPlay.pop();
		cardsInPlay.pop();
	} else {
		checkForMatch();
	}
}
if (cardsInPlay.length === 6) {
	resetBoard();
}
};

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}	
};

// calling function to flip card
createBoard();