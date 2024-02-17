//___________________________________________________________________
const hitButton = document.querySelector("#hit-button");
hitButton.addEventListener('click', clickButton);

function clickButton() {
    const randomCard = getRandomCard(getDeck());
    console.log(`Your card is ${randomCard.rank} of ${randomCard.suit}. Did you bust?`);
}

function getDeck() {
    const deck = []
    const suits = ["♠", "♡", "♢", "♣"];
    const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Knave", "Queen", "King"];
    for(const suit of suits) {
        for(const rank of ranks) {
            deck.push({suit, rank});
        }
    }
    return deck;
}

function getRandomCard(deck) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
}

window.getRandomCard = getRandomCard;
//___________________________________________________________________

// const hitButton = document.querySelector("#hit-button");
// hitButton.addEventListener('click', dealRandomCard);

// function dealRandomCard() {
//     const randomCard = getRandomCard(getDeck());
//     dealToDisplay(randomCard);
//     // console.log(`Your card is ${randomCard.rank} of ${randomCard.suit}. Did you bust?`);
// }

// function getDeck() {
//     const deck = []
//     const suits = ["♠", "♡", "♢", "♣"];
//     const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Knave", "Queen", "King"];
//     for(const suit of suits) {
//         for(const rank of ranks) {
//             deck.push({suit, rank});
//         }
//     }
//     return deck;
// }

// function getRandomCard(deck) {
//     const randomIndex = Math.floor(Math.random() * deck.length);
//     return deck[randomIndex];
// }

// function dealToDisplay(card) {
//     const rankWord = rankToWord(card.rank);
//     const suitWord = suitToWord(card.suit);
//     const displayMessage = `Your card is ${rankWord} of ${suitWord}. Did you bust?`;
//     console.log(displayMessage); 

//     const cardDisplayContainer = document.querySelector("#card-display");
//     cardDisplayContainer.textContent = displayMessage;
// }

// function rankToWord(rank) {
//     const mapRanksToWords = { 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", };
//     if (typeof rank === "number") {
//         return mapRanksToWords[rank] || rank.toString();
//     } else {
//         return rank; 
//     }
// }

// function suitToWord(suit) {
//     const mapSuitsToWords = {
//         "♠": "Spades",
//         "♡": "Hearts",
//         "♢": "Diamonds",
//         "♣": "Clubs",
//         "": "Mystery"
//     };
//     return mapSuitsToWords[suit];
// }

// function rankToValue(rank) {
//     if (["Knave", "Queen", "King"].includes(rank)) {
//         return "10";
//     } else if (rank === "Ace") {
//         return "11/1"; 
//     } else if (rank === "Face Down") {
//         return "?";
//     } else {
//         return rank.toString(); 
//     }
// }
