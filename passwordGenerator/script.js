let lengthObj = document.querySelector('input');
let Chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+=@\/";

function generatePassword(length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * Chars.length);
        password += Chars[randomIndex];
    }
    return password;
}

function renderPassword() {
    let length = parseInt(lengthObj.value);
    let password1 = document.getElementById('pass1');
    let password2 = document.getElementById('pass2');
    password1.textContent = generatePassword(length);
    password2.textContent = generatePassword(length);
}
