const playerCards = document.getElementById("playerCards");
const dealerCards = document.getElementById("dealerCards");
const score = document.getElementById("score");
const delenButton = document.getElementById("delenButton");
const pasButton = document.getElementById("pasButton");
const playerCard = document.getElementsByClassName("playerCard");
const dealerCard = document.getElementsByClassName("dealerCard");
const scorePlayerTable = document.getElementById("scorePlayerTable")
const scoreDealerTable = document.getElementById("scoreDealerTable")
let playerCardsArray = [];
let dealerCardsArray = [];
let usedCardsArray = [];
let delenFunctionUsed = false;
let amountPlayerCards = 0
let amountDealerCards = 0
let gameEnd = false
let scorePlayer = 0
let scoreDealer = 0
let playerAceOne = false
let dealerAceOne = false

//dit is de delen/hit knop functie
delenButton.onclick = function() {
  if (gameEnd == false) {
    if (delenFunctionUsed == false) {
      delenFunction();
    } else {
      hitFunction();
    };
  } else {
  }
};


//dit stukje code maakt de kaart objecten aan in de Deck class
class Deck {
    constructor(value, symbol, rank) {
        this.value = value;
        this.symbol = symbol;
        this.rank = rank;
    };
  };

let card1 = new Deck(2, "heart", 2);
let card2 = new Deck(3, "heart", 3);
let card3 = new Deck(4, "heart", 4);
let card4 = new Deck(5, "heart", 5);
let card5 = new Deck(6, "heart", 6);
let card6 = new Deck(7, "heart", 7);
let card7 = new Deck(8, "heart", 8);
let card8 = new Deck(9, "heart", 9)
let card9 = new Deck(10, "heart", 10)
let card10 = new Deck(10, "heart", "jack")
let card11 = new Deck(10, "heart", "queen")
let card12 = new Deck(10, "heart", "king")
let card13 = new Deck(11, "heart", "ace")
let card14 = new Deck(2, "club", 2)
let card15 = new Deck(3, "club", 3)
let card16 = new Deck(4, "club", 4)
let card17 = new Deck(5, "club", 5)
let card18 = new Deck(6, "club", 6)
let card19 = new Deck(7, "club", 7)
let card20 = new Deck(8, "club", 8)
let card21 = new Deck(9, "club", 9)
let card22 = new Deck(10, "club", 10)
let card23 = new Deck(10, "club", "jack")
let card24 = new Deck(10, "club", "queen")
let card25 = new Deck(10, "club", "king")
let card26 = new Deck(11, "club", "ace")
let card27 = new Deck(2, "diamond", 2)
let card28 = new Deck(3, "diamond", 3)
let card29 = new Deck(4, "diamond", 4)
let card30 = new Deck(5, "diamond", 5)
let card31 = new Deck(6, "diamond", 6)
let card32 = new Deck(7, "diamond", 7)
let card33 = new Deck(8, "diamond", 8)
let card34 = new Deck(9, "diamond", 9)
let card35 = new Deck(10, "diamond", 10)
let card36 = new Deck(10, "diamond", "jack")
let card37 = new Deck(10, "diamond", "queen")
let card38 = new Deck(10, "diamond", "king")
let card39 = new Deck(11, "diamond", "ace")
let card40 = new Deck(2, "spade", 2)
let card41 = new Deck(3, "spade", 3)
let card42 = new Deck(4, "spade", 4)
let card43 = new Deck(5, "spade", 5)
let card44 = new Deck(6, "spade", 6)
let card45 = new Deck(7, "spade", 7)
let card46 = new Deck(8, "spade", 8)
let card47 = new Deck(9, "spade", 9)
let card48 = new Deck(10, "spade", 10)
let card49 = new Deck(10, "spade", "jack")
let card50 = new Deck(10, "spade", "queen")
let card51 = new Deck(10, "spade", "king")
let card52 = new Deck(11, "spade", "ace")

