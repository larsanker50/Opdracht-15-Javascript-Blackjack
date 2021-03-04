const playerCards = document.getElementById("playerCards");
const dealerCards = document.getElementById("dealerCards");
const score = document.getElementById("score");
const delenButton = document.getElementById("delenButton");
const pasButton = document.getElementById("pasButton");
const playerCard = document.getElementsByClassName("playerCard");
const dealerCard = document.getElementsByClassName("dealerCard");
const scorePlayerTable = document.getElementById("scorePlayerTable");
const scoreDealerTable = document.getElementById("scoreDealerTable");
const gameOverHTML = document.getElementById("gameOverHTML");
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
const cardRanks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"]
const cardSymbols = ["heart", "club", "diamond", "spade"]
const playerCardsArray = [];
const dealerCardsArray = [];
const usedCardsArray = [];
const cards = []
let amountDealerCards = 0
let scorePlayer = 0;
let scoreDealer = 0;
let playerAceOne = false;
let dealerAceOne = false;
let delenFunctionUsed = false;
let gameEnd = false;







//dit stukje code maakt de kaartobjecten aan.
function createCards() {
for (cardNumber = 0; cardNumber <= 51; cardNumber++) {
  if (cards.length < 52) {
    for (let symbolIndex = 0; symbolIndex < cardSymbols.length; symbolIndex++) {
      for (let rankIndex = 0; rankIndex < cardRanks.length; rankIndex++) {
        cardValue = cardValues[rankIndex]
        cardRank = cardRanks[rankIndex]
        cardSymbol = cardSymbols[symbolIndex]
        window["card" + (cardNumber + 1)] = {
          value: cardValue,
          rank: cardRank,
          symbol: cardSymbol
        }
        cards.push(eval("card" + (cardNumber + 1)))
      }
    }
  }
  for (amountCards = 0; amountCards < 52; amountCards++)
    window["card" + (amountCards + 1)] = cards[amountCards]
}
}


function randomPlayerCard() {
  randomCard("player")
  if (usedCardsArray.length < 52) {
  makeHTMLCard("player")
  updateScore("player")
  aceOnePoint("player")
  } else {
    alert("De kaarten zijn op")
    return
  }
}

function randomCard(user) {
  let random = Math.floor((Math.random() * 52));
  let card = ("card" + (random + 1));
  if (usedCardsArray.includes(eval(card)) == false) {
    usedCardsArray.push(eval(card))
    if (user == "player") {
    playerCardsArray.push(eval(card))
    }
    if (user == "dealer") {
      dealerCardsArray.push(eval(card))
      }
  } else if (usedCardsArray.length < 52) {
    randomCard(user)
  }
}

function makeHTMLCard(user) {
    if (user == "player") {
      userCard = playerCard;
      userCardString = "playerCard"
      cardsArray = playerCardsArray
      userCards = playerCards
    } if (user == "dealer") {
      userCard = dealerCard;
      userCardString = "dealerCard"
      cardsArray = dealerCardsArray
      userCards = dealerCards
    }
    let div = userCards.appendChild(document.createElement("div"));
    div.classList.add(userCardString);
    document.getElementsByClassName(userCardString)[cardsArray.length - 1].innerHTML = ((cardsArray[(cardsArray.length - 1)].symbol) + ",\n" + (cardsArray[(cardsArray.length - 1)].rank));
    userCard[cardsArray.length - 1].classList.add(cardsArray[cardsArray.length - 1].symbol)
}


function updateScore(user) {
  if (user == "player") {
    cardsArray = playerCardsArray
    userCards = playerCards
    userScore = scorePlayer
    userScoreTable = scorePlayerTable
  }
  userScoreTable.innerHTML = 0
  for (i = 0; i < cardsArray.length; i++) {
    if (cardsArray[i].rank == "ace" && userScoreTable.innerHTML > 21) {
      cardsArray[i].value = 1;
      userScore = userScore + cardsArray[i].value;
      userScoreTable.innerHTML = userScore;
     } else {
      userScore = userScore + cardsArray[i].value;
      userScoreTable.innerHTML = userScore;
    }
  }
}


