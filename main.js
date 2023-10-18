let firstcard = randomcard();
let secondcard = randomcard();
let sum = firstcard + secondcard;
let cards = [firstcard, secondcard];
let hasBlackJack = false;
let isAlive = false;
// let playername="Achlendu"
// let playerchips=300
let messageEl = document.getElementById("message-el");
let sumel = document.getElementById("summat");
let cardel = document.getElementById("card-el");
let playerel=document.getElementById("player-el")
let player={
  name: "Achlendu",
  chips: 300
}
playerel.textContent=player.name+": $"+player.chips
function startGame() {
  isAlive = true;
  renderGame();
}
function renderGame() {
  sumel.textContent = "Sum: " + sum;
  cardel.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardel.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    let message = "Do you want to draw a new card?";

    messageEl.textContent = message;
  } else if (sum === 21) {
    let message = "You have got Blackjack";
    hasBlackJack = true;
    messageEl.textContent = message;
  } else {
    let message = "You are out of the game!";
    messageEl.textContent = message;
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = randomcard();
    sum += card;
    cards.push(card);
    startGame();
  }
}
function randomcard() {
  return Math.floor(Math.random() * 13) + 1;
}

