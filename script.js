const playerCards = document.getElementById("playerCards")
const dealerCards = document.getElementById("dealerCards")
const score = document.getElementById("score")
const delenButton = document.getElementById("delenButton")
const pasButton = document.getElementById("pasButton")
const card = document.getElementsByClassName("card")
let playerCardsArray = []

//dit stukje code maakt de kaart objecten aan in de Deck class
class Deck {
    constructor(value, symbol, rank) {
        this.value = value;
        this.symbol = symbol;
        this.rank = rank;
    }
  }

let card1 = new Deck(2, "heart", 2);
let card2 = new Deck(3, "heart", 3);
let card3 = new Deck(4, "heart", 4);
let card4 = new Deck(5, "heart", 5);
let card5 = new Deck(6, "heart", 6);
let card6 = new Deck(7, "heart", 7);
let card7 = new Deck(8, "heart", 8);
let card8 = new Deck(9, "heart", 9)
let card9 = new Deck(10, "heart", 10)
let card10 = new Deck(10, "heart", "Jack")
let card11 = new Deck(10, "heart", "Queen")
let card12 = new Deck(10, "heart", "King")
let card13 = new Deck(11, "heart", "Ace")
let card14 = new Deck(2, "club", 2)
let card15 = new Deck(3, "club", 3)
let card16 = new Deck(4, "club", 4)
let card17 = new Deck(5, "club", 5)
let card18 = new Deck(6, "club", 6)
let card19 = new Deck(7, "club", 7)
let card20 = new Deck(8, "club", 8)
let card21 = new Deck(9, "club", 9)
let card22 = new Deck(10, "club", 10)
let card23 = new Deck(10, "club", "Jack")
let card24 = new Deck(10, "club", "Queen")
let card25 = new Deck(10, "club", "King")
let card26 = new Deck(11, "club", "Ace")
let card27 = new Deck(2, "diamond", 2)
let card28 = new Deck(3, "diamond", 3)
let card29 = new Deck(4, "diamond", 4)
let card30 = new Deck(5, "diamond", 5)
let card31 = new Deck(6, "diamond", 6)
let card32 = new Deck(7, "diamond", 7)
let card33 = new Deck(8, "diamond", 8)
let card34 = new Deck(9, "diamond", 9)
let card35 = new Deck(10, "diamond", 10)
let card36 = new Deck(10, "diamond", "Jack")
let card37 = new Deck(10, "diamond", "Queen")
let card38 = new Deck(10, "diamond", "King")
let card39 = new Deck(11, "diamond", "Ace")
let card40 = new Deck(2, "spade", 2)
let card41 = new Deck(3, "spade", 3)
let card42 = new Deck(4, "spade", 4)
let card43 = new Deck(5, "spade", 5)
let card44 = new Deck(6, "spade", 6)
let card45 = new Deck(7, "spade", 7)
let card46 = new Deck(8, "spade", 8)
let card47 = new Deck(9, "spade", 9)
let card48 = new Deck(10, "spade", 10)
let card49 = new Deck(10, "spade", "Jack")
let card50 = new Deck(10, "spade", "Queen")
let card51 = new Deck(10, "spade", "King")
let card52 = new Deck(11, "spade", "Ace")

//dit stukje code pakt een willekeurige kaart

function randomCard() {
        let random = Math.floor((Math.random() * 52) + 1);
        let card = ("card" + random)
        playerCardsArray.push(eval(card));
        console.log(card)
    }