/*     //dit stukje code maakt van ace 11 punten 1 punt
    if (scorePlayer > 21 && playerAceOne == false) {
      scorePlayer = 0;
      for (i = 0; i < playerCardsArray.length; i++) {
        if (playerCardsArray[i].rank == "ace") {
          playerCardsArray[i].value = 1;
        } scorePlayer = scorePlayer + playerCardsArray[i].value;
      } scorePlayerTable.innerHTML = scorePlayer;
      playerAceOne = true;
    };
    //dit stukje code bepaald het einde van de game
    if (scorePlayer > 21 && playerAceOne == true || scorePlayer == 12 || scorePlayer == 21) {
      gameOverFunction();
      gameEnd = true;
    };
    amountPlayerCards++;
  } else if (usedCardsArray.length < 52) {
    randomPlayerCard();
  } else {
    alert("De kaarten zijn op");
  };
}; */
//dit stukje code pakt een willekeurige kaart voor de dealer              //in verschillende functies zetten. kijken welke functies dubbel zijn.
function randomDealerCard() {
  let random = Math.floor((Math.random() * 52));
  let card = ("card" + (random + 1));
  if (usedCardsArray.includes(card.toString()) == false) {
    dealerCardsArray.push(eval(card));
    usedCardsArray.push(card.toString());
    //dit stukje code maakt nieuwe HTML kaarten aan.
    let div = dealerCards.appendChild(document.createElement("div"));
    div.classList.add("dealerCard");
    if (amountDealerCards > 0) {
      dealerCard[amountDealerCards].innerHTML = ((dealerCardsArray[amountDealerCards].symbol) + ",\n" + (dealerCardsArray[amountDealerCards].rank));
      dealerCard[amountDealerCards].classList.add(dealerCardsArray[amountDealerCards].symbol);
    } else {
      dealerCard[amountDealerCards].innerHTML = "secret" + "\n" + "secret";
      dealerCard[amountDealerCards].classList.add("brown");
    };
    //dit stukje code maakt van ace 11 punten 1 punt
    scoreDealer = scoreDealer + dealerCardsArray[amountDealerCards].value;
    if (scoreDealer > 21 && dealerAceOne == false) {
      scoreDealer = 0;
      for (i = 0; i < dealerCardsArray.length; i++) {
        if (dealerCardsArray[i].rank == "ace") {
          dealerCardsArray[i].value = 1;
        } scoreDealer = scoreDealer + dealerCardsArray[i].value;
      } scoreDealerTable.innerHTML = scoreDealer;
      DealerAceOne = true;
    };
    //dit stukje code bepaald het einde van de game
    if (scoreDealer >= 21 && dealerAceOne == true) {
      gameOverFunction();
      gameEnd = true;
      console.log("test")
    };
    //dit stukje code maakt de eeerste kaart onbekend
    if (amountDealerCards > 1) {
      scoreDealerTable.innerHTML = scoreDealer;
      dealerCard[0].innerHTML = ((dealerCardsArray[0].symbol) + ",\n" + (dealerCardsArray[0].rank));
      dealerCard[0].classList.add(dealerCardsArray[0].symbol);
      dealerCard[0].classList.remove("brown");
    };
    amountDealerCards++;
  } else if (usedCardsArray.length < 52) {
    randomDealerCard();
  } else {
    alert("De kaarten zijn op");
  };
};

//dit is de delen/hit knop functie
delenButton.onclick = function () {
  if (gameEnd == false) {
    if (delenFunctionUsed == false) {
      createCards();
      randomDealerCard();       // parameters gebruiken voor dubbele code 
      randomPlayerCard();
      delenFunctionUsed = true;
      delenButton.innerHTML = "Hit";
    } else {
      randomPlayerCard();
    };
  }
};

// dit is de functie voor de pasfunctieknop
pasButton.onclick = function () {
  if (gameEnd == true) { return }
  gameEnd = true;
  while (scoreDealer < 16 && scoreDealer <= scorePlayer || scoreDealer == 16 && scorePlayer == 16) {
    randomDealerCard();
  }
  gameOverFunction()
}

// dit is de game over functie                boel op nul zetten ipv opnieuw knop
function gameOverFunction() {
  scoreDealerTable.innerHTML = scoreDealer;
  dealerCard[0].innerHTML = ((dealerCardsArray[0].symbol) + ",\n" + (dealerCardsArray[0].rank));
  dealerCard[0].classList.add(dealerCardsArray[0].symbol);
  dealerCard[0].classList.remove("brown");
  if (scorePlayer > 21 || scorePlayer < scoreDealer && scoreDealer < 22 && scorePlayer != 12) {
    gameOverHTML.innerHTML = "Game Over, u heeft verloren";
    gameOverHTML.style.backgroundColor = "red";
  } else if (scorePlayer == scoreDealer && scorePlayer != 0) {
    gameOverHTML.innerHTML = "Gelijkspel";
  } else {
    gameOverHTML.innerHTML = "U heeft gewonnen!";
    gameOverHTML.style.backgroundColor = "green";
  };
};