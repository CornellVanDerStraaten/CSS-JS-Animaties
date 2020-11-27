// Click on animate-button and animate the button by giving it a class
document.querySelector('.animate-button').addEventListener('click', (e) => {
    document.querySelector('.square').classList.toggle('square__to-right')
})

// After some time of loading page, start animation automatically
setTimeout( () => {
    document.querySelector('.square').classList.toggle('square__to-right');
}, 2000)

// Clicking on a nav button pushes every nav__link on the page by giving them the class nav__link--push-in
const menuButton        = document.querySelector('.nav__button');
const navigationItems   = document.querySelectorAll('.nav__link');
menuButton.addEventListener('click', () => {
    navigationItems.forEach( (item,index) => {
        setTimeout( () => {
            item.classList.toggle('nav__link--push-in');
        }, 100 * index);
    })
})