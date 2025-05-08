const button = document.querySelector('button')
const API_KEY = '0183a63a439847eaa15105852250805' 
let result = document.querySelector('.result')
button.addEventListener('click', (e) => {
    const city = document.querySelector('#weather')
    const cityName = city.value.trim()
    if (cityName === '' ) {
        result.innerHTML = `Please enter a valid city!`
    }
    else {
        async function getWeather() {
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`)
                const json = await response.json()
                console.log(json)
                result.innerHTML = `<p>Temp in Celcius = ${json.current.temp_c} </p> <p>Temp in Farenheit = ${json.current.temp_f}</p> <p>Himidity = ${json.current.humidity}</p> `
            }
    
            catch (error) {
                console.log("error")
            }
        }
        getWeather()
    }

    

      
})

