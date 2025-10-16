let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = {
        wins: 0,
        loss: 0,
        ties: 0
    }
}

updateScoreBoard();

let res = document.querySelector('.js-result');
let choice = document.querySelector('.js-choice');


function Move() {
    let randomMove = '';
    let computerMove = Math.random();
    if(computerMove >= 0 && computerMove < 1/3) randomMove = 'Rock';
    else if(computerMove >= 1/3 && computerMove < 2/3) randomMove = 'Paper';
    else randomMove = 'Scissors';
    return randomMove;
}
function resultGame(user) {
    const random = Move();
    result = '';
    if (user === 'Rock') {
        if(random === 'Rock') result = 'Tie';
        else if(random === 'Paper') result = 'You Lose';
        else result = 'You Win';
    }
    if (user === 'Paper') {
        if(random === 'Rock') result = 'You Win';
        else if(random === 'Paper') result = 'Tie';
        else result = 'You Lose';
    }
    if (user === 'Scissors') {
        if(random === 'Rock') result = 'You Lose';
        else if(random === 'Paper') result = 'You Win';
        else result = 'Tie';
    }

    if(result === 'You Win') score.wins += 1;
    else if(result === 'You Lose') score.loss += 1;
    else score.ties += 1;

    res.innerHTML = `${result}`;
    choice.innerHTML = `You <img src="assets/${user}-emoji.png"> - <img src="assets/${random}-emoji.png"> Computer`;
    updateScoreBoard();

    const score1 = JSON.stringify(score);
    localStorage.setItem('score', score1);
}

function updateScoreBoard() {
    let scoreBoard = document.querySelector('.js-score');
    scoreBoard.innerHTML = `Wins: ${score.wins}. Losses: ${score.loss}. Ties: ${score.ties}`;
}


let intervalId;

function autoPlay() {
    const buttonText = document.querySelector('.auto');
    let isAutoPlay = false;
    if (buttonText.innerHTML === 'Auto Play') {buttonText.innerHTML = 'Stop'; isAutoPlay = true;}
    else {
        buttonText.innerHTML = 'Auto Play';
        isAutoPlay = false;
    }
    if (isAutoPlay) {
        intervalId = setInterval(function Play() {
        const move = Move();
        resultGame(move);
        }, 1000); 
    }
    else {
        clearInterval(intervalId);
    }
    
    
}