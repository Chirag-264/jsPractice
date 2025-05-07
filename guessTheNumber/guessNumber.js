let randomNumber = Number(Math.round(Math.random() * 100) + 1)
const form = document.querySelector('form')
let guesses = []
const disguess = document.querySelector('.guesses')
const remaining = document.querySelector('.remaining')
const message = document.querySelector('.message')
let startGame = true
let remainingGuess = 10

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (startGame) {
        const input1 = document.querySelector('#input')
        const input = Number(input1.value)
        validateNumber(input)
        input1.value = '' 
        disguess.innerHTML = guesses.map((nums) => (`  ${nums}`))  
        remaining.innerHTML = `${remainingGuess}`
    }
    
})

function validateNumber(number) {
    if (remainingGuess === 1) {
        endGame()
    }
    else {
        if (number < 1 || number >100 || isNaN(number)) {
            displayMessage('PLEASE ENTER A VALID NUMBER!')
        }
        else {
            if (number === randomNumber) {
                displayMessage('WOOHOOO!! YOU GUESSED IT RIGHT!')  
                endGame()
            }
            else if (number < randomNumber) {
                displayMessage('ITS TOOO LOWWW!!')
                guesses.push(number)
                remainingGuess--
        
            }
            else if (number > randomNumber) {
                displayMessage('ITS TOOOO HIGHH!!')
                guesses.push(number)
                remainingGuess--
            }

        }
        
    }
    
}

function displayMessage(s) {
    message.innerHTML = `${s}`;
}

function endGame() {
    startGame = false
    displayMessage(`Game Over!, the number was ${randomNumber}`)
    document.querySelector('.again').style.display = 'block'
    

}

const newGame = document.querySelector('.again')
    newGame.addEventListener('click', (e) => {
        e.preventDefault()
        startGame = true
        document.querySelector('.again').style.display = 'none'
        guesses = []
        disguess.innerHTML = guesses.map((nums) => (`${nums},  `)) 
        remainingGuess = 10
        randomNumber = Number(Math.round(Math.random() * 100) + 1)
        displayMessage('')
    })