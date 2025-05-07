const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = Number(document.querySelector('#height').value)
    console.log(height)
    const weight = Number(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (height === 0 || isNaN(height)) {
        result.innerHTML = 'Please Enter a valid height!';
    }
    else if (weight === 0 || isNaN(weight)) {
        result.innerHTML = 'Please Enter a valid weight!';
    } 
    else {
        const BMI = ((weight * 10000) / (height * height)).toFixed(1);
        result.innerHTML = `${BMI}`;
    }
})