document.querySelector('#calculator-window')
document.querySelector('#one').addEventListener('click', numbers)


function numbers() {
    const content = document.querySelector('[data-action]').textContent
    console.log(content)
}
console.log(numbers)