import { notANumber, calculateIMC } from "./utils.js"

const form = document.querySelector('form')
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')
const alertError = document.querySelector('.alert-error')

const modal = document.querySelector('.modal-wrapper')
const btnClose = document.querySelector('.modal button.close')
const span = document.querySelector('.modal .title span')


form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightNaN = notANumber(weight) || notANumber(height)

    if (weightOrHeightNaN) {
        alertError.classList.add('open')
        emptyInput(inputHeight, inputWeight)
        return;
    }
    alertError.classList.remove('open')

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

btnClose.onclick = () => {
    modal.classList.remove('open')
    cleanInput()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if (event.key === 'Escape') {
        modal.classList.remove('open')
    }
}

function displayResultMessage(result) {
    modal.classList.add('open')
    span.innerText = `Seu IMC é ${result}`
    cleanInput()
}


function emptyInput(event) {
    event.addEventListener('keypress', () => alertError.classList.remove('open'))
}

const cleanInput = () => {
    inputHeight.value = ""
    inputWeight.value = ""
}

