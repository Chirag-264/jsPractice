const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const bd = document.querySelector('body')

let colour = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    console.log(color);
    
    return color
}

let interval 

function startColor() {
    if (!interval){
        interval = setInterval(changeBG, 1000)
    }
    
    function changeBG() {
        bd.style.backgroundColor = colour();
    } 
}

function stopColor() {
    clearInterval(interval)
    interval = null
}

start.addEventListener('click', startColor, false)

stop.addEventListener('click', stopColor, false)
