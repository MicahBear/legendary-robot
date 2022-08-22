
document.querySelectorAll('li').forEach((el) => {
    el.addEventListener('click', () => { numberPressed(el.textContent) })
})


function numberPressed(num) {
    console.log(num)
}