const bd = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id) {
            bd.style.backgroundColor = e.target.id
        }
        
    })
})