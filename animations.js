// Click on animate-button and animate the button by giving it a class
document.querySelector('.animate-button').addEventListener('click', (e) => {
    document.querySelector('.square').classList.toggle('square__to-right')
})

// After some time of loading page, start animation automatically
setTimeout( () => {
    document.querySelector('.square').classList.toggle('square__to-right');
}, 2000)