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

navLink.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.color = '#008800'
    })

    element.addEventListener('mouseout', event => {
        event.target.style.color = '#000'
    })
})

home.addEventListener('dblclick', event => {
    home.style.backgroundColor = '#8ab7b4';
})

h2s.forEach(element => {
    element.addEventListener('click', event => {
        event.target.style.fontWeight = 'bold';
    })
})

document.addEventListener('keypress', event => {
    if (event.keyCode !== 37 || event.keyCode !== 38 || event.keyCode !== 39 || event.keyCode !== 40) {
        alert('Stop pushing buttons!')
    }
})


funBus.addEventListener('dragstart', event => {
    event.target.style.opacity = .5;
}, false)

pTags.forEach(element => {
    element.tabIndex = 1
    element.addEventListener('focus', event => {
        event.target.style.backgroundColor = '#008000'
    });
    element.addEventListener('blur', event => {
        event.target.style.background = '';
    });
})

button.forEach(element => {
    element.addEventListener('click', event => {
        event.stopPropagation()
        event.target.style.backgroundColor = '#e6e6fa';
        event.target.style.color = '#1e90ff';
    })


})

images.forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.style.opacity = '.6'
    })

    element.addEventListener('mouseout', event => {
        event.target.style.opacity = '1'
    })
})

footer.addEventListener('wheel', function () {
    footer.style.backgroundColor = 'tan'
})

window.addEventListener('keydown', function (event) {
    body.style.backgroundColor = '#DAFFEF'
    body.style.color = '#17A2B8'
    topBar.style.color = '#FFFFFF'
})
