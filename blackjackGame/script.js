let Cards = [];
let sum = 0;
let message = ""
let blackjack = false;
let isActive = false;
let result = document.querySelector('#result');
let cards = document.getElementById('cards');
let luck = document.getElementById('luck');

function startGame() {
    isActive = true;
    Cards.push(randomCard());
    Cards.push(randomCard());
    for(let i = 0; i < Cards.length; i++) {
        sum += Cards[i];
    }
    renderGame();
}

function randomCard() {
    let card = Math.ceil(Math.random()*10) + 1;
    return card;
}

function renderGame() {
    let cardsText = "Cards: ";
    for (let i = 0; i < Cards.length; i++) {
        cardsText += Cards[i] + " ";
    }
    cards.textContent = cardsText;
    
    luck.textContent = "Sum: " + sum;
    if(sum < 21) {
        message = "Wanna draw another card?";
    }
    else if(sum === 21) {
        message = "Woohoo! You've got blackjack!";
        blackjack = true;
    }
    else {
        message = "Alas! You're out of the game!"
        isActive = false;
    }

    result.textContent = message;
}

function newCard() {
    if(isActive && !blackjack) {
        let newcard = randomCard();
        Cards.push(newcard);
        sum += newcard;
        renderGame(); 
    }
    
}