let player = {
  name: "Player",
  chips: 145,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let newGameEl = document.getElementById("newGame-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard === 1) {
    return 11;
  } else if (randomCard >= 11) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  newGameEl.textContent = "";
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  isAlive = true;
  hasBlackJack = false;
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    newGameEl.textContent = "Click on START GAME to start a new game";
  } else {
    message = "You're out of the game!";
    isAlive = false;
    newGameEl.textContent = "Click on START GAME to start a new game";
  }

  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  console.log(isAlive);
  console.log(hasBlackJack);
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  } else {
    newGameEl.textContent = "Click on START GAME to start a new game";
  }
}
