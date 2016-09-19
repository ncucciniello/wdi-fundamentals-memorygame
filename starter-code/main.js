 var cards = ["queen", "king", "king", "queen"];

var cardsInPlay = [];

var board = document.getElementById("game-board");

function createBoard() {
  for (var i = 0; i < cards.length; i++) {

    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards)

    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}

function isTwoCards() {
  console.log(cardsInPlay)
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute("data-card") === "king") {
    this.innerHTML = "<img src= 'http://www.danfergusdesign.com/classfiles/oldClasses/VCB313-old-advCompIllus/proj-card/king-clubs.png'>";
  } else{
    this.innerHTML = "<img src= 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Poker-sm-213-Qs.png'>"
  }
  
  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);

    cardsInPlay = [];

  }

}

function resetCards () {
  var reset = document.querySelectorAll('.card');
    for (var i = 0; i < reset.length; i++) {
      reset[i].innerHTML = '';
    }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert('You found a match!');
    

  } else {
    alert('Sorry, try again.');

  }
  resetCards();
}

createBoard();