//dit stukje code pakt een willekeurige kaart
function randomPlayerCard() {
        let random = Math.floor((Math.random() * 52) + 1);
        let card = ("card" + random)
        if (usedCardsArray.includes(card.toString()) == false) {
          playerCardsArray.push(eval(card));
          usedCardsArray.push(card.toString());
          //dit stukje code maakt nieuwe HTML kaarten aan.
          let div = playerCards.appendChild(document.createElement("div"));
          div.classList.add("playerCard")
          playerCard[amountPlayerCards].innerHTML = ((playerCardsArray[amountPlayerCards].symbol)+",\n"+(playerCardsArray[amountPlayerCards].rank))
          playerCard[amountPlayerCards].classList.add(playerCardsArray[amountPlayerCards].symbol)
          console.log("player" + card);
          console.log(playerCardsArray)
          scorePlayer = scorePlayer + playerCardsArray[amountPlayerCards].value
          scorePlayerTable.innerHTML = scorePlayer
          if (scorePlayer > 21 && playerAceOne == false) {
            scorePlayer = 0
            for (i = 0; i < playerCardsArray.length; i++) {
              if (playerCardsArray[i].rank == "ace" ){
                playerCardsArray[i].value = 1
              } scorePlayer = scorePlayer + playerCardsArray[i].value
            } scorePlayerTable.innerHTML = scorePlayer
            playerAceOne = true
          }
          if (scorePlayer > 21 && playerAceOne == true) {
            gameOverFunction()
            gameEnd = true
          }
          amountPlayerCards++
        } else if (usedCardsArray.length < 52){
          randomPlayerCard()
        } else {
          alert("De kaarten zijn op")
        };
  };

function randomDealerCard() {
        let random = Math.floor((Math.random() * 52) + 1);
        let card = ("card" + random)
        if (usedCardsArray.includes(card.toString()) == false) {
          dealerCardsArray.push(eval(card));
          usedCardsArray.push(card.toString());
          //dit stukje code maakt nieuwe HTML kaarten aan.
          let div = dealerCards.appendChild(document.createElement("div"))
          div.classList.add("dealerCard")
          if (amountDealerCards > 0) {
            dealerCard[amountDealerCards].innerHTML = ((dealerCardsArray[amountDealerCards].symbol)+",\n"+(dealerCardsArray[amountDealerCards].rank))
            dealerCard[amountDealerCards].classList.add(dealerCardsArray[amountDealerCards].symbol)
          } else {
            dealerCard[amountDealerCards].innerHTML = "secret"+"\n"+"secret";
            dealerCard[amountDealerCards].classList.add("brown")
          }
          scoreDealer = scoreDealer + dealerCardsArray[amountDealerCards].value
          if (scoreDealer > 21 && dealerAceOne == false) {
            scoreDealer = 0
            for (i = 0; i < dealerCardsArray.length; i++) {
              if (dealerCardsArray[i].rank == "ace" ){
                dealerCardsArray[i].value = 1
              } scoreDealer = scoreDealer + dealerCardsArray[i].value
            } scoreDealerTable.innerHTML = scoreDealer
            DealerAceOne = true
          }
          if (scoreDealer >= 21 && dealerAceOne == true) {
            gameOverFunction()
            gameEnd = true
          }
          if (amountDealerCards > 1) {
            scoreDealerTable.innerHTML = scoreDealer
            dealerCard[0].innerHTML = ((dealerCardsArray[0].symbol)+",\n"+(dealerCardsArray[0].rank))
            dealerCard[0].classList.add(dealerCardsArray[0].symbol)
            dealerCard[0].classList.remove("brown")
          }
          amountDealerCards++
        } else if (usedCardsArray.length < 52){
          randomDealerCard()
        } else {
          alert("De kaarten zijn op")
        }
  };  

  // dit is de functie voor de delenfunctieknop
function delenFunction() {
  randomPlayerCard()
  randomPlayerCard()
  randomDealerCard()
  randomDealerCard()
  delenFunctionUsed = true
  delenButton.innerHTML = "Hit";
}

// dit is de functie voor de hitfunctieknop
function hitFunction() {
  randomPlayerCard();
}

// dit is de functie voor de pasfunctieknop
pasButton.onclick = function() {
  gameEnd = true;
  while (scoreDealer < scorePlayer) {
    randomDealerCard()
  }
  gameOverFunction()
  
}

// dit is de game over functie
function gameOverFunction() {
  scoreDealerTable.innerHTML = scoreDealer
  dealerCard[0].innerHTML = ((dealerCardsArray[0].symbol)+",\n"+(dealerCardsArray[0].rank))
  dealerCard[0].classList.add(dealerCardsArray[0].symbol)
  dealerCard[0].classList.remove("brown")
  if (scorePlayer > 21 || scorePlayer < scoreDealer && scoreDealer < 22) {
    document.getElementById("gameOverHTML").innerHTML = "Game Over, u heeft verloren"
  } else if (scorePlayer == scoreDealer) {
    document.getElementById("gameOverHTML").innerHTML = "Gelijkspel"
  } else {
    document.getElementById("gameOverHTML").innerHTML = "U heeft gewonnen!"
  }
}