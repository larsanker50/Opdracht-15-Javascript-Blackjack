const playerCards = document.getElementById("playerCards");
const dealerCards = document.getElementById("dealerCards");
const score = document.getElementById("score");
const shareButton = document.getElementById("shareButton");
const pasButton = document.getElementById("pasButton");
const playerCard = document.getElementsByClassName("playerCard");
const dealerCard = document.getElementsByClassName("dealerCard");
const scorePlayerTable = document.getElementById("scorePlayerTable");
const scoreDealerTable = document.getElementById("scoreDealerTable");
const winsPlayerTable = document.getElementById("winsPlayerTable");
const winsDealerTable = document.getElementById("winsDealerTable");
const gameOverHTML = document.getElementById("gameOverHTML");
const newGameButton = document.getElementById("newGameButton");
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const cardRanks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"];
const cardSymbols = ["heart", "club", "diamond", "spade"];
const playerCardsArray = [];
const dealerCardsArray = [];
const usedCardsArray = [];
const cards = [];
let scorePlayer = 0;
let scoreDealer = 0;
let playerAceOne = false;
let dealerAceOne = false;
let shareFunctionUsed = false;
let gameEnd = false;
let pasButtonAvailable = false;
let pasButtonClicked = false;

function createCards() {
  for (cardNumber = 0; cardNumber <= 51; cardNumber++) {
    if (cards.length < 52) {
      for (let symbolIndex = 0; symbolIndex < cardSymbols.length; symbolIndex++) {
        for (let rankIndex = 0; rankIndex < cardRanks.length; rankIndex++) {
          cardValue = cardValues[rankIndex];
          cardRank = cardRanks[rankIndex];
          cardSymbol = cardSymbols[symbolIndex];
          window["card" + (cardNumber + 1)] = {
            value: cardValue,
            rank: cardRank,
            symbol: cardSymbol
          };
          cards.push(eval("card" + (cardNumber + 1)));
        };
      };
    };
    for (amountCards = 0; amountCards < 52; amountCards++) {
      window["card" + (amountCards + 1)] = cards[amountCards];
    };
  };
};

function randomDealerCard() {
  if (usedCardsArray.length < 52) {
    randomCard("dealer");
    makeHTMLCard("dealer");
    updateScore("dealer");
    gameEndFunction("dealer");
  } else {
    alert("there are no more cards left");
    return;
  };
};

function randomPlayerCard() {
  if (usedCardsArray.length < 52) {
    randomCard("player");
    makeHTMLCard("player");
    updateScore("player");
    gameEndFunction("player");
  } else {
    alert("there are no more cards left");
    return;
  };
};

function randomCard(user) {
  let random = Math.floor((Math.random() * 52));
  let card = ("card" + (random + 1));
  if (usedCardsArray.includes(eval(card)) == false) {
    usedCardsArray.push(eval(card));
    if (user == "player") {
    playerCardsArray.push(eval(card));
    };
    if (user == "dealer") {
      dealerCardsArray.push(eval(card));
      };
  } else if (usedCardsArray.length < 52) {
    randomCard(user);
  };
};

function makeHTMLCard(user) {
  if (user == "player") {
    userCard = playerCard;
    userCardString = "playerCard";
    cardsArray = playerCardsArray;
    userCards = playerCards;
  } if (user == "dealer") {
    userCard = dealerCard;
    userCardString = "dealerCard";
    cardsArray = dealerCardsArray;
    userCards = dealerCards;
  };
  let div = userCards.appendChild(document.createElement("div"));
  div.classList.add(userCardString);
  document.getElementsByClassName(userCardString)[cardsArray.length - 1].innerHTML = ((cardsArray[(cardsArray.length - 1)].symbol) + ",\n" + (cardsArray[(cardsArray.length - 1)].rank));
  userCard[cardsArray.length - 1].classList.add(cardsArray[cardsArray.length - 1].symbol);
  if (dealerCardsArray.length == 1);
  dealerCard[0].innerHTML = "secret" + "\n" + "secret";
  dealerCard[0].classList.add("brown");
  dealerCard[0].classList.remove("heart", "diamond", "spade", "club");
};

function updateScore(user) {
  if (user == "player") {
    cardsArray = playerCardsArray;
    userScoreTable = scorePlayerTable;
    userScore = scorePlayer;
  };
  if (user == "dealer") {
    cardsArray = dealerCardsArray;
    userScoreTable = scoreDealerTable;
    userScore = scoreDealer;
  };
  let tempScore = 0;
  for (i = 0; i < cardsArray.length; i++) {
    tempScore = tempScore + cardsArray[i].value;
    if (tempScore > 21) {
      for (j = 0; j < cardsArray.length; j++) {
        if (cardsArray[j].value == 11) {
          cardsArray[j].value = 1;
          i = 0;
          tempScore = 0;
        }
        if (user == "player") {
          playerAceOne = true;
        }
        if (user == "dealer") {
          dealerAceOne = true;
        };
      };
    };
  };
  if (user == "player") {
    scorePlayer = tempScore;
    scorePlayerTable.innerHTML = scorePlayer;
  } else if (user == "dealer" && dealerCardsArray.length == 2 && gameEnd == false) {
    scoreDealer = dealerCardsArray[1].value;
    scoreDealerTable.innerHTML = dealerCardsArray[1].value;
  } else if (user == "dealer" && gameEnd == true) {
    scoreDealer = tempScore;
    scoreDealerTable.innerHTML = scoreDealer;
  };
};

