const firstButton = document.querySelector('.first-number')
const iput = document.querySelector('.input')
const textIput = document.querySelector('.input-text')
const text = document.querySelector('p') 
firstButton.addEventListener("click", () => {
    if (iput.value.trim() === "") {
        text.textContent = "Не всі поля заповнені";
    }
    else if (textIput.value.trim() === ""){
        text.textContent = "Не всі поля заповнені";
    }
    else if (iput.value.trim() !== "") {
        text.textContent = "Обидва поля заповнені";
    }
})

let inputNumber = document.querySelector('.input-number')
let inputSecondNumber = document.querySelector('.input-second-number')
const buttonSecondNumber = document.querySelector('.second-number')
const pText = document.querySelector('.text')
buttonSecondNumber.addEventListener("click", () => {
console.log(inputSecondNumber.value)
console.log(inputNumber.value)
    if (Number(inputNumber.value) + Number(inputSecondNumber.value) > 10) {
        pText.textContent = "Сума більша за 10";
        console.log(Number(inputNumber.value) + Number(inputSecondNumber.value));
    }
    else {
        pText.textContent = "Сума менша або дорівнює 10";
        console.log(Number(inputNumber.value) + Number(inputSecondNumber.value));
    }
})

const inputSecondText = document.querySelector('.input-second-text')
const thirdButton = document.querySelector('.third-number')
const pSecondText = document.querySelector('.second-text')
thirdButton.addEventListener("click", () => {
    if (inputSecondText.value.includes("JavaScript")) {
        pSecondText.textContent = "Текст містить слово JavaScript"
    }
    else {
        pSecondText.textContent = "Текст не містить слово JavaScript"
    }
})

const inputThirdNumber = document.querySelector('.input-third-number')
const forthNumber = document.querySelector('.forth-number')
const pThirdText = document.querySelector('.third-text') 
forthNumber.addEventListener("click", () => {
    if (10 <= Number(inputThirdNumber.value)) {
        pThirdText.textContent = "Число входить в діапазон від 10 до 20";
    }
    else if (Number(inputThirdNumber.value) >= 20) {
        pThirdText.textContent = "Число входить в діапазон від 10 до 20";
    }
    else {
        pThirdText.textContent = "Число не входить в діапазон від 10 до 20";
    }
})

const inputName = document.querySelector('#input-name')
const inputEmail = document.querySelector('#input-Email')
const inputPassword = document.querySelector('#input-password')
const fifthNumber = document.querySelector('.fifth-number')
const pForthText = document.querySelector('.forth-text') 
fifthNumber.addEventListener("click", () => {
    if (inputName.value.length < 2) {
        pForthText.textContent = "опана... Помилочка! Перевірте чи правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 8 символів.";
    }
    else if (!inputEmail.value.includes("@")) {
        pForthText.textContent = "опана... Помилочка! Перевірте чи правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 8 символів.";
    }
    else if (!inputEmail.value.includes(".")) {
        pForthText.textContent = "опана... Помилочка! Перевірте чи правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 8 символів.";
    }
    else if (inputPassword.value.length < 8) {
        pForthText.textContent = "опана... Помилочка! Перевірте чи правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 8 символів.";
    }
    else {
        window.location.href = 'main.html';
    }
})