// Click on animate-button and animate the button by giving it a class
document.querySelector('.animate-button').addEventListener('click', (e) => {
    document.querySelector('.square').classList.toggle('square__to-right')
})