function gameEndFunction(user) {
  if (user == "player") {
    cardsArray = playerCardsArray;
    userScoreTable = scorePlayerTable;
    userScore = scorePlayer;
    userAceOne = playerAceOne;
  };
  if (user == "dealer") {
    cardsArray = dealerCardsArray;
    userScoreTable = scoreDealerTable;
    userScore = scoreDealer;
    userAceOne = dealerAceOne;
  };
  if (userScore > 21 && userAceOne == true || userScore == 12 || userScore == 21 || pasButtonClicked == true) {
    gameEnd = true;
    while (scoreDealer < 16 && scoreDealer <= scorePlayer || scoreDealer == 16 && scorePlayer == 16) {
      randomCard("dealer");
      makeHTMLCard("dealer");
      updateScore("dealer");
    };
    gameOverFunction();
  };
};

function gameOverFunction() {
  dealerCard[0].innerHTML = ((dealerCardsArray[0].symbol) + ",\n" + (dealerCardsArray[0].rank));
  dealerCard[0].classList.add(dealerCardsArray[0].symbol);
  dealerCard[0].classList.remove("brown");
  if (scorePlayer > 21 || scorePlayer < scoreDealer && scoreDealer < 22 && scorePlayer != 12) {
    gameOverHTML.innerHTML = "Game Over, you lost";
    gameOverHTML.style.backgroundColor = "red";
    winsDealerTable.innerHTML++;
  } else if (scorePlayer == scoreDealer && scorePlayer != 0) {
    gameOverHTML.innerHTML = "Draw";
    gameOverHTML.style.backgroundColor = "gray";
  } else {
    gameOverHTML.innerHTML = "You have won!";
    gameOverHTML.style.backgroundColor = "green";
    winsPlayerTable.innerHTML++;
  };
  if (winsPlayerTable.innerHTML > winsDealerTable.innerHTML) {
    winsPlayerTable.style.backgroundColor = "#4dff4d";
    winsDealerTable.style.backgroundColor = "#ff4d4d";
  } else if (winsDealerTable.innerHTML > winsPlayerTable.innerHTML){
    winsPlayerTable.style.backgroundColor = "#ff4d4d";
    winsDealerTable.style.backgroundColor = "#4dff4d";
  } else {
    winsPlayerTable.style.backgroundColor = "Silver";
    winsDealerTable.style.backgroundColor = "Silver";
  };
  gameOverFunctionUsed = true;
  newGameButton.style.backgroundColor = "#4CAF50"
  pasButton.style.backgroundColor = "#ff4d4d"
  shareButton.style.backgroundColor = "#ff4d4d"
};

shareButton.onclick = function () {
  if (gameEnd == false) {
    newGameButton.style.backgroundColor = "#ff4d4d"
    pasButton.style.backgroundColor = "#4CAF50";
    if (shareFunctionUsed == false) {
      createCards();
      while (dealerCardsArray.length != 2) {
        randomDealerCard();
      };
      while (playerCardsArray.length != 2) {
        randomPlayerCard();
      };
      shareFunctionUsed = true;
      pasButtonAvailable = true;
      shareButton.innerHTML = "Hit";
    } else {
      randomPlayerCard();
    };
  };
};

pasButton.onclick = function () {
  if (gameEnd == true || pasButtonAvailable == false) { return };
  gameEnd = true;
  pasButtonClicked = true;
  updateScore("dealer");
  gameEndFunction("dealer");
};

newGameButton.onclick = function () {
  if (gameEnd == true) {
    shareButton.innerHTML = "Share";
    gameOverHTML.innerHTML = "";
    playerCards.innerHTML = "";
    dealerCards.innerHTML = "";
    scorePlayerTable.innerHTML = 0;
    scoreDealerTable.innerHTML = 0;
    playerCardsArray.length = 0;
    dealerCardsArray.length = 0;
    usedCardsArray.length = 0;
    cards.length = 0;
    scorePlayer = 0;
    scoreDealer = 0;
    playerAceOne = false;
    dealerAceOne = false;
    pasButtonAvailable = false;
    pasButtonClicked = false;
    shareFunctionUsed = false;
    gameOverHTML.style.backgroundColor = "white";
    gameEnd = false;
    newGameButton.style.backgroundColor = "#ff4d4d";
    pasButton.style.backgroundColor = "#4CAF50";
    shareButton.style.backgroundColor = "#4CAF50";
  };
};

pasButton.style.backgroundColor = "#ff4d4d";
newGameButton.style.backgroundColor = "#ff4d4d";