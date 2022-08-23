// disply user input history
// function getHistory() {
//     return document.getElementByID("history-value").innerText;

// }

// function printHistory(num) {
//     return document.getElementById("history-value").innerText = num;
// }

// function getOutput() {
//     return document.getElementById("output-value").innerText;
// }

// function printOutput(num) {
//     if (num == "") {
//         console.log(document.getElementById("output-value").innerText = num);
//     } else {
//         document.getElementById("output-value").innerTxt = getFormattedNumber(num);
//     }
// }

// function getFormattedNumber(num) {
//     console.log(num)
//     if (num == "") {
//         return "";
//     }
//     let n = Number(num);
//     console.log(n)
//     let value = n.toLocaleString("en");
//     return value;
// }

// // clear commas
// function reverseNumberFormat(num) {
//     return Number(num.replace(/,/g, ''));
// }
// let operator = document.querySelector('[data-action]');
// console.log(operator)

// for (let i = 0; i < operator.length; i++) {
//     console.log(this.id)
//     operator[i].addEventListener("click", () => {
//         if (this.id == "clear") {
//             printHistory("");
//             printOutput("");
//         } else if (this.id == "backspace") {
//             let output = reverseNumberFormat(getOutput()).toString();
//             if (output) {
//                 output = output.substr(0, output.length - 1);
//                 printOutput(output)
//             }
//         } else {
//             let output = getOutput();
//             let history = getHistory();
//             if (output == "" && history != "") {
//                 if (isNaN(history[history.length - 1])) {
//                     history = history.substr(0, history.length - 1);
//                 }
//             } if (output != "" || history != "") {
//                 output = output == "" ?
//                     output : reverseNumberFormat(output);
//                 history = history + output;
//                 if (this.id == "=") {
//                     let result = eval(history);
//                     printOutput(result);
//                     printHistory("");
//                 } else {
//                     history = history + this.id;
//                     printHistory(history);
//                     printOutput("");
//                 }
//             }
//         }
//     });
// }



// let numBtn = document.querySelectorAll('[data-number]')
// for (let i = 0; i < numBtn.length; i++) {
//     numBtn[i].addEventListener("click", () => {
//         let output = reverseNumberFormat(getOutput());
//         if (output != NaN) {
//             output = output + this.id;
//             printOutput(output)
//         }
//     });
// }

const keys = document.querySelector('#keyboard')
keys.addEventListener('click', event => {
    console.log(event.target.dataset.key)
    const key = event.target
    const keyValue = key.dataset.key
    console.log(keyValue)
})

//! zell

// const calculator = document.querySelector('.calculator')
// const keys = calculator.querySelector('.calculator__keys')
// const display = calculator.querySelector('.calculator__display')
// const operatorKeys = keys.querySelectorAll('[data-type="operator"]')

// keys.addEventListener('click', event => {
//     if (!event.target.closest('button')) return

//     const key = event.target
//     const keyValue = key.textContent
//     const displayValue = display.textContent
//     const { type } = key.dataset
//     const { previousKeyType } = calculator.dataset

//     if (type === 'number') {
//         if (
//             displayValue === '0' ||
//             previousKeyType === 'operator'
//         ) {
//             display.textContent = keyValue
//         } else {
//             display.textContent = displayValue + keyValue
//         }
//     }

//     if (type === 'operator') {
//         operatorKeys.forEach(el => { el.dataset.state = '' })
//         key.dataset.state = 'selected'

//         calculator.dataset.firstNumber = displayValue
//         calculator.dataset.operator = key.dataset.key
//     }

//     if (type === 'equal') {
//         // Perform a calculation
//         const firstNumber = calculator.dataset.firstNumber
//         const operator = calculator.dataset.operator
//         const secondNumber = displayValue
//         display.textContent = calculate(firstNumber, operator, secondNumber)
//     }

//     if (type === 'clear') {
//         display.textContent = '0'
//         delete calculator.dataset.firstNumber
//         delete calculator.dataset.operator
//     }

//     calculator.dataset.previousKeyType = type
// })

// function calculate(firstNumber, operator, secondNumber) {
//     firstNumber = parseInt(firstNumber)
//     secondNumber = parseInt(secondNumber)

//     if (operator === 'plus') return firstNumber + secondNumber
//     if (operator === 'minus') return firstNumber - secondNumber
//     if (operator === 'times') return firstNumber * secondNumber
//     if (operator === 'divide') return firstNumber / secondNumber
// }

