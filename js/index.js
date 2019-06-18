// Your code goes here

const navLink = document.querySelectorAll('.nav-link')
const home = document.querySelector('.home')
const h2s = document.querySelectorAll('h2')
const funBus = document.querySelector('.intro img')
const pTags = document.querySelectorAll('p')
const button = document.querySelectorAll('.btn')
const images = document.querySelectorAll('.img-content')
const footer = document.querySelector('.footer p')
const body = document.querySelector('body')
const topBar = document.querySelector('.main-navigation')

navLink.forEach(function (element) {
    element.addEventListener('mouseover', function (event) {
        event.target.style.color = '#008800'
    })
})

home.addEventListener('click', function (event) {
    home.style.backgroundColor = '#8ab7b4';
})

h2s.forEach(function (element) {
    element.addEventListener('dblclick', function (event) {
        event.target.style.fontWeight = 'bold';
    })
})

document.addEventListener('keypress', (event) => {
    if (event.keyCode !== 37 || event.keyCode !== 38 || event.keyCode !== 39 || event.keyCode !== 40) {
        alert('Stop pushing buttons!')
    }
})


funBus.addEventListener('dragstart', function (event) {
    event.target.style.opacity = .5;
}, false)

pTags.forEach(function (element) {
    element.tabIndex = 1
    element.addEventListener('focus', function (event) {
        event.target.style.backgroundColor = '#008000'
    });
    element.addEventListener('blur', function (event) {
        event.target.style.background = '';
    });
})

button.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.stopPropagation()
        event.target.style.backgroundColor = '#e6e6fa';
        event.target.style.color = '#1e90ff';
    })
})

images.forEach(function (element) {
    element.addEventListener('mouseover', event => {
        event.target.style.opacity = '.6'
    })
})

footer.addEventListener('wheel', function () {
    console.log('its working');
    footer.style.backgroundColor = 'tan'
})

window.addEventListener('keydown', function (event) {
    body.style.backgroundColor = '#DAFFEF'
    body.style.color = '#17A2B8'
    topBar.style.color = '#FFFFFF'